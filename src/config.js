const config = {
	"ownerID": "#",
  "admins": [],
  "support": [],
  "token": "#",
  "dashboard" : {
    "oauthSecret": "#",
    "callbackURL": "#/callback",
    "sessionSecret": "#",
    "domain": "#",
    "port": "3000"//
  },
	"defaultSettings" : {
    "prefix": "-",
    "modLogChannel": "mod-log",
    "modRole": "Moderator",
    "adminRole": "Administrator",
    "systemNotice": "true", // This gives a notice when a user tries to run a command that they do not have permission to use.
    "welcomeChannel": "welcome",
    "welcomeMessage": "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D",
    "welcomeEnabled": "false"
  },
	"bumpSettings" : {
    "bumpChannel": "Bump",
    "bumpMessage" : "Welcome To The Server",
    "bumpEnabled" : "false"
  },
	"commandsSettings" : {
		"8ball" : "true",
		"afk" : "true",
		"amateur" : "true",
		"ass" : "true",
		"balance" : "true",
		"bdsm" : "true",
		"boobs" : "true",
		"catgirl" : "true",
		"coinflip" : "true",
		"daily" : "true",
		"dash" : "true",
		"dick" : "true",
		"ecchi" : "true",
		"eval" : "false",
		"futa" : "true",
		"give" : "true",
		"help" : "true",
		"hentai" : "true",
		"hug" : "true",
		"kiss" : "true",
		"logout" : "true",
		"moneyboard" : "true",
		"punch" : "true",
		"reload" : "true",
		"resetdaily" : "true",
		"set" : "true",
		"stats" : "true",
		"work" : "true",

	},
  permLevels: [
    // This is the lowest permisison level, this is for non-roled users.
    { level: 0,
      name: "User",
      check: () => true
    },
    { level: 2,
    name: "Moderator",

      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 3,
      name: "Administrator",
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    // This is the server owner.
    { level: 4,
      name: "Server Owner",

      check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
    },


    { level: 8,
      name: "Bot Support",
      // The check is by reading if an ID is part of this array. Yes, this means you need to
      // change this and reboot the bot to add a support user. Make it better yourself!
      check: (message) => config.support.includes(message.author.id)
    },

    // Bot Admin has some limited access like rebooting the bot or reloading commands.
    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 10,
      name: "Bot Owner",

      check: (message) => message.client.config.ownerID === message.author.id
    }
  ]
};

module.exports = config;
