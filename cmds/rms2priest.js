const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/60.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60012_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/110.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60012_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/79.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60012_2.jpg'
const priest = 'http://www.playragnarok.com/images/gameguide/classes/index/index_21_priest_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Priest', {file: priest})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Priest Job Quest - Test 1')
		.setImage(map1)
		.setColor('#ef0b54')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Father Thomas', 'prt_church (16, 41)')
		.addField('Quest Step', 'Talk to him to signup to be a priest. He will tell how the quest is going to be and what is your first task. \n If you are at job level 50, you can skip the first part of the test and he will warp you to Father Peter directly. \n Otherwise, your first task is to pay a visit, in this order, to Father Rubalkabara, then Mother Marthilda, and lastly Father Yosuke. The locations of each of these NPCs are documented on the Acolyte Quest Guide page. See related quest section below. After you have spoken to all 3 Clerics, go back to Father Thomas and he will warp you to Father Peter to start the next part of the test. \n **Requirements: You must be an Acolyte at job level 40 or higher in order to start.**')
		.addField('Location', 'Inside Prontera Church (first room on the left)');
		message.channel.send(embed1);

	let embed2 = new Discord.RichEmbed()
		.setTitle('Prest Job Quest - Overcome the Darkest of Evils')
		.setImage(map2)
		.setColor('#ef0b54')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Father Peter', 'job_prist (24, 186)')
		.addField('Quest Step', 'In the quest waiting room, enter the chat box on top of Father Peters head to begin the test. Or click on him for the test instructions. \n There are 3 parts to this test. In the first part, you have to kill all the zombies in the room. In the second part, you will be presented to a series of monster disguised NPCs (Dark Lord, Baphomet, etc), each will attempt to get you to the dark side. You have to resist the temptation, answer to their temptational deals with common sense as a servant of God (Just answer "Devil, Be Gone" for most part). If you accept their deals, you will be warped to some wild places and have to do the second test again. After the temptation test, you will be in a room filled with mummies. You are not required to kill any of them. Simply make it to the exit to pass the test. \n ')
		.addField('Note', '**Note: You have 5 minutes to pass all 3 rooms. You may bring a priest friend to help you with the zombie room and/or the mummy room test. Just have the priest talk to Father Thomas while the acolyte is inside taking the test. The priest must have a Rosary[0] in his inventory in order to enter the test room.**')
		.addField('First Room', 'Zombie x 13')
		.addField('Third Room', 'Mummy x 6 ')
		.addField('Location', 'Father Thomas and Father Peter will warp you there.');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Priest Job Quest - Last Quiz')
		.setImage(map3)
		.setColor('#ef0b54')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Sister Cecile', 'prt_church (27, 24)')
		.addField('Quest Step', 'She will ask you a series of questions to determine if you are suitable to handle the job as a priest. Just answer the questions with common sense as a priest. \n If you get any of the question wrong, she will stop you. You can talk to her to take the test again. \n Once you passed this test, go talk to Father Thomas again, he will change you into a priest. Also, if you are at job level 50 when you started the priest quest, you will get a Bible[2] from him. Otherwise, he will give you a Book[3].')
		.addField('Location', 'Inside Prontera Church (first room on the left)');
		message.channel.send(embed3);	
	
}

module.exports.help = {
	name: "priestjobchange"
}