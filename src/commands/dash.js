const Discord = require("discord.js");

module.exports.run = async (client, msg) => {
    msg.channel.send(`You can the visit the dash here: ${client.config.WEBSITE_URL}`);
    
}

module.exports.help = {
    name : "dash",
    type: "bot",
}