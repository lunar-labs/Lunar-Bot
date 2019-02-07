const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, message) => {

    let hugged = message.mentions.members.first();
    const rando_imgs = [
        'https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif',
        'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
        'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
    ]
    if (!hugged) {
        return message.reply("you need to mention someone first to hug them");
    }

    return message.channel.send(`${message.author} gave ${hugged} a hug!`, {
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hug",
  category: "Roleplay",
  description: "Gives a friend a hug",
  usage: "hug @user"
};
