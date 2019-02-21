const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, message, args) => {
    try{
      if(!message.mentions.members.first()){
        return message.reply("You Need to Mention Someone first!");
      }
      if(!message.member.guild.me.hasPermission("BAN_MEMBERS")){
        return message.reply("i don't have permisson to do that")
      }
      let reason = await args.slice(1).join(" ");
      
      let member = await message.mentions.members.first();
      if (!reason) {
        return message.reply("You Need A Reason to Ban This Person Sorry!");
      }
        member.ban(reason)
      return message.channel.send("success!");
    }catch (e) {
        console.error(e);
        return message.reply("I'm Sorry I Can't Ban That User :(");
    }
  };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "Administrator"
    };

    exports.help = {
      name: "ban",
      category: "moderation",
      description: "ban a user of course with reason",
      usage: "ban @user reason"
};
