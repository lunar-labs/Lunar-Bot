const Discord = require("discord.js");
const moment = require("moment");
const eco = require("discord-economy");
module.exports.run = async(client, message) => {


        message.delete();
        var output = await eco.Daily(message.author.id)
        if (output.updated) {

  var profile = await eco.AddToBalance(message.author.id, 100);
  message.reply(`You claimed your daily coins succesfully! You now own ${profile.newbalance} coins.`);
} else {
  message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`);
};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "bot"
};

exports.help = {
  name: "daily",
  category: "fun",
  description: "get your daily coin",
  usage: "daily"
};
