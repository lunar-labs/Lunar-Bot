const Discord = require("discord.js");

module.exports.run = async(client, message) => {  
    if(!message.member.guild.me.hasPermission("MANAGE_ROLES")){
        return message.reply("i don't have permisson to do that");
      }
    
        let mute_role = message.guild.roles.find(r => r.name === `Muted`);    
        let member = message.mentions.members.first();
    
    
    
  if(!mute_role){
    message.guild.createRole({
        name: 'Muted',
        color: 'BLUE',
        permissions: [],
        position: "1"
      })
        .then(role => message.channel.send(`Created Mute Role with name ${role.name} Please move it above the roles you wanna be able to mute then try again!`)).then
        .catch(console.error)
}
if (mute_role){
    try{
        await member.addRole(mute_role);
        await setTimeout(() => {member.removeRole(mute_role);}, 300 * 1000);
          message.channel.send("Trying to mute the member now....").then(editms => editms.edit("User Has Been Muted!"));
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
  name: "mute",
  category: "moderation",
  description: "mutes member",
  usage: "mute"
};
