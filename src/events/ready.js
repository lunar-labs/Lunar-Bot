const Discord = require("discord.js");
const { Users, CurrencyShop } = require('../dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();
module.exports = async (client) => {
  Reflect.defineProperty(currency, 'add', {
  	value: async function add(id, amount) {
  		const user = currency.get(id);
  		if (user) {
  			user.balance += Number(amount);
  			return user.save();
  		}
  		const newUser = await Users.create({ user_id: id, balance: amount });
  		currency.set(id, newUser);
  		return newUser;
  	},
  });

  Reflect.defineProperty(currency, 'getBalance', {
  	value: function getBalance(id) {
  		const user = currency.get(id);
  		return user ? user.balance : 0;
  	},
  });
    console.log(`${client.user.username} Is Ready To Go!`);
    await client.website.load(client);
    await client.user.setPresence({ game: { name: `${client.config.BOT_PREFIX}help`}});
    const storedBalances = await Users.findAll();
  	storedBalances.forEach(b => currency.set(b.user_id, b));
}
