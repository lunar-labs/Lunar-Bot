const Discord = require("discord.js");

module.exports.run = async(client, message) => {
  const embed = {
  "title": "List of available commands",
  "color": 14297386,
  "thumbnail": {
    "url": "https://pbs.twimg.com/profile_images/1092213870649794560/E0beUB_u_400x400.jpg"
  },
  "fields": [
    {
      "name": "Apex Legends",
      "value": "`-apex-champions` returns a list of commands for champions\n`-apex-weapons` returns a list of commands for weapons\n`-apex-tip` returns a random tip\n`-apex-patches` returns patch notes commands"
    },
    {
      "name": "Coming Soon",
      "value": "`-stats` returns the players stats"
    }
  ]
};
message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "apex",
  category: "Games",
  description: "Apex Legends",
  usage: "apex"
};
