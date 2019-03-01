const Discord = require("discord.js");
const util = require("util");

module.exports.run = async (client, message, args) => {
  
  try{
    if(!message.member.guild.me.hasPermission("Kick_MEMBER")){
      return message.reply("i don't have permisson to do that")
    }
    const reason = await args.slice(1).join(" ");
    const member = await message.mentions.members.first();
    if (!reason) {
      return message.reply("You Need A Reason to kick This Person Sorry!");
    }
    if (!member) {
      return message.reply("you need to mention someone first in order for me to find them");
    }

    member.kick(reason)
    return message.channel.send("success!");
  }catch (e) {
      console.error(e);
      return message.reply("I'm Sorry I Can't kick That User :(");
  
}
};
 

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "Moderator"
    };

    exports.help = {
      name: "kick",
      category: "moderation",
      description: "kick a user of course with reason",
      usage: "kick @user reason"
};
