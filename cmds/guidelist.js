const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Please use "!" before command to call bot command:')

	let embed = new Discord.RichEmbed()
		.setTitle('Guide List Rektnarok')
		//.setImage()
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Server Spesification', 'do type **!guide-spesification**')
		.addField('Server Feature', 'do type **!guide-feature**')
		.addField('Costume Card','do type **!guide-costumecard**')
		.addField('How to Delete Char','do type **!guide-deletechar**')
		.addField('Costume Recycle','do type **!guide-costumerecycle**')
		.addField('VIP Member Benefit','do type **!guide-vipbenefit**')
		.addField('Rektnarok Special Box','do type **!guide-specialbox**')
		.addField('Roulette Coin Function','do type **!guide-roulette**')
		.addField('Rektnarok Rebirth System','do type **!guide-rebirth**')
		.addField('Auto Event in Game','do type **!guide-autoevent**')
		.addField('Coin(Bronze,Copper,Rekt)','do type **!guide-coin**');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "help"
}