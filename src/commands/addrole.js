const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, message, args) => {
      if(!message.member.guild.me.hasPermission("MANAGE_ROLES")){
        return message.reply("i don't have permisson to do that")
      }
      let roletoadd = args.slice(1).join(" ");
      let role = message.guild.roles.find(r => r.name === `${roletoadd}`);
      let member = message.mentions.members.first();
      if (!role) {
        return message.reply("I couldn't find a role by that name");
      }
      if (!member) {
        return message.reply("you need to mention someone first in order for me to find them");
      }

      member.addRole(role).catch(console.error);
      return message.channel.send("success!");
  };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "Administrator"
    };

    exports.help = {
      name: "addrole",
      category: "moderation",
      description: "add a role by name to a user",
      usage: "addrole @user role"
};
