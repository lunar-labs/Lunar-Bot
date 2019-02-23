const Discord = require("discord.js");
//const apexAPI = require("./apex/apexapi.js");
//const fs = require("fs");
const request = require("request");


module.exports.run = (client, message, args) => {
  //let statsTrigger = '-apex-stats';
  // if (message.content.startsWith(statsTrigger)) {
  // if (message.content.indexOf("#") > "-1") {
  //   // User sends their playerName, send them back some stats
  //   apexAPI(message.content, (err, data) => {
  //     if (err) {
  //       message.reply("An error occured :(");
  //       return console.error(err + ": " + data);
  //     }

  //     message.reply(data);
  //   });
  // } 
  var pc = args[0];
  var name = args[1];
  if (!pc){
    return message.channel.send("You Need to Specify A Platform To Search on!");
  }
  if (!name){
    return message.channel.send("You Need to Specify a User To Search for!");
  }
  let url = "https://apextab.com/api/search.php?platform="+`${pc}`+"&search="+`${name}`;   
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
        .addField("Aoex Stats", "here is your stats~", true)      
        .addBlankField(true)
        .addField("Username", `${data.results[0].name}`, true)
        .addField("Platform", `${data.results[0].platform}`, true)
        .addField("Legend", `${data.results[0].legend}`, true)
        .addField("Level", `${data.results[0].level}`, true)
        .addField("Kills", `${data.results[0].kills}`, true);         
      message.channel.send({embed});
    }
  });
};
// let showHelp = (message) => {
//   const helpText = "\n ";
//   message.reply(helpText);
// };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "apex-stats",
  category: "Apex",
  description: "This bot will retrieve your Apex statistics \n Enter \"-apex-stats\" and your Origin, xbox live name or psn name to receive your stats \n Ex: -apex-stats Keisezrg \n\n Default options: Platform: pc \n To change these options, append your message with the following options \n\n Platform: platform=[platform] \n Options: pc, xbl, psn \n\n A full request might look like this: -apex-stats Keisezrg platform=pc",
  usage: "apex-stats"
};
