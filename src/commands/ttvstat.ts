import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import * as Request from "request";
import * as config from "../config";

export default class testCommand implements IBotCommand {
    private readonly _command = "ttvstat";

    help(): string {
        return "Twitch tv status checker.\nAppend ttv username.\nExample: ttvstat tfue";
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {          
          const streamerName:string = args[0];
          function callback(error:any, response: Request.Response, body:string) {
            if (!error && response.statusCode == 200) {
              const res = JSON.parse(body);
              console.log(res);

              if(res.data && res.data.length > 0){
                let streams:any = res.data;

                streams.forEach(stream => {
                  if(stream.type === "live"){

                    const embed = new Discord.RichEmbed();
                    embed.setTitle(`${stream.user_name} is live!`);
                    embed.setColor(0xFF0000);
                    embed.setDescription(`
${stream.title}
${stream.viewer_count} 👁️`);
                    embed.setImage(stream.thumbnail_url.replace("{width}","331").replace("{height}", "186"));
                    embed.setURL(`https://www.twitch.tv/${stream.user_name}`)
                    msgObject.channel.send(embed);
                  }
                });
              } else {
                msgObject.channel.send(`${streamerName} is offline.`);
              }              
            }
          }
          
          Request.get("https://api.twitch.tv/helix/streams?", {
            headers: {
              'Client-ID': config.config.twitchClientId
            },
            qs: {
              "user_login": streamerName
            }
          }, callback);
    }
}