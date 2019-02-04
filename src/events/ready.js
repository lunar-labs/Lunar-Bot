const Discord = require("discord.js");
module.exports = async (client) => {

    console.log(`${client.user.username} Is Ready To Go!`);
    await client.website.load(client);
    await client.user.setPresence({ game: { name: `${client.config.BOT_PREFIX}help`}});
    const storedBalances = await Users.findAll();
  	storedBalances.forEach(b => currency.set(b.user_id, b));
}
