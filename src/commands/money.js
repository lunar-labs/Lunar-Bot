const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async(client, msg) => {
    
    if (msg.content.toUpperCase() === `${client.config.BOT_PREFIX}MONEY`) {
 
            money.fetchBal(msg.author.id).then((i) => {
                msg.channel.send(`**Balance:** ${i.money}`);
            })
    }
}

module.exports.help = {
    name : "money",
    type: "bot",
}