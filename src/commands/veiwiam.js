module.exports.run = (client, message) => {
  if (!client.iamroles.has(message.guild.id)){
      
    var iams = client.iamroles.get(message.guild.id);
    console.log(iams);
    return message.channel.send(iams);
   
  }
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};
  
exports.help = {
  name: "viewiam",
  category: "testing commands",
  description: "Bot Admins Only",
  usage: "non ya"
};
  