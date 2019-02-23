module.exports.run = (client, message) => {
  const randomImages = [
    "ask again why don't you",
    "I'd say that would be no",
    "Yes Yes now leave me alone",
    "no u",
  ];
  const random = randomImages[Math.floor(Math.random() * randomImages.length)];

  return message.channel.send(`${random}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "8ball",
  category: "fun",
  description: "ask a question",
  usage: "8ball"
};
