const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

    let embed = new Discord.RichEmbed()
	.setThumbnail(client.user.avatarURL)
	.setColor(0xffffff)
    .setTitle("Welcome to Lunar Beta!")
    .setDescription("Commands")
    .addField("8ball", "8-Ball reaches into the future, to find the answers to your questions")
    .addField("hug", "gives a user a hug")
    .addField("kiss", "gives a user a kiss")
    .addField("punch", "punches a user")
<<<<<<< HEAD
    .setFooter(`Beta Lunar © 2019`)
=======
	.setFooter(`Beta Lunar © 2019`)
>>>>>>> master
    .setTimestamp();
     msg.channel.send(`Hello! **${msg.author.username}** !`, embed);

}

module.exports.help = {
    name : "help",
    type: "bot",
}
