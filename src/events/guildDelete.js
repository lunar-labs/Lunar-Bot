module.exports = async (guild, client) => {
console.log(`Guild Left: ${guild.id}`);
client.settings.delete(guild.id);
}
