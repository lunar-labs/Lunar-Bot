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
      "value": "`-apex-bangalore` returns information about Bangalore.\n`-apex-bloodhound` returns information about Bloodhound.\n`-apex-caustic` returns information about Caustic.\n`-apex-gibraltar` returns information about Gibraltar.\n`-apex-lifeline` returns information about Lifeline.\n`-apex-mirage` returns information about Mirage.\n`-apex-pathfinder` returns information about Pathfinder.\n`-apex-wraith` returns information about Wraith."
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
  name: "apex-champions",
  category: "Apex",
  description: "Apex Legends",
  usage: "apex-champions"
};