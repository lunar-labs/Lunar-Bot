module.exports.run = (client, message, args) => {
  let role = args.join(" ");
  let check = message.guild.roles.find(r => r.name === role);
  if (!role){
    return message.reply("Please Specify a Role!");
  }else if(!check){
    return message.reply("I'm Sorry I can't Find that Role on your Server");
  }else if (!client.iamroles.has(message.guild.id)){
    client.iamroles.set(message.guild.id,`{${role}}`);
    return message.reply("Thanks for using the Iam Roles! Your First Roles Been Set!");
  }else if (client.iamroles.has(message.guild.id)){
    client.iamroles.push(message.guild.id, role);
    return message.channel.send("Another role added to the list :)");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "upiam",
  category: "testing commands",
  description: "Bot Admins Only",
  usage: "non ya"
};
