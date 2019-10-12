import * as Discord from "discord.js";
import { IBotCommand } from "../api";
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

  async getStreamerStatus(streamerName: string) {
    const endpoint = "https://api.twitch.tv/helix/streams?";

    const options = {
      headers: { 'Client-ID': config.config.twitchClientId },
      qs: { "user_login": streamerName }
    };

    return new Promise((resolve) => {
      try {
        Request.get(endpoint, options, 
          (error: any, response: Request.Response, body: string)=>{
            if (!error && response.statusCode == 200) {
              const res = JSON.parse(body);
              console.log(res);
              if (res.data && res.data.length > 0) {
                resolve(res.data);
              }
            }
            resolve(null);
        });
      } catch (error) {
        console.log(error);
        resolve(null);
      }
    });
  }

  streamToEmbed(stream: any) {
    const embed = new Discord.RichEmbed();
    embed.setTitle(`${stream.user_name} is live!`);
    embed.setColor(0xFF0000);
    embed.setDescription(`
${stream.title}
${stream.viewer_count} 👁️`);
    embed.setImage(stream.thumbnail_url.replace("{width}", "331").replace("{height}", "186"));
    embed.setURL(`https://www.twitch.tv/${stream.user_name}`);
    return embed;
  }

  returnStatus(streamerName: string, streams: any, msgObject: Discord.Message){
    if(streams !== null){
      streams.forEach((stream: any) => {
        if (stream.type === "live") {
          msgObject.channel.send(this.streamToEmbed(stream));
        }
      });
    } else {
      msgObject.channel.send(`${streamerName} is offline.`);
    }
  }

  async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
    const streamerName: string = args[0];
    const selectedCategory: string =  args[1];

    if(streamerName === "all") {
      const twitchCategories = config.config.twitchStreams;

      twitchCategories.forEach(async (ttvStreamerObject: any) => {
        if(ttvStreamerObject.title === selectedCategory){
          const streamers = ttvStreamerObject.streamers;
          streamers.forEach(async (streamer: any) => {
            let streams: any = await this.getStreamerStatus(streamer.name);
            this.returnStatus(streamer.name, streams, msgObject); 
          });
        }
      })
    } else {
      let streams: any = await this.getStreamerStatus(streamerName);
      this.returnStatus(streamerName, streams, msgObject);
    }
  }
}