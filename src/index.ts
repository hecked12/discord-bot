import * as Discord from "discord.js";
import * as config from "./config";
import { IBotCommand } from "./api";

const client:Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);

client.on("ready", () => {
    console.log("Bot ready");
});

client.on("message", msg => {
    console.log(msg.channel.id);

    if(msg.author.bot) return;
    if(!msg.content.startsWith(config.config.prefix)) return;
    if(msg.channel.id !== config.config.botChannelId) return;

    handleCommand(msg);
});

async function handleCommand(msg: Discord.Message){
    // split string into command and args
    let command = msg.content.split(" ")[0].replace(config.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for(const commandClass of commands){
        try {
            if(!commandClass.isThisCommand(command)) continue;
            await commandClass.runCommand(args, msg, client);
        } catch(exception){
            console.log("ex:", exception);
        }
    }
}


function loadCommands(commandsPath: string){
    if(!config.config || (config.config.commands as string[]).length === 0){return;}

    for(const commandName of config.config.commands as string[]) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }

}

client.login(config.config.token);