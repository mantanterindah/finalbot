module.exports.run = async (bot, message, args) => {
	
	bot.user.setStatus(args)

}

module.exports.help = {
	name: "setstatus"
}
