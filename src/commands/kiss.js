const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, message) => {

  let hugged = message.mentions.members.first();
  const randomImages = [
      "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
      "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
      "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
  ];

  if (!hugged) {
  return message.reply("you need to mention someone first to kiss them");
  }

    return message.channel.send(`${message.author} gave ${hugged} a kiss!`, {
        file: randomImages[Math.floor(Math.random() * randomImages.length)]
    });

  };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "User"
    };

    exports.help = {
      name: "kiss",
      category: "Roleplay",
      description: "give that special someone a kiss",
      usage: "kiss"
};
