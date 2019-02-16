if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
//Enmap
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
//Discord Load
const client = new Discord.Client();
//economy
const eco = require('discord-economy');
//Loading Config
client.config = require("./config.js");
client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);
client.eco = eco;
client.commands = new Enmap();
client.aliases = new Enmap();
//Updating Enmap
client.settings = new Enmap({provider: new EnmapLevel({name: "settings"})});
//initialize Files
const init = async () => {
  //commands
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  //events
  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });
  //Perms
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
  client.login(client.config.token);
};
init();
