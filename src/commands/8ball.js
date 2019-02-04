const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, msg) => {

    const rando_imgs = [
      "ask again why don't you",
      "I'd say that would be no",
      "Yes Yes now leave me alone",
    ]
    const random = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]

    return msg.channel.send(`${random}`);
}

module.exports.help = {
    name : "eval",
    type: "Owner",
}
