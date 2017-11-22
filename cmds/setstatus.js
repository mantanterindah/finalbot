module.exports.run = async (bot, message, args) => {
	
	client.user.setStatus(args)

}

module.exports.help = {
	name: "setstatus"
}