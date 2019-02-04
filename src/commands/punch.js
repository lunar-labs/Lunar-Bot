const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, msg) => {

  let hugged = msg.mentions.members.first();
  const rando_imgs = [
'https://media.giphy.com/media/okECPQ0lVQeD6/giphy.gif',
'https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif',
'https://media.giphy.com/media/ryxGBGURsirNC/giphy.gif',
]
if (!hugged) {
  return msg.reply("you need to mention someone first to punch them");
}

return msg.channel.send(`${message.author} punched ${hugged}'s lights out!`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});



module.exports.help = {
    name : "kiss",
    type: "User",
}
