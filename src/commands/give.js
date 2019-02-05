const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async(client, msg) => {
    
    if (message.content.toUpperCase() === `${client.config.BOT_PREFIX}PAY`) {
 
            money.updateBal(message.author.id, 500 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
            })
    }
}

module.exports.help = {
    name : "donate",
    type: "Owner",
}