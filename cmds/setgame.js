module.exports.run = async (bot, message, args) => {

	bot.User.setGame(args);

}

module.exports.help = {
	name: "setgame"
}
