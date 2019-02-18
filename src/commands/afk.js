const Discord = require("discord.js");
const money = require("discord-money");

module.exports.run = async(client, message) => {

    if (!message.guild.usersAFK) message.guild.usersAFK = [];
    if (message.guild.usersAFK.includes(message.author.id)) return;

    message.guild.usersAFK.push(message.author.id);

    await message.channel.send({
    embed: {
      color: 3447003,
      description: `${message.author} I've set you as AFK. If anyone mentions you while you're away, I'll let them know. AFK mode will be disabled once you're back and send a message anywhere.`
    }
  }).catch(e => {
    lunar.log.error(e);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "bot"
};

exports.help = {
  name: "afk",
  category: "fun",
  description: "Sets you as Away From Keyboard (AFK).",
  usage: "afk"
};
