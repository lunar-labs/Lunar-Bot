const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
   
    try {
        message.author.send("Currently We Have a Trello And a Discord server. Our trello is https://trello.com/b/2eELnPx7/lunar-discord And our discord server Is https://discord.gg/bTfTnP4");
        message.channel.send("Sending Support to DMs...").then((msg) => { // Resolve promise
            msg.edit("Message Sent!") // Edits message with current timestamp minus timestamp of message
        });
}
catch(error) {
    message.channel.send("Opps there was an issue. Please make sure I can DM you!");
}
    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "support",
  category: "Miscelaneous",
  description: "Sends some Useful Links to Get help with the bot!",
  usage: "support"
};