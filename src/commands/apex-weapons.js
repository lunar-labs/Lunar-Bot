const Discord = require("discord.js");

module.exports.run = async(client, message) => {
  const embed = {
  "title": "Apex Legends - Weapons",
  "color": 14297386,
  "thumbnail": {
    "url": "https://pbs.twimg.com/profile_images/1092213870649794560/E0beUB_u_400x400.jpg"
  },
  "fields": [
    {
      "name": "Pistols",
      "value": "`-apex-wingman` returns information about Wingman.\n`-apex-re45` returns information about RE-45 Auto.\n`-apex-p2020` returns information about P2020."
    },
    {
      "name": "Shotguns",
      "value": "`-apex-mozambique` returns information about Mozambique.\n`-apex-mastiff` returns information about Mastiff Shotgun.\n`-apex-eva8` returns information about EVA-8 Auto.\n`-apex-peacekeeper` returns information about Peacekeeper."
    },
    {
      "name": "SMG's",
      "value": "`-apex-r99` returns information about R-99.\n`-apex-alternator` returns information about Alternator.\n`-apex-prowler` returns information about Prowler Burst PDW."
    },
    {
      "name": "Assault Rifles",
      "value": "`-apex-havoc` returns information about Havoc.\n`-apex-hemlok` returns information about Hemlok Burst AR.\n`-apex-flatline` returns information about VK-47 Flatline.\n`-apex-r301` returns information about R-301 Carbine."
    },
    {
      "name": "LMG's",
      "value": "`-apex-devotion` returns information about Devotion.\n`-apex-spitfire` returns information about M600 Spitfire."
    },
    {
      "name": "Sniper Rifles",
      "value": "`-apex-scout` returns information about G7 Scout.\n`-apex-tripletake` returns information about Triple Take.\n`-apex-longbow` returns information about Longbow DMR.\n`-apex-kraber` returns information about Kraber .50-cal Sniper."
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
  name: "apex-weapons",
  category: "Games",
  description: "Apex Legends",
  usage: "apex-weapons"
};