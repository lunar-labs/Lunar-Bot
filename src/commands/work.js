const Discord = require("discord.js");
const moment = require('moment');
const eco = require('discord-economy');
module.exports.run = async(client, message) => {
message.delete();
  var output = await eco.Work(message.author.id)
  //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
  if (output.earned == 0) return message.reply('Aww, you did not do your job well so you earned nothing!')
  message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)


  var output = await eco.Work(message.author.id, {
    failurerate: 10,
    money: Math.floor(Math.random() * 500),
    jobs: ['cashier', 'shopkeeper']
  })
  //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
  if (output.earned == 0) return message.reply('Aww, you did not do your job well so you earned nothing!')

  message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "user"
};

exports.help = {
  name: "work",
  category: "fun",
  description: "Work for that coinage",
  usage: "work"
};
