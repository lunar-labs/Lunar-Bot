const Discord = require("discord.js");
const moment = require("moment");
const eco = require("discord-economy");
module.exports.run = async(client, message) => {
var user = var user = message.mentions.users.first();
var output = await eco.ResetDaily(user);
return message.reply(output); //It wil send 'Daily Reset.'


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Owner"
};

exports.help = {
  name: "resetdaily",
  category: "fun",
  description: "reset users daily",
  usage: "resetdaily"
};
