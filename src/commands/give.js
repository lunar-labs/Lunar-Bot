const Discord = require("discord.js");
const eco = require('discord-economy');

module.exports.run = async(client, message) => {
  var user = message.mentions.users.first()
      var amount = args[1]

      if (!user) return message.reply('Reply the user you want to send money to!')
      if (!amount) return message.reply('Specify the amount you want to pay!')

      var output = await eco.FetchBalance(message.author.id)
      if (output.balance < amount) return message.reply('You have less coins than the amount you want to transfer!')

      var transfer = await eco.Transfer(message.author.id, user.id, amount)
      message.reply(`Transfering coins succesfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "give",
  category: "Miscelaneous",
  description: "Gives some money",
  usage: "give"
};
