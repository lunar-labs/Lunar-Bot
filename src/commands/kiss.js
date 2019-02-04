const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, msg) => {

  let hugged = msg.mentions.members.first();
  const rando_imgs = [
      'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
      'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
      'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  ]
  if (!hugged) {
  return msg.reply("you need to mention someone first to kiss them");
  }

    return msg.channel.send(`${msg.author} gave ${hugged} a kiss!`, {
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    });

    }

module.exports.help = {
    name : "kiss",
    type: "User",
}
