const Discord = require("discord.js");
//const apexAPI = require("./apex/apexapi.js");
//const fs = require("fs");
const request = require("request");

const { inspect } = require("util");

exports.run = async (client, message, [action, ...args], level) => {
  if(action === "stats"){
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
          .addField("Apex Stats", "here is your stats~", true)      
          .addBlankField(true)
          .addField("Username", `${data.results[0].name}`, true)
          .addField("Platform", `${data.results[0].platform}`, true)
          .addField("Legend", `${data.results[0].legend}`, true)
          .addField("Level", `${data.results[0].level}`, true)
          .addField("Kills", `${data.results[0].kills}`, true);         
        message.channel.send({embed});
      }
    });
  }else if(action === "map"){
    message.channel.send({embed: {
      "title": "Apex Legends - Champions",
      "color": 14297386,
      "thumbnail": {
        "url": "https://pbs.twimg.com/profile_images/1092213870649794560/E0beUB_u_400x400.jpg"
      },
      
        "image":{
          "url": "https://i.imgur.com/2uCn1yA.jpg"
      },
      "fields": [
        {
          "name": "Apex Legends",
          "value": "`Purple:` High-Tier Loot\n`Blue:` Mid-Tier Loot\n`Grey:` Low-Tier Loot\n`Green:` Respawn Beacon"
        }
        
      ]
    }
    });
  
  }
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "apex",
  category: "Games",
  description: "Apex Legends",
  usage: "apex"
};
