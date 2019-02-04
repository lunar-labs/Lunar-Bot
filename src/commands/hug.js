const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, msg) => {

    let hugged = msg.mentions.members.first();
    const rando_imgs = [
        'https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif',
        'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
        'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
    ]
    if (!hugged) {
        return msg.reply("you need to mention someone first to hug them");
    }

    return msg.channel.send(`${message.author} gave ${hugged} a hug!`, {
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    });
}

module.exports.help = {
    name : "eval",
    type: "Owner",
}
