const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/752.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60018_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/733.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60018_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/745.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60018_2.jpg'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/751.gif'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60018_3.jpg'
const npc5 = 'http://file5.ratemyserver.net/quests/npcs/752.gif'
const map5 = 'http://file5.ratemyserver.net/quests/minimaps/m60018_0.jpg'
const crusader = 'http://www.playragnarok.com/images/gameguide/classes/index/index_22_crusader_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Crusader', { file: crusader})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Crusader Job Quest - Collecting Items')
		.setImage(map1)
		.setColor('#14ccb9')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Senior Crusader', 'prt_castle (45, 169)')
		.addField('Quest Step', 'Talk to Senior Crusader to get started. He will need you to collect some items for him.\nIf your inventory has a Chivalry Emblem and a Hand of God when talking to him, he will take the 2 items and let you pass the this part of the test.\nAfter you are done with him, go buy a Rosary from Prontera Church and then head down to the Prontera Castle Basement to start the next test.\n')
		.addField('Item Collection Set 1', 'Decayed Nail x 10\nDaenggie x 10\nWorn-out Prison Uniform x 10\nStinky Scale x 10')
		.addField('Item Collection Set 2', 'Lantern x 10\nHorrendous Mouth x 10\nRotten Bandage x 10\nJack o Pumpkin x 10')
		.addField('Item Collection Set 3', 'Skel-Bone x 10\nOrc Claw x 10\nManacles x 10\nShort Daenggie x 10')
		.addField('Or try bringing him these (eA only?) ', 'Chivalry Emblem x 1\nHand of God x 1')
		.addField('Note', '**Requirements: You must be a Swordsman at job level 40 or higher in order to start the quest**')
		.addField('Location', 'Inside Prontera Castle Walk straight to the third room (go through 2 portals) Turn left, walk until you see a stair go upstair');
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Crusader Job Quest - Patience Test')
		.setImage(map2)
		.setColor('#14ccb9')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Man in Anguish', 'prt_castle')
		.addField('Quest Step', 'You will need to wear a Non-Slotted Rosary to enter the test room. You can buy it in the Prontera Church (top right corner of Prontera) for 15,000z.\nIn this test, you only need to use Endure (maybe some pots as well) and walk to the other side of the room. Do not hit any of the monsters in the room, you will fail as soon as you kill any of the monsters.\nWhen you got warped out, talk to Man in Anguish for his confirmation of passing the test or re-test if needed.\nAfter that, he will direct you to meet Gabriel Valentine in the Prontera Church for your next test.')
		.addField('Ingredient(s)', 'Rosary x 1')
		.addField('Location', 'Basement of Prontera Castle From the Entrance of the castle turn right, walk until you see a stair go downstair');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Crusader Job Quest - Knowledge Test')
		.setImage(map3)
		.setColor('#14ccb9')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Gabriel Valentine (Crusader)', 'prt_church (95, 127)')
		.addField('Quest Step', 'In this test, he will ask you 10 questions. You must get at least 8 questions right to pass this test (for the first try you have to get 9 correct to pass).\nThere are 3 different set of questions. Here are the questions and answers reference from the eAthena script, official server might have them slightly different:')
		.addField('Question Set 1', '**01.Which attribute is the most effective in atttacking the Undead?**\n**Holy**\n**02.If the monster is a Level 2 Undead, how much more damage does a Holy attack do compared to Fire?**\n**50%**\n**03.What item can you not get from an Evil Druid?**\n**Monk Hat**\n**04.Which Undead monster has the highest HP?**\n**Zombie Prisoner**\n**05.Which of the following monsters is a different size than the others?**\n**Drake**')
		.addField('Question Set 1', '**06.Which card grants you tolerance to Undead property attacks?**\n**Orc Zombie Card**\n**07.What was the relationship between Munak and Bongun before they passed away?**\n**Childhood friends in the same village**\n**08.Which of the following monsters is not aggressive?**\n**Skeleton**\n**09.What is the name of the shield in which a Munak Card has been inserted?**\n**Amulet Shield**\n**10.Which of the following monsters does not drop Memento?**\n**Munak**')
		.addField('Question Set 2', '**01.Which of the following monsters is a different attribute than the others?**\n**Isis**\n**02.Which sword is effective in attacking Demon monsters?**\n**Decussate Tsurugi**\n**03.Which item is NOT dropped by Dokebi?**\n**Golden Hammer**\n**04.Which Demon monster has the most HP?**\n**Marionette**\n**05.Which Demon monster is a different size than the others?**\n**Ghostring**')
		.addField('Question Set 2', '**06.Which shield reduces damage inflicted by Demon monsters?**\n**Shield from Hell**\n**07.Which attribute is the most effective on the Wind Ghost?**\n**Earth**\n**08.Which monster is different from the other Demon monsters?**\n**Whisper**\n**09.What effect does the Marionette Card have?**\n**Increase defense against Ghost attacks by 30 %**\n**10.Which of the following is an effective way to react when encountering a demon monster?**\n**Put Holy Water on a weapon and attack.**')
		.addField('Question Set 3', '**01.What level of Divine Protection do you need to learn Demon Bane?**\n**Level 3**\n**02.If your INT is 30, including INT bonuses from quipment, at level 55, how much HP does Level 5 Heal recover?**\n**440**\n**03.With Level 7 Divine Protection, by how much is your defense against the Undead increased?**\n**21**\n**04.Which of the following spears can attack Nightmare, which is endowed with the Ghost attribute?**\n**Zephyrus**\n**05.What level of Heal do you need to learn Cure?**\n**Level 2**')
		.addField('Question Set 3', '**06.What is the attack speed when Level 3 Cavalier Mastery is learned?**\n**80 % of normal speed**\n**07.Which of the following is not correct of the Demon Bane skill?**\n**Only Acolytes can learn the skill**\n**08.How much SP does Level 7 Heal use?**\n**31**\n**09.hat status cannot be cured with the Cure skill?**\n**Curse**\n**10.What best describes a Crusader?**\n**One preparing for the Holy War.**')
		.addField('Quest Step', 'After you pass the test, he will ask you to go find Bliant Piyord in the Prontera Castle for the next test.')
		.addField('Location', 'Left of the stage.');
		message.channel.send(embed3);
		
	let embed4 = new Discord.RichEmbed()
		.setTitle('Crusader Job Quest - Purification Test')
		.setImage(map4)
		.setColor('#14ccb9')
		.setThumbnail(npc4)
		.setTimestamp()
		.addField('Patron Knight (Bliant Piyord)', 'prt_castle (35,151)')
		.addField('Ingredient(s)', 'Holy Water x 1\nRosary x 1')
		.addField('Quest Step', 'Each time you want to enter the test you, you will need a holy water. Just ask an Acolyte/Priest friend to make you some. Again, you must be wearing the rosary just like the previous test.\nIn this test, all you have to do is defeat every monster in the test room. It is recommended to bring HP / SP healing items as there are quite a lot of monsters in there. There is no time limit. If you die, you fail and have to start all over again.\nOnce you finish this test, talk to Patron Knight for confirmation of the passing. He will tell you to go back to the Senior Crusader Michael Halig to get the job change.')
		.addField('Location', 'Outside Senior Crusaders room, just by the staircase.');
		message.channel.send(embed4);
		
	let embed5 = new Discord.RichEmbed()
		.setTitle('Crusader Job Quest - Job Change')
		.setImage(map5)
		.setColor('#14ccb9')
		.setThumbnail(npc5)
		.setTimestamp()
		.addField('Senior Crusader', 'prt_castle')
		.addField('Product(s)', '**-- For Job Level Below 50 --**\n**White Potion x 6 **\n**-- For Job Level 50 --**\n**White Potion x 12**')
		.addField('Quest Step', 'He will change you into a crusader.\nIf you are at job level 50, you will get 12 white potions. Otherwise, you will get 6 white potions.')
		.addField('Location', 'See Step 1');
		message.channel.send(embed5);			
	
}

module.exports.help = {
	name: "crusaderjobchange"
}