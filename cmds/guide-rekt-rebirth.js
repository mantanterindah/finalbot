const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ...')

	let embed = new Discord.RichEmbed()
		.setTitle('Guide Rebirth Quest')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489846940759228436/costumrec.jpg')
		.setColor('#e20db1')
		.setThumbnail('https://cdn.discordapp.com/attachments/432589912177508352/489856515935567873/unknown.png')
		.setTimestamp()
		//.addField('', '')
		.addField('Requirement Akses NPC ini :', '- Job 2nd atau dibawahnya\n- Level 99')
		.addField('Rebirth Quest', 'Di Rektnarok untuk rebirth menjadi transendent class.\nKamu membutuhkan sebuah batu dewa bernama Heroic Stone.\nUntuk mendapatkannya kamu harus meminta kepada Siti Badriah di Stylish House.');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-rebirth"
}