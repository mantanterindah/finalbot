const Discord = module.require('discord.js');

const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60002_0.jpg'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60002_1.jpg'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60002_2.jpg'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60002_3.jpg'
const npc1 = 'http://file5.ratemyserver.net/quests/npcs/60.gif'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/89.gif'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/95.gif'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/98.gif'
const acolyte = 'https://tcrf.net/images/b/b2/RO-unused.hairanimation-archer-f-attack1.gif'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Acolyte', {file: acolyte})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Acolyte Job Quest')
		.setColor('#ebf70e')
		.setThumbnail(npc1)
		.setImage(map1, )
		.addField('Npc', 'Father Mareusis prt_church (184, 41)')
		.addField('Quest Step', 'Simply talk to Father Mareusis to signup for the acolyte quest. He will ask you to either visit ***Father Rubalkabara***, ***Mother Marthilda***, or ***Father Yosuke*** (see below for details). Once you speak to the designated NPC, go back to Father Mareusis and he will change you to an acolyte. **Requirements: You must be a novice at job level 10 in order to start the quest.**')
		.addField('Location', 'Inside Prontera Church');
		message.channel.send(embed1)
	let embed2 = new Discord.RichEmbed()
		.setTitle('Acolyte Job Quest - Father Rubalkabara')
		.setImage(map2)
		.setThumbnail(npc2)
		.setColor('#ebf70e')
		.addField('Npc', 'Father Rubalkabara prt_fild03 (365, 259)')
		.addField('Quest Step', 'Simply talk to him until he finish talking.')
		.addField('Location', 'Near St. Capitolina Abbey, 1 map North, and 2 maps East of Prontera. That is the Yoyo/Smokie/Choco map. **Becareful of Chocos, they are aggressive.**');
		message.channel.send(embed2)
	let embed3 = new Discord.RichEmbed()
		.setTitle('Acolyte Job Quest - Mother Marthilda')
		.setImage(map3)
		.setThumbnail(npc3)
		.setColor('#ebf70e')
		.addField('Npc', 'Mother Marthilda moc_fild07 (36, 354)')
		.addField('Quest Step', 'Simply talk to him until he finish talking.')
		.addField('Location', 'One map north from the town of Morroc. Morroc is SouthWest from Prontera. She is at the top left corner of the map.');
		message.channel.send(embed3)
	let embed4 = new Discord.RichEmbed()
		.setTitle('Acolyte Job Quest - Father Yosuke')
		.setImage(map4)
		.setThumbnail(npc4)
		.setColor('#ebf70e')
		.addField('Npc', 'Father Yosuke prt_fild00 (208, 218)')
		.addField('Quest Step', 'Simply talk to him until he finish talking.')
		.addField('Location', 'He is on a very small island (located at the center of the map) 2 maps West, and 1 map North, of Prontera.');
		message.channel.send(embed4)	
			
}

module.exports.help = {
	name: "acolytejobchange"
}