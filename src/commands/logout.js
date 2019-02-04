module.exports.run = async (client, msg) => {
    if(msg.author.id != client.config.BOT_OWNER_ID) return msg.channel.send("❌ You do not have the necessary rights to make this order.");
        msg.channel.send("⚙ Stopping The Bot...").then(async() => {
            console.log('Offline');
            await client.destroy();
            await process.exit()
        })
}

module.exports.help = {
    name : "logout",
    type: "Owner",
}
