const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
   const info = message.author.tag + ": "+ args.join(" ");
    try {
        message.author.send("Thanks For Your Input!");
        client.users.get("142250706307514368").send(`${info}`);
        message.channel.send("Thanks For Your Input!").then((msg) => { // Resolve promise
            msg.edit("We have Received Your Suggestion!") // Edits message with current timestamp minus timestamp of message
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
  name: "suggest",
  category: "Miscelaneous",
  description: "Sends us your suggestions!",
  usage: "suggest"
};