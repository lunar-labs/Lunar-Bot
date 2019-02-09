const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async(client, message) => {
  const guild = client.guilds.get(message.guild.id);
  if (message.author === guild.ownerID) {
            money.updateBal(message.mentions.members.first(), 500 /* Value */).then((i) => {
                message.channel.send(`**${message.mentions.members.first()} got $500!**\n**New Balance:** ${i.money}`);
            })
          }
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
