const Discord = module.require('discord.js');

const imgnpc1 = 'http://file5.ratemyserver.net/quests/npcs/119.gif'
const imgnpc2 = 'http://file5.ratemyserver.net/quests/npcs/92.gif'
const imgnpc3 = 'http://file5.ratemyserver.net/quests/npcs/105.gif'
const imgmap1 = 'http://file5.ratemyserver.net/quests/minimaps/m60001_0.jpg'
const sword = 'https://tcrf.net/images/3/39/RO-unused-hairanimation-swordsman-m-attack1.gif'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Swordman', {file: sword})

	let embed = new Discord.RichEmbed()
		.setTitle('Swordman Job Quest')
		.setColor('#0bd1b6')
		.setImage(imgmap1)
		.setThumbnail(imgnpc1)
		.addField('Npc Location', 'Master Swordman : Izulde_in 74, 172')
		.addField('Ingredient(s)','none')
		.addField('Product(s)','none')
		.setFooter('Simply talk to Master Swordsman to signup for the quest.Requirements: You must be a novice at job level 10 in order to start the quest.');
		message.channel.send(embed)

	let embed1 = new Discord.RichEmbed()
		.setTitle('Swordsman Job Quest - Test Rules (optional)')
		.setColor('#0bd1b6')
		.setImage(imgmap1)
		.setThumbnail(imgnpc2)
		.addField('Npc Location','izlude_in (30,175)')
		.addField('Ingredient(s)','none')
		.addField('Product(s)','none')
		.setFooter('Simply talk to the Test Guide NPC to read about the swordsman job test');
		message.channel.send(embed1)

	let embed2 = new Discord.RichEmbed()
		.setTitle('Swordsman Job Quest - Taking the Test')
		.setColor('#0bd1b6')
		.setImage(imgmap1)
		.setThumbnail(imgnpc3)
		.addField('Npc Location','izlude_in (30,163)')
		.addField('Ingredient(s)','none')
		.addField('Product(s)','none')
		.setFooter('Test Rules: You need to make through an obsticale course within 7 minutes in order to pass. The obsticale course is made up of 3 parts and is littered with booby-traps. Some traps will reduce your HP while others will warp you to an random underground cave causing you to start over. If you Surrender or if you excede the time limit, you will be fail the test. You can take the test again if you fail.');
		message.channel.send(embed2)


	
}

module.exports.help = {
	name: "swordsmanjobchange"
}

//quest 1
//npc img
//http://file5.ratemyserver.net/quests/npcs/119.gif
//map image http://file5.ratemyserver.net/quests/minimaps/m60001_0.jpg