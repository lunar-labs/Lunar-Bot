const Discord = require("discord.js");
const moment = require("moment");
const eco = require("discord-economy");

module.exports.run = async(client, message) => {
message.delete();
var output = await eco.FetchBalance(message.author.id);
 message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} coins.`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "user"
};

exports.help = {
  name: "balance",
  category: "fun",
  description: "coin balance",
  usage: "balance"
};
