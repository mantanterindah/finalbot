const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ...')

	let embed = new Discord.RichEmbed()
		.setTitle('::Rektnarok Server Spesification::')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Detail Information', 'EXP Rate = 25x / 25x / 5x\nDrop Normal Monster = 3x\nDrop Normal Card = 7x\nDrop Boss Monster = 1x\nDrop Boss Card Monster = 1x\nJob 2nd Trans\nJob Taekwon,Ninja,Gunslinger (Updated Soon)\nMax Party Share Level = 30 Level\nStart Episode 10.4\nrAthena new 2018 client platform\nNew Character Selection UI\nGepard 3.0 Protection\nMain Language : Bahasa Indonesia');
		//.addField('', '')
		//.addField('', '');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-spesification"
}