const client = require("../index");
const log = require('../handlers/logger')

const { cyan, red, yellow, white, greenBright, bold, underline } = require("colorette");
const { Timestamp } = require("@sapphire/time-utilities");

const timestamp = `[${cyan(bold(new Timestamp("YYYY-MM-DD HH:mm:ss")))}]:`;

client.on("ready", async () => {  
        console.clear();

        if(mongoose.connection.readyState == 1){
            console.log(`${timestamp} ${magenta(bold(`CONNECTION`))} ${white(bold(`MongoDB Connection: ${green(bold(`true`))}`))}`)
        }else console.log(`${timestamp} ${magenta(bold(`CONNECTION`))} ${white(bold(`MongoDB Connection: ${red(bold(`false`))}`))}`)
    
        console.log(`${timestamp} ${blue(bold(`INFO`))} ${white(bold(`Commands: ${yellow(bold(client.commands.size))}`))}`)
        console.log(`${timestamp} ${blue(bold(`INFO`))} ${white(bold(`Slash Commands: ${yellow(bold(client.slashCommands.size))}`))}`)
        console.log(`${timestamp} ${blue(bold(`INFO`))} ${white(bold(`Bot Name: ${yellow(bold(client.user.username))}`))}`)
        console.log(`${timestamp} ${blue(bold(`INFO`))} ${white(bold(`Servers: ${yellow(bold(client.guilds.cache.size))}`))}`)
            client.user.setActivity(`${client.guilds.cache.size} servers`, { type: ['WATCHING']})
});
