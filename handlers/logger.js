const { cyan, red, magenta, gray, yellow, white, green, greenBright, bold } = require("colorette");
const { Timestamp } = require("@sapphire/time-utilities");

exports.log = (content, type = "log") => {
  const timestamp = `[${cyan(bold(new Timestamp("YYYY-MM-DD HH:mm:ss")))}]:`;
  
  switch (type) {
    case "log": return console.log(`${timestamp} ${gray(bold(type.toUpperCase()))} ${content} `);
    case "warn": return console.log(`${timestamp} ${yellow(bold(type.toUpperCase()))} ${content} `);
    case "error": return console.log(`${timestamp} ${red(bold(type.toUpperCase()))} ${content} `);
    case "debug": return console.log(`${timestamp} ${magenta(bold(type.toUpperCase()))} ${content} `);
    case "cmd": return console.log(`${timestamp} ${white(bold(type.toUpperCase()))} ${content}`);
    case "ready": return console.log(`${timestamp} ${green(bold(type.toUpperCase()))} ${content}`);
    case "event": return console.log(`${timestamp} ${greenBright(bold(type.toUpperCase()))} ${content}`);
    default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
  }
}; 

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.debug = (...args) => this.log(...args, "debug");

exports.cmd = (...args) => this.log(...args, "cmd");

exports.event = (...args) => this.log(...args, "event");