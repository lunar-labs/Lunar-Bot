const Discord = require("discord.js");

module.exports.run = async(client, message) => {
  const embed = {
  "title": "Apex Legends - Champions",
  "color": 14297386,
  "thumbnail": {
    "url": "https://pbs.twimg.com/profile_images/1092213870649794560/E0beUB_u_400x400.jpg"
  },
  "fields": [
    {
      "name": "Apex Legends",
      "value": "`Purple:` High-Tier Loot\n`Blue:` Mid-Tier Loot\n`Grey:` Low-Tier Loot\n`Green:` Respawn Beacon
    },
    {
      "name": "Map",
      "value": "https://i.imgur.com/2uCn1yA.jpg"
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
  name: "apex-map",
  category: "Apex",
  description: "Apex Legends",
  usage: "apex-map"
};