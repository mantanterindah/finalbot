const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Bentar BossQu')

	let embed = new Discord.RichEmbed()
		.setTitle('VIP Benefit')
		//.setImage()
		.setColor('#0eefd9')
		//.setThumbnail()
		.setTimestamp()
		//.addField('', '')
		//.addField('', '')
		.addField('Benefit dari VIP Player adalah :', 'EXP diboost dari 2500% menjadi 3000% alias 30x\nBoost drop rate sebesar 30% dari drop rate server\nStorage kafra capacity bertambah 250 item\nPlayer bisa mengakses Premium NPC yang berada di kota-kota besar\nPlayer biasa menclaim daily login special premium box setiap harinya. Setiap 1x24 jam');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-vipbenefit"
}