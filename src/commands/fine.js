const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async(client, message) => {
  const guild = client.guilds.get(message.guild.id);
  if (message.author === guild.ownerID) {
            money.updateBal(message.mentions.members.first(), 500 /* Value */).then((i) => {
                message.channel.send(`**${message.mentions.members.first()} Lost Some Money! **\n**New Balance:** ${i.money}`);
            })
          }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Owner"
};

exports.help = {
  name: "fine",
  category: "Miscelaneous",
  description: "Fine A User",
  usage: "fine"
};
