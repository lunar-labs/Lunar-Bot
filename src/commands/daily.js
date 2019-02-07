const Discord = require("discord.js");
const money = require('discord-money');
const moment = require('moment');

module.exports.run = async(client, message) => {


        message.delete();
            if (money[message.author.username + message.guild.name] != moment().format('L')) {
                money[message.author.username + message.guild.name] = moment().format('L')
                    money.updateBal(message.author.id, 500).then((i) => {
                        message.channel.send({embed: {
                            color: 3447003,
                            description: 'You have recieved your \`-daily`\. **$500**',
                            author: {
                            name: `${message.author.username}#${message.author.discriminator}`, icon_url: message.author.avatarURL
                            }
                        }});
                    })
                }
            else {
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'You have already recieved your \`-daily`\. Try again **' + moment().endOf('day').fromNow() + '**.',
                    author: {
                    name: `${message.author.username}#${message.author.discriminator}`, icon_url: message.author.avatarURL
                    }
                }});
            }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "daily",
  category: "fun",
  description: "get your daily coin",
  usage: "daily"
};
