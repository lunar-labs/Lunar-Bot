const Discord = require("discord.js");

module.exports.run = async(client, message) => {  
    if(!message.member.guild.me.hasPermission("MANAGE_ROLES")){
        return message.reply("i don't have permisson to do that");
      }
    
        let mute_role = message.guild.roles.find(r => r.name === `Muted`);    
        let member = message.mentions.members.first();
if (mute_role){
    try{
        await member.removeRole(mute_role);
        
          message.channel.send("Trying to unmute the member now....").then(editms => editms.edit("User Has Been Unmuted!"));
    }catch(error){
        message.channel.edit("Error!");
    }
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "unmute",
  category: "moderation",
  description: "unmutes member",
  usage: "unmute"
};
