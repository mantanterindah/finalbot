const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/59.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60003_0.jpg'
const momon = 'http://file5.ratemyserver.net/mobs//1010.gif'
const archer = 'https://tcrf.net/images/c/c8/RO-archer-m-attack1.gif'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Archer', {file: archer})

	let embed = new Discord.RichEmbed()
		.setTitle('Archer Job Quest')
		.setThumbnail(npc1)
		.setColor('#0b2fd1')
		.setImage(map1)
		.addField('Archer Guildsman','payon_in02 (64, 71)')
		.addField('Product', 'Fine-grained Trunk x 1 or'+'\n'+
			'Solid Trunk x 1'+'\n'+
			'Barren Trunk x 1'+'\n'+
			'Trunk x 1 ')
		.setFooter('Simply talk to the Archer Guildsman to signup. She will tell you to collect trunks from willows around Payon. '+'\n'+
			'There are 4 types of trunks, each type will worth different points as stated below. You need to collect at least 25 points to pass the test. '+'\n'+
			'Fine grained trunks = 5 points '+'\n'+
			'Solid trunks = 3 points '+'\n'+
			'Barren trunks = 2 points '+'\n'+
			'Trunks = 1 points'+'\n'+'\n'+
			'Requirements: You must be a novice at job level 10 in order to start the quest.')
		message.channel.send(embed)

	
}

module.exports.help = {
	name: "archerjobchange"
}