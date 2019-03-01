const ballAnswers = require('../insult.json');
module.exports.run = function(client, message, args){
  message.channel.sendMessage(':warning: | This could really hurt users feelings so please proceed with caution.')
  message.channel.sendMessage(ballAnswers[Math.floor(Math.random() * 20) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'insult',
  category: "fun",
  description: 'This cud really hurt users feelings',
  usage: 'insult'
};
