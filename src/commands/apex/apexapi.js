const https = require("https");
const request = require("request");

const apiBaseUrl = "https://apextab.com/api/search.php?";

const platformOptions = ["pc", "xbl", "psn"];
let platform;

let buildAPIUrl = (playername) => {
  return apiBaseUrl + platform + "&search=" + playerName;
};

let playerName = null;
platform = platformOptions[0];

// Part user's options
msgParts.forEach( (item) => {
  if (item.indexOf("#") > -1) {
    playerName = item.replace("#", "-");
  } else if (item.indexOf("platform=") > -1) {
    platform = item.split("=").pop();
  }
});

// Check user's options for validity
if (!playerName) {
  callback("Invalid BattleTag", "Please provide a valid playerName. Ex: Keisezrg");
} else {
  if (platformOptions.indexOf(platform) == -1)
    callback("Invalid Platform", "Platform invalid, allowed options are: " + platformOptions.join(" "));
}

let url = buildAPIUrl(playerName);
console.log("Getting stats from URL: " + url);

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // For API errors, send back the error to the user
    let statsJSON = JSON.parse(body);
    if (statsJSON.statusCode == 404)
      return callback("API Error: " + statsJSON.statusCode + " - " + statsJSON.error, statsJSON.error);

    // Stats were returned okay, let's parse them
    let stats = statsJSON;
    let statLevel = stats.level;

    // Format the string we are going to return to the user
    let statsString = "";
    statsString += "**" + stats.name + "**\n";
    statsString += "Level: " + statLevel;

    return callback(null, statsString);
  } else {
    return callback(error || response.statusCode, null);
  }
});
