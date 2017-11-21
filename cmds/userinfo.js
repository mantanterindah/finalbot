const Discord = require = module.require('discord.js')

module.exports.run = async (bot, message, args) => {
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription('this my master')
			.setColor("#733405")
			.setImage(message.author.displayAvatarURL);
		message.channel.send(embed);

}

module.exports.help = {
	name: "userinfo"
}