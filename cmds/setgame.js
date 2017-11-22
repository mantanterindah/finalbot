module.exports.run = async (bot, message, args) => {

	client.user.setGame(args);

}

module.exports.help = {
	name: "setgame"
}