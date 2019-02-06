const Discord = require("discord.js");

module.exports.run = async(client, msg) => {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    
    let embed = new Discord.RichEmbed()
	.setThumbnail(client.user.avatarURL)
	.setColor(0xffffff)
    .setTitle(`Lunar | V0.1`)
    .addField(`Guilds`, `${client.guilds.size}`, true)
    .addField(`uptime`, `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`, true)
    .addField(`Channels`, `${client.channels.size}`, true)
    .addField(`Users`, `${client.users.size}`, true)
    .setFooter(`Beta Lunar © 2019`)
    .setTimestamp();
     msg.channel.send(embed);
    
}

module.exports.help = {
    name : "stats",
    type: "bot",
}
