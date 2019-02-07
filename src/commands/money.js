const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async(client, message) => {
            money.fetchBal(message.author.id).then((i) => {
                message.channel.send(`**Balance:** ${i.money}`);
            })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "money",
  category: "Miscelaneous",
  description: "check your balance",
  usage: "money"
};
