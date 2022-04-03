const { glob } = require("glob");
const { promisify } = require("util");
const { Client, MessageActionRow, MessageButton } = require("discord.js");
const mongoose = require("mongoose");
const log = require('./logger')

let slashDisabled = false; //Only use this if you need to update a slash command.

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];
        
        if(file){
            const properties = { directory, ...file };   
            client.events.set(file, file);
        }
    });

    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );
    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {

        if(slashDisabled == true){
                    // Register for a single guild
        /* await client.guilds.cache
        .get("replace this with your guild id")
        .commands.set(arrayOfSlashCommands); */

    // Register for all the guilds the bot is in
    await client.application.commands.set(arrayOfSlashCommands);
        }
    });



    // mongoose
    const { mongooseConnectionString } = require('../config.json')
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString).then(() => {
        log.event(`Connected to MongoDB!`)
    });
};
