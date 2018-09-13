const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ..')

	let embed = new Discord.RichEmbed()
		.setTitle(':: REKTNAROK Server Featured ::')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Featured :', 'Job Rebirth / 2nd Transendent\nCustom Card Effect\nDisabled Custom Item\nEasy Jobchange using Job Master NPC\nWarp NPC for skip the walk time\nHeadgear Quest with Custom Story\nCostume Quest with Custom Story\nBalanced Donation Item (kRO,iRO,idRO Official Headgears)\nWeekly Special EXP and DROP Event\nClan System\nAuto Event\nAttendance Daily Feature\nDaily Login Reward\nRoulette Feature\nCustom Raid Dungeon (Soon)\nBuy Market Official\nVending Restricted Area (Agar Market Rapi dan Enak Dilihat)\nStylish NPC (Tersedia Premium dan Normal Stylish)\nMax Guild 34/34 Member')
		.addField('Player Commands :', '@commands\n@rates\n@mi (VIP User)\n@time\n@whereis\n@autotrade')
		.addField('Disabled Feature :', '3rd Job / Expanded Job Lanjutan\nCustom Item\nMall Equipment');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-feature"
}