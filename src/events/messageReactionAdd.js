module.exports = ("messageReactionAdd", (client, reaction, user) => {
  console.log("a reaction has been added");
  
  if(user.id == client.user.id) return;
  if(!client.stopReacord) {
    var done = false;
    client.reactionRoles[reaction.message.id] = { role: client.definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
    client.stopReacord =  true;
    client.definedReactionRole = null;
    reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send("sorry i can't use this emoji but the reaction role done! anyone react will get the role!");});
    if(done) reaction.remove(user);
    
  } else {
    var request = client.reactionRoles[reaction.message.id];
    if(!request) return;
    if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
    reaction.message.guild.members.get(user.id).addRole(request.role);
  }
});