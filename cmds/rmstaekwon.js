const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/753.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60009_0.jpg'
const taekwon = 'https://www.limitro.com/wiki/images/1/12/TaeKwon_Master.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Taekwon', {file: taekwon})

	let embed = new Discord.RichEmbed()
		.setTitle('Taekwon Job Quest')
		.setImage(map1)
		.setColor('#f41145')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Phoenix', 'Payon (157, 141)')
		.addField('Product', 'Guard [1]')
		.addField('Quest Step', 'Talk to **Phoenix**, he will ask you to **gain 1 more base level** and come back again.\n Afte you pass that part, he will ask you two questions, the answer to the first question is **I face it head on** and the answer to the second question is **Accept differences and learn from them**. After that, speak to him again and he will change you to a Taekwon and give you a Guard[0] to start off. \n **Requirements: You must be a novice at job level 10 in order to start the quest.**')
		.addField('Location', 'Near the very center of Payon Town.');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "taekwonjobchange"
}