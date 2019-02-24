// eslint-disable-next-line no-unused-vars
module.exports =  (client, raw) => {
  if (!["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === "MESSAGE_REACTION_ADD") return client.emit("messageReactionAdd", reaction, client.users.get(raw.d.user_id));
    if (raw.t === "MESSAGE_REACTION_REMOVE") return client.emit("messageReactionRemove", reaction, client.users.get(raw.d.user_id));
  });
};
