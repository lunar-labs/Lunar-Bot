const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async(client, message) => {
            money.updateBal(message.author.id, 500 /* Value */).then((i) => {
                message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
            })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some money",
  usage: "give"
};
