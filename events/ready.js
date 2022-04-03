const client = require("../index");
const log = require('../handlers/logger')

const { cyan, red, yellow, white, greenBright, bold, underline } = require("colorette");
const { Timestamp } = require("@sapphire/time-utilities");

const timestamp = `[${cyan(bold(new Timestamp("YYYY-MM-DD HH:mm:ss")))}]:`;

client.on("ready", async () => {  
        console.log(`\n${timestamp} ${yellow(bold(underline(`Bot Stats`)))}\n${timestamp} ${white(bold(`Servers: ${red(bold(client.guilds.cache.size))}`))}\n${timestamp} ${white(bold(`Commands: ${red(bold(client.commands.size))}`))}\n${timestamp} ${white(bold(`Slash Commands: ${red(bold(client.slashCommands.size))}`))}\n${timestamp} ${white(bold(`Events: ${red(bold(client.events.size))}`))}\n${timestamp} ${white(bold(`Bot Name: ${greenBright(bold(`${client.user.username}`))}`))}`)
});
