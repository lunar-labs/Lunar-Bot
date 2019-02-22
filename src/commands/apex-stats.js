const Discord = require("discord.js");
const apexAPI = require('./apex/apexapi.js');
const fs = require('fs');

module.exports.run = async(client, message) => {
    
let statsTrigger = '-apex-stats';
if (message.content.startsWith(statsTrigger)) {
    if (message.content.indexOf('#') > -1) {
      // User sends their playerName, send them back some stats
      apexAPI(message.content, (err, data) => {
        if (err) {
          message.reply("An error occured :(");
          return console.error(err + ': ' + data);
        }

        message.reply(data);
      });
    } else {
      // Not a recognized command, show help
      showHelp(message);
    };
};
};
    
let showHelp = (message) => {
  const helpText = '\n This bot will retrieve your Apex statistics \n Enter "-apex-stats" and your Origin, xbox live name or psn name to receive your stats \n Ex: -apex-stats Keisezrg \n\n Default options: Platform: pc \n To change these options, append your message with the following options \n\n Platform: platform=[platform] \n Options: pc, xbl, psn \n\n A full request might look like this: -apex-stats Keisezrg platform=pc';
  message.reply(helpText);
};
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "apex-stats",
  category: "Apex",
  description: "Apex Legends",
  usage: "apex-stats"
};