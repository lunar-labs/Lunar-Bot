const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, message) => {

    const rando_imgs = [
      "ask again why don't you",
      "I'd say that would be no",
      "Yes Yes now leave me alone",
    ]
    const random = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]

    return message.channel.send(`${random}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "8ball",
  category: "Fun",
  description: "ask a question",
  usage: "8ball"
};
