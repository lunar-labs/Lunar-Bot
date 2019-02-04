const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

    let embed = new Discord.RichEmbed()
	.setThumbnail(client.user.avatarURL)
	.setColor(0xffffff)
	.setDescription("Welcome to Lunar Beta!")
	.setFooter(`Beta Lunar © 2019`)

     msg.channel.send(`Hello! **${msg.author.username}** !`, embed);

}

module.exports.help = {
    name : "help",
    type: "bot",
}
