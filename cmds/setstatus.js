const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	
	bot.user.setStatus(args[0])
	
}

module.exports.help = {
	name: "apdetstatus"
}