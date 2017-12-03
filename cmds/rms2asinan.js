const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/55.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60011_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/730.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60011_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/725.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60011_2.jpg'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/106.gif'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60011_3.jpg'
const assasin = 'http://www.playragnarok.com/images/gameguide/classes/index/index_21_assassin_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Assasin', {file: assasin})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Assassin Job Quest - Registration')
		.setImage(map1)
		.setColor('#0be4ef')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Guildsman', 'in_moc_16 (19, 33)')
		.addField('Quest Step', 'Talk to him to sign up to be an Assassin. He will warp you to Assassin Kai to start the quest right away. If you got kicked out, talk to him again to get back in.\n**Requirements: You must be a Thief at job level 40 or higher in order to start.**')
		.addField('Location', '2 Maps South and 2 Maps East from Morroc Town. moc_fild16.')
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Assassin Job Quest - Quiz')
		.setImage(map2)
		.setColor('#0be4ef')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Assassin Kai', 'in_moc_16 (21, 91)')
		.addField('Quest Step', 'He will shift to another position the first time you click on him. After that, talk to him until he warps you to the next room. In the next room, if you take a few steps an invisible NPC will talk to you. The NPC will ask you 10 questions. You have to get a score of at least 90/100 in order to pass the test. If you failed, you will be warped out of the room, talk to Assassin Kai to get back in and take the test again.\nOnce you passed this test, just move forward to take the next test from Barcardi.\nHere are the questions and answers to the test:')
		.addField('Quiz Question Set 1', '**01.What here is not a prerequisite of the skill Grimtooth?**\n**Left hand mastery Lv 2**\n**02.Enchant Poison makes your weapon what element**\n**Poison**\n**03.What is the function of level 4 Left Hand Mastery?**\n**Attack +70%**\n**04.	What item do you need to use when you use the skill Venom Dust?**\n**Red Gemstone**\n**05.When you increase Enchant Poison up to level 5, what new skill will appear?**\n**	Venom Dust**')
		.addField('Quiz Question Set 1', '**06.What skill listed below allows you to be walk around unseen?**\n**Cloak**\n**07.What is the requirement for Venom Dust?**\n**Must use a red gemstone.**\n**08.What monster card listed below adds to Intelligence?**\n**	Elder Willow**\n**09.How much sp do you use when you do a double hit using a dagger?**\n**0**\n**10.What is the best type of sword to use in the Bybalan dungeon?**\n**Sword of Piercing Wind**')
		.addField('Quiz Question Set 2', '**01.Which monster drops a slotted Katar?**\n**Desert Wolf**\n**02.What card listed below can be inserted into a Jur?**\n**Caramel**\n**03.Which class can forge weapons**\n**Blacksmith**\n**04.Which weapon listed below isnt a Katar class weapon?**\n**Gladius**\n**05.In Bybalan Dungeon a large amount of monsters are of what elemental type?**\n**Water**')
		.addField('Quiz Question Set 2', '**06.What monster listed below cant be tamed and turned into a cute pet?**\n**Roda Frog**\n**07.Choose the monster that is weakest to fire.**\n**Kobold (Axe)**\n**08.Choose the non-elemental Katar.**\n**Infiltrator**\n**09.Pick out the monster that doesnt belong in the group.**\n**Creamy**\n**10.Choose a non-undead monster.**\n**Poison Spore**')
		.addField('Quiz Question Set 3', '**01.What is the increased dodge rate you get when you have the Improve Dodge skill at level 10**\n**30**\n**02.Which monster can detect someone who is hidden/cloaked?**\n**Whispers**\n**03.Assassins can use dual weapons. Which set of weapons below can an Assassin use?**\n**Damascus and Stiletto**\n**04.Which town do you become a Thief in?**\n**Morroc**\n**05.Which card has nothing to do with agility?**\n**Whisper Card**')
		.addField('Quiz Question Set 3', '**06.What makes Assassins so special?**\n**Excellent dodging ability**\n**07.	When an Assassin reaches a Job level of 50, what is the added bonus he/she recieves to agility?**\n**10**\n**08.What piece of equipment cannot be used by an Assassin?**\n**Golden helm**\n**09.When a Novice wants to become a Thief, what mushrooms does he/she need to steal?**\n**Orange Net Mushrooms or Orange Gooey Mushrooms**\n**10.What card listed below is useless to an Assassin?**\n**Elder Willow Card**')
		.addField('Location', 'Inside Assassins Guide (2 Maps South and 2 Maps East from Morroc Town)');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Assassin Job Quest - Ability Test')
		.setImage(map3)
		.setColor('#0be4ef')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Barcardi', 'in_moc_16 (21, 165)')
		.addField('Quest Step', 'Enter Barcardis chat room to get warped to the test room.\nThere are two parts to this test.In the first part, you have to pick out monsters named Job Change Target among a group of monsters named differently. Kill any other monsters and you will fail the test. You will also be timed durring the test. If you take longer than 3 minutes to accomplish your mission you will also fail. A portal will open to lead you to the next part of the test when you finish killing all your targets. Your targets are most likely 3 Porings, 1 Drops, 1 Lunatic and 1 Poporing but keep in mind there are alot of them named differently. Also becareful not to fall into the holes in the room, if you fall into them you have to start again.')
		.addField('Quest Step', 'The last part of the test will require you to sneek past a large group of aggressive and dangerous monsters. Your hide skill will come in handy here. You will have 3 minutes to finish this part of the test as well. If you are killed, or if you run out of time, you will fail the test. It is highly recommended to get to the end of the room as fast as possible to avoid getting mobbed. You are not required to kill any of the monsters.')
		.addField('Quest Step', 'You must pass BOTH parts of the test in order to move on to the next exam. If you fail one of them, you will have to start the whole test all over again.\nWhen you went through both rooms, you will end up in a room with invisible walls.')
		.addField('Location', 'Inside Assassins Guide');
		message.channel.send(embed3);
		
	let embed4 = new Discord.RichEmbed()
		.setTitle('Assassin Job Quest - Invisible Wall')
		.setImage(map4)
		.setColor('#0be4ef')
		.setThumbnail(npc4)
		.setTimestamp()
		.addField('Guild Master', 'in_moc_16 (149, 80)')
		.addField('Product(s)', 'Necklace of Oblivion x 1')
		.addField('Quest Step', 'You must find your way in the room to get to the Guild Master. You cannot click on him from far away, you must get to the tiles next to him to pass this test.\nHe will ask you a few questions but you can answer them in any way you want. Then if you are at job level 50, you get to choose one item between a Jur[3], a Katar[2], a Main Gauche[4], or a Gladius[3]. Otherwise, you will get a Jur[2], a Stiletto[3], or a Katar[1] (randomly determined).')
		.addField('Quest Step', 'Lastly, he will give you a Necklace of Oblivion and warp you back to the entrance. Now, just talk to Guildsman and he will change you to an assassin.')
		.addField('Note', '**Note: If you dont have the Necklace of Oblivion with you, Guildsman will not change you. If you tell him "Well... It kinda got stolen... heh....", you will have to start the test all over again.**')
		.addField('Location', 'Inside Assassins Guide');
		message.channel.send(embed4);		
	
}

module.exports.help = {
	name: "assasinjobchange"
}