module.exports.run = (client, message, args) => {
  if(!message.channel.guild) return message.reply("**this ~~command~~ __for servers only__**");
  var role = message.guild.roles.find( role => { return role.name == args[0]; });
  if(!role) return message.channel.send(`no role with name ${client.definedRoleName} found, make sure you entered correct name`);
  if(client.definedReactionRole != null  || !client.stopReacord) return message.channel.send("another reaction role request is running");
  message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
  client.definedReactionRole = role;
  client.stopReacord = false;
  
};
    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Admin"
};
    
exports.help = {
  name: "rrole",
  category: "testing commands",
  description: "Bot Admins Only",
  usage: "non ya"
};
    