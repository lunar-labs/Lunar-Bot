module.exports = async (client, msg) => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  if (!msg.content.startsWith(client.config.BOT_PREFIX)) return;
    let cmd = msg.content.slice(1).split(' ').shift().toLowerCase();
    let command = client.commands.get(cmd);
    if(command) command.run(client, msg);

}
