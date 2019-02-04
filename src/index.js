const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true
});

const fs = require("fs");

let config = require("./config");

client.website = require("./website/dashboard");
client.config = config;
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) throw err;
  let commands = files.filter(f => f.split(".").pop() === "js");
  if(commands.length <= 0) return console.log("[Alert] No Commands Found.");

  commands.forEach((f, i) =>{
    let command = require(`./commands/${f}`);
    console.log(`[Command] ${f} Loaded!`);
    client.commands.set(command.help.name, command);
  });
});

fs.readdir("./events/", (err, files) => {
  if(err) throw err;
  console.log(`Number Of Events Loaded: ${files.length}`);

  files.forEach((f) => {
    const events = require(`./events/${f}`);
    const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});

client.login(config.BOT_TOKEN);
module.exports = client;
