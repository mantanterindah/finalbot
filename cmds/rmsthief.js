const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/69.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60006_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/118.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60006_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/118.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60006_2.jpg'
const product = 'http://imgs.ratemyserver.net/items/small/1069.gif'
const thief = 'https://tcrf.net/images/8/81/RO-unused-hairanimation-thief-m-attack1.gif'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Thief', {file: thief})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Thief Job Quest - Getting Started')
		.setThumbnail(npc1)
		.setImage(map1)
		.addField('Thief Guide', 'moc_prydb1 (39, 129)')
		.addField('Quest Step', 'In Morroc Town, exit at the top left corner of the map to get to Morroc Ruins. From there, go to top left again to get into the Pyramid Dungeon, walk to the center of the map, go downstair and go into the room at the left to sign up to the Morroc Thief Test. Requirements: You must be a novice at job level 10 in order to start the quest.')
		.addField('Location', 'In the basement (B1) of Morroc Pyramid Dungeon.');
		message.channel.send(embed1)

	let embed2 = new Discord.RichEmbed()
		.setTitle('Thief Job Quest - Shibus Mushroom Farm Test')
		.setThumbnail(npc2)
		.setImage(map2)
		.addField('Irrelevant Man', 'moc_ruins (141, 125)')
		.addField('product', product)
		.addField('Case', 'You have to talk to Irrelevant Man to get warped to Shibus Farm.There are 2 kinds of mushrooms on the farm that you can collect, Orange Net Mushrooms and Orange Gooey Mushrooms.1 Orange Net Mushroom = 3 points 1 Orange Gooey Mushroom = 1 point You need at least 25 points to pass the test. When you collected enough, you have to go back to the Thief Guide and talk to Test Grader Comrade Brad. Notice you have to die in order to get out of the farm.**Tips: You may want to take off your weapon to attack faster.**')
		.addField('Location', 'See on Picture');
		message.channel.send(embed2)

	let embed3 = new Discord.RichEmbed()
		.setTitle('Thief Job Quest - Test Grader & Transform')
		.setThumbnail(npc3)
		.setImage(map3)
		.addField('Comrade Brad', 'moc_prydb1 (42, 133)')
		.addField('Quest Step', 'He will see if you have enough points to pass the test depending on how many mushrooms you collected. If you pass, he will change you to a thief. He will also give you a little reward for stealing the mushrooms when you pass the test.')
		.addField('Location', 'In the basement (B1) of Morroc Pyramid Dungeon.');
		message.channel.send(embed3)	
}

module.exports.help = {
	name: "thiefjobchange"
}