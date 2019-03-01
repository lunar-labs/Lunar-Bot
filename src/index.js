// This will check if the node version you are running is the required
// Node version, if it isn't it will throw the following error to inform
// you.
if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
client.config = require("./config.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const mysql = require("mysql");
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
const eco = require('discord-economy');
const stopReacord = true;
const reactionRoles = [];
const definedReactionRole = null;
client.con = mysql.createConnection({
  host: client.config.mysqlh,
   user: client.config.mysqlu,
    password: client.config.mysqlp, database: client.config.mysqldb, port: client.config.mysqlpor});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE votes (id INT AUTO_INCREMENT PRIMARY KEY, userid VARCHAR(255), time VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });
const DBL = require("dblapi.js");
const dbl = new DBL(client.config.dbl, { webhookPort: 5000, webhookAuth: 'example' }, client);
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://lunar-labs.io:${hook.port}${hook.path}`);
  
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
  var update = client.channels.get("549024094360829962");
  var user = client.users.get(`${vote.user}`);
  client.con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var hours = (new Date()).getHours();
    var sql = "INSERT INTO votes (userid, time) VALUES ('"+vote.user+"','"+hours+"')";
    client.con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("User Has Voted!");
    });
  });
  update.send("User "+ user.tag+ " Has Voted");
});
client.eco = eco;
client.definedReactionRole = definedReactionRole;
client.reactionRoles = reactionRoles;
client.stopReacord = stopReacord;

// client.config.token contains the bot's token
// client.config.prefix contains the message prefix

// Let's start by getting some useful functions that we'll use throughout
// the bot, like logs and elevation features.
require("./modules/functions.js")(client);

// Aliases and commands are put in collections where they can be read from,
// catalogued, listed, etc.
client.iamroles = new Enmap();
client.reactroles = new Enmap();
client.commands = new Enmap();
client.aliases = new Enmap();
client.commandsettings = new Enmap();
// Now we integrate the use of Evie's awesome Enhanced Map module, which
// essentially saves a collection to disk. This is great for per-server configs,
// and makes things extremely easy for this purpose.
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  clonelevel: 'deep'
});

// We're doing real fancy node 8 async/await stuff here, and to do that
// we need to wrap stuff in an anonymous function. It's annoying but it works.

const init = async () => {

  // Here we load **commands** into memory, as a collection, so they're accessible
  // here and everywhere else.
  const cmdFiles = await readdir("./commands/");
  client.log("log", `Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  client.log("log", `Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });

  // Generate a cache of client permissions for pretty perms
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  // Here we login the client.
  client.login(client.config.token);

// End top-level async/await function.
};

init();
