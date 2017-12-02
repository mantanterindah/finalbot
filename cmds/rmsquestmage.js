const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/123.gif'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/111.gif'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/88.gif'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/93.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60004_0.jpg'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60004_2.jpg'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60004_3.jpg'
const mage = 'https://tcrf.net/images/6/68/RO-unused-hairanimation-magician-f-attacking.gif'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Mage', {file: mage})

	let embed = new Discord.RichEmbed()
		.setTitle('Mage Job Quest - Getting Started')
		.setColor('#0b2fd1')
		.addField('Expert Mage', 'geffen_in (164, 124)')
		.setImage(map1)
		.setThumbnail(npc1)
		.addField('Ingredient(s)','none')
		.addField('Product(s)','none')
		.setFooter('Simply talk to the Expert Mage to get the quest started. She will ask you to mix a solution for her.'+'\n'+
					'Depending which solution she told you to mix, you need to check with the Solutions Guide Book for the correct ingredents and use the Mixing Machine to process the ingredients in order to obtain the solution she wants from you.'+'\n'+
					'Read below if you are assigned Solution 1, 3 or 4 which requires a Payon Solution or Morroc Solution.'+'\n'+
					'Requirements: You must be a novice at job level 10 in order to start the quest.');
		message.channel.send(embed)

	let embed1 = new Discord.RichEmbed()
		.setTitle('Mage Job Quest - Solutions Guide Book & Mixing Machine References')
		.setColor('#0b2fd1')
		.addField('Solutions Guide Book & Mixing Machine', 'geffen_in (177, 112), (164, 112)')
		.setImage(map1)
		.setThumbnail(npc2)
		.addField('Ingredient(s)','Solutions#1 :Jellopy x 2,Fluff x 3, Milk x 1 || Solvent Agent	Payon Solution ||Chemical ingredients	8472||A Catalyst(Mixing Machine Will provide)	Yellow Gemstone')
		.addField('Ingredient(s)','Solutions#2 :Jellopy x 3,Fluff x 1, Milk x 1 || Solvent Agent	Not Appliable ||Chemical ingredients	3735||A Catalyst(Mixing Machine Will provide)	Red Gemstone')
		.addField('Ingredient(s)','Solutions#3 :Jellopy x 6,Fluff x 1, || Solvent Agent	Payon Solution ||Chemical ingredients	2750||A Catalyst(Mixing Machine Will provide)	Blue Gemstone')
		.addField('Ingredient(s)','Solutions#4 :Jellopy x 2,Fluff x 3, || Solvent Agent	Morroc Solution ||Chemical ingredients	5429||A Catalyst(Mixing Machine Will provide)	1 carat Diamond')
		.setFooter('Basically they tell you the ingredients for each solutions and how to mix them:');
		message.channel.send(embed1)

	let embed2 = new Discord.RichEmbed()
		.setTitle('Mage Job Quest - Payon Solution')
		.setColor('#0b2fd1')
		.addField('Dollshoi', 'pay_arche (122, 100)')
		.setImage(map2)
		.setThumbnail(npc3)
		.addField('Ingredient(s)','Empyt Test Tube')
		.addField('Product(s)','Payon Solution')
		.setFooter('Cost: 50 zeny'+'\n'+
			'You should get an empty test tube when you were assigned the mage quest. You can buy more empty test tube from the Tool Dealer inside the Mage Guild if needed.');
		message.channel.send(embed2)

	let embed3 = new Discord.RichEmbed()
		.setTitle('Mage Job Quest - Morroc Solution')
		.setColor('#0b2fd1')
		.addField('Ponka-Hontas', 'moc_ruins (91, 150)')
		.setImage(map3)
		.setThumbnail(npc4)
		.addField('Ingredient(s)','Empyt Test Tube')
		.addField('Product(s)','Morroc Solution')
		.setFooter('Cost: 50 zeny'+'\n'+
			'You should get an empty test tube when you were assigned the mage quest. You can buy more empty test tube from the Tool Dealer inside the Mage Guild if needed.');
		message.channel.send(embed3)	
	
}

module.exports.help = {
	name: "magejobchange"
}