const Discord = require("discord.js");

module.exports.run = async (client, message) => {

    let embed = new Discord.RichEmbed()
	.setThumbnail(client.user.avatarURL)
	.setColor(0xffffff)
    .setTitle("Welcome to Lunar Beta!")
    .setDescription("Commands")
    .addField("8ball", "8-Ball reaches into the future, to find the answers to your questions")
    .addField("hug", "gives a user a hug")
    .addField("kiss", "gives a user a kiss")
    .addField("punch", "punches a user")
    .setFooter(`Beta Lunar © 2019`)
    .setTimestamp();
     message.channel.send(`Hello! **${message.author.username}** !`, embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "Miscelaneous",
  description: "help!",
  usage: "help"
};
