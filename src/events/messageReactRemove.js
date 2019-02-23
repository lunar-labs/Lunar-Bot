module.exports = ("messageReactionRemove", (client, reaction, user) => {
  console.log("a reaction has been added");
 
  if(user.id == client.user.id) return;
  if(!client.stopReacord) return;
  let request = client.reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});