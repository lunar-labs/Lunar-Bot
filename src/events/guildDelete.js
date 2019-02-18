
module.exports = (client, guild) => {
  client.user.setPresence({game: {name: `${client.settings.get("default").prefix}help | ${client.guilds.size} Servers`, type:0}});
  client.settings.delete(guild.id);
};
