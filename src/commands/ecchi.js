let api = require("nekos-image-api");//get the api

module.exports.run = (client, message) => {
  if (!message.channel.nsfw) {
    return message.channel.send("This channel Is Not NSFW Please Try This Command In An NSFW Channel");
  }else{
    api.nsfw.ecchi().then(res => {
      return message.channel.send({file: res.url});
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ecchi",
  category: "nsfw",
  description: "ecchi",
  usage: "ecchi"
};
