const Discord = require("discord.js");
const money = require('discord-money');
const moment = require('moment');

module.exports.run = async(client, msg) => {
    
    if (msg.content.toUpperCase() === `${client.config.BOT_PREFIX}DAILY`) {
        msg.delete();
            if (money[msg.author.username + msg.guild.name] != moment().format('L')) {
                money[msg.author.username + msg.guild.name] = moment().format('L')
                    money.updateBal(msg.author.id, 500).then((i) => {
                        msg.channel.send({embed: {
                            color: 3447003,
                            description: 'You have recieved your \`-daily`\. **$500**',
                            author: {
                            name: `${msg.author.username}#${msg.author.discriminator}`, icon_url: msg.author.avatarURL 
                            }
                        }});
                    })
                }
            else {
                msg.channel.send({embed: {
                    color: 3447003,
                    description: 'You have already recieved your \`-daily`\. Try again **' + moment().endOf('day').fromNow() + '**.',
                    author: {
                    name: `${msg.author.username}#${msg.author.discriminator}`, icon_url: msg.author.avatarURL 
                    }
                }});
            }
    }
}

module.exports.help = {
    name : "daily",
    type: "bot",
}