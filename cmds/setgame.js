const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	
	bot.user.setGame(args)
	
}

module.exports.help = {
	name: "apdetgame"
}
