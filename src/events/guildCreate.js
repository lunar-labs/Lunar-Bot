module.exports = (client, guild) => {
  client.user.setPresence({game: {name: ` ${client.guilds.size} Servers`, type:0}});
  client.log("log", `New guild has been joined: ${guild.name} (${guild.id}) with ${guild.memberCount}`, "JOINED");
};
