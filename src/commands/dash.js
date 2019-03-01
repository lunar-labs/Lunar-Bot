const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    return message.channel.send(`You can the visit the dash here: ${client.config.dashboard.domain}`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "dash",
  category: "Miscelaneous",
  description: "dash url",
  usage: "dash"
};
