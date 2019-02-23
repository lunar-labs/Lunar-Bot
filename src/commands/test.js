
module.exports.run = async(client, message, args) => {
    try{
      const ch = message.mentions.channels.first();
      return message.channel.send("success!" + ch.id);
    }catch (e) {
        console.error(e);

    return message.channel.send(e);
    }
  };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "Bot Admin"
    };

    exports.help = {
      name: "test",
      category: "testing commands",
      description: "Bot Admins Only",
      usage: "non ya"
};
