const Discord = require("discord.js");
const util = require("util");

module.exports.run = async(client, msg) => {

    let code = msg.content.split(" ").slice(1);

    if(msg.author.id != client.config.BOT_OWNER_ID) return msg.channel.send("❌ You do not have sufficient rights to make this order.");
        try {
            let ev = eval(code);
            let str = util.inspect(ev, {
                depth: 1
            });

            str = `${str.replace(new RegExp(`${client.token}`, "g"), "token")}`;

            if(str.length > 1900) {
                str = str.substr(0, 1900);
                str = str + "...";
            }

            msg.channel.send(`✅ Evaluation Success:\n\`\`\`JS\n${str}\`\`\``);
        } catch (err) {
            msg.channel.send(`❌ Evaluation Failed:\n\`\`\`JS\n${err}\`\`\``);
        }
}


module.exports.help = {
    name : "eval",
    type: "Owner",
}
