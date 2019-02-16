module.exports = async client => {
  // Log that the bot is online.
  await client.wait(1000);

  // This loop ensures that client.appInfo always contains up to date data
  // about the app's status. This includes whether the bot is public or not,
  // its description, owner, etc. Used for the dashboard amongs other things.
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  if (!client.settings.has("default")) {
  if (!client.config.defaultSettings) throw new Error("defaultSettings not preset in config.js or settings database. Bot cannot load.");
  client.settings.set("default", client.config.defaultSettings);
}
require("../modules/dashboard")(client);
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  await client.user.setActivity(`${client.config.defaultSettings.prefix}help`, {type: "PLAYING"});
};
