const Discord = require("discord.js");
const request = require("request");


module.exports.run = (client, message, args) => {
  var platform = args[0];
  var region = args[1];
  var name = args[2];
  if (!platform){
    return message.channel.send("You Need to Specify A Platform To Search on!");
  }
  if (!region){
    return message.channel.send("You Need to Specify a Region To Search for!");
  }
  if (!name){
    return message.channel.send("You Need to Specify a BattleTag To Search for!");
  }
  let url = "https://ow-api.com/v1/stats/"+`${platform}`+"/"+`${region}`+"/"+`${name}`+"/profile";  
  request.get({
    url: url,
    json: true,
    headers: {"User-Agent": "request"}
  }, (err, res, data) => {
    if (err) {
      console.log("Error:", err);
      return message.channel.send("Sorry there Was An Error! Please Try Again Later :(");
    } else if (res.statusCode !== 200) {
      console.log("Status:", res.statusCode);
      return message.channel.send("Player Not Found! Try Again Please :(");
    }else{ 

      // data is already parsed as JSON:
      console.log(data.results);
      //var stats = ;
      console.log(data.results[0].name);
      const embed = new Discord.RichEmbed()
        .setTitle("Apex User Lookup Result")
        .setDescription("Please note that we can only track of your current Legend & trackers equipped. Inaccurate values may depend on that.")
        .setColor(0xDA292A)       
        .setThumbnail(data.results[0].avatar)      
        .addField("Apex Stats", "here is your stats~", true)      
        .addBlankField(true)
        .addField("Username", `${data.results[0].name}`, true)
        .addField("Platform", `${data.results[0].platform}`, true)
        .addField("Level", `${data.results[0].level}`, true)
        .addField("Rating", `${data.results[0].rating}`, true)
        .addField("Prestige", `${data.results[0].prestige}`, true)     
      message.channel.send({embed});
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "-overwatch-stats",
  category: "Overwatch",
  description: "stats for overwatch",
  usage: "overwatch-stats"
};
