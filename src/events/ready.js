module.exports = async (client) => {

  await client.wait(1000);
  const DBL = require("dblapi.js");
  const dbl = new DBL(client.config.dbl, client);
  setInterval(() => {
    dbl.postStats(client.guilds.size);
}, 1800000);
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);

  if (!client.settings.has("default")) {
    if (!client.config.defaultSettings) throw new Error("defaultSettings not preset in config.js or settings database. Bot cannot load.");
    client.settings.set("default", client.config.defaultSettings);
  }
  if (!client.commandsettings.has("commandsSettings")) {
    if (!client.config.commandsSettings) throw new Error("commandsSettings not preset in config.js or settings database. Bot cannot load.");
    client.commandsettings.set("commandsSettings", client.config.commandsSettings);
  }

  require("../modules/dashboard")(client);

  client.user.setPresence({game: {name: `Working On Improving Myself | ${client.guilds.size} Servers`, type:1}});

  client.log("log", `${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "Ready!");
};
