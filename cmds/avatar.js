module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Bentar gan")



	msg.delete();

}

module.exports.help = {
	name: "avatar"
}