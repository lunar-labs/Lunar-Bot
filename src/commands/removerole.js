const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, message, args) => {
      if(!message.member.guild.me.hasPermission("MANAGE_ROLES")){
        return message.reply("i don't have permisson to do that")
      }
      let roletoremove = args.slice(1).join(" ");

      let role = message.guild.roles.find(r => r.name === `${roletoremove}`);
      let member = message.mentions.members.first();
      if (!role) {
        return message.reply("I couldn't find a role by that name");
      }
      if (!member) {
        return message.reply("you need to mention someone first in order for me to find them");
      }

      member.removeRole(role).catch(console.error);
      return message.channel.send("success!");
  };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "Administrator"
    };

    exports.help = {
      name: "removerole",
      category: "moderation",
      description: "remove a role by name to a user",
      usage: "removerole @user role"
};
