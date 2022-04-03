const { Client, Collection } = require('discord.js');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767
});
const config = require('./config.json')

module.exports = client;

client.commands = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handlers")(client);

client.login(config.token)