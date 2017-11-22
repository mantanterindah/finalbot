module.exports.run = async (bot, message, args) => {
	
	bot.User.setStatus(args)

}

module.exports.help = {
	name: "setstatus"
}
