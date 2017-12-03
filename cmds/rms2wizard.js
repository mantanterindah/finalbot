const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/68.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60013_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/735.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60013_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/735.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60013_2.jpg'
const wizard = 'http://img.ragnarokonline.com/news/update/comodo/cha_wizard.gif'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wizard', {file: wizard})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Wizard Job Quest - Collecting Items')
		.setImage(map1)
		.setColor('#0b04d8')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Catherine Medichi', 'gef_tower (111, 37)')
		.addField('Ingredient(s)', '**-- -- Item Collection Set 1 -- --** \n  Red Gemstone x 10 \n Blue Gemstone x 10 \n Yellow Gemstone x 10 \n \n **-- -- Item Collection Set 2 -- --** \n  Crystal Blue x 5 \n Green Live x 5 \n Red Blood x 5 \n Wind of Verdure x 5 ')
		.addField('Quest Step', 'Talk to **Catherine Medichi** to sign up for the job quest. If you are less than job level 50, your first test is to collect a set of items. Get back to her when you collected the items, then you can advance to the next test. **Raul Expagarus** will be the NPC for your next test \n Mage at job level 50 can skip the first test and advance to the next test after talking to her.\n **Requirements: You must be a Mage at job level 40 or higher in order to start.**')
		.addField('Location', 'At the top floor of geffen tower.');
		message.channel.send(embed1);

	let embed2 = new Discord.RichEmbed()
		.setTitle('Wizard Job Quest - Questions & Answers')
		.setImage(map2)
		.setColor('#0b04d8')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Raul Expagarus', 'gef_tower (102, 24)')
		.addField('Quest Step', 'He will ask you 10 questions, each questions worth 10 points, you have to get at least 90/100 points to pass this test. After you passed this test, he will ask you to take some rest before you take the next test. Just talk to him again when you are ready for the next test. \n There are 3 different possible sets of questions prepared for this test, here are the questions and answers of each sets:')
		.addField('Quiz Question Set 1 - Spell Quiz', '01. Which of the following is not necessary to learn Fire Wall? \n Napalm Beat Lv 4 \n 02. Regardless of its previous attribute. What does the monsters attribute change to when you cast Frost Diver on it? \n Water \n 03. When you completely master Napalm Beat, what is the ratio of the increased MATK using that spell? \n 1.7 times \n 04. What item do you need when casting Stone Curse? \n Red Gemstone \n 05. Which of the following is NOT required to master Safety Wall? \n SP Recovery Lv 6')
		.addField('Quiz Question Set 1 - Spell Quiz', '06. Without the INT bonus, what amount of SP is recovered every 10 seconds when you have learned Increase SP Recovery Lv 7? \n 21 \n 07. Using Energy Coat, when you have 50% of your SP remaining, how much SP is used when hit, and what percentage is damage reduced by? \n Damage 18% SP 2% \n 08. How much SP is consumed and how many times can you avoid attacks when using Safety Wall Lv 6? \n SP 35, 7hits \n 09. How much SP is needed when using Lv 10 Thunderstorm? \n 74 \n 10. Which skill is most useful training in the Byalan Dungeon? \n Lightning Bolt')
		.addField('Quiz Question Set 2 - Monster Quiz', '01. Which monster can you obtain a slotted Guard from? \n Pupa \n 02. Which of the following is the easiest monster for a low level Mage to hunt? \n Flora \n 03. Which monster will not be affected by Stone Curse? \n Evil Druid \n 04. When attacking a Lv 3 water attribute monster with a wind attribute weapon, what is the damage percentage? \n 200% \n 05. If a Baby Desert Wolf and a Familiar fought, which one would win? \n Baby Desert Wolf')
		.addField('Quiz Question Set 2 - Monster Quiz', '06. Which of the following cannot be a Cute Pet? \n Roda Frog \n 07. Choose the monster that is weak against a fire attribute attack. \n Hammer Goblin \n 08. Which of the following monsters has the highest defence? \n Caramel \n 09. Choose the monster thats a different species. \n Ghostring \n 10. hich of the following is not an Undead monster? \n Deviace')
		.addField('Quiz Question Set 3 - Mage Quiz', '01. Which stat is most important for a Mage? \n INT \n 02. Which attribute does not have a **Bolt** type attack? \n Earth \n 03. 	Choose the one that does not relate to a mage. \n Good at selling stuff. \n 04. Which town is the home of the Mages? \n Geffen \n 05. Which of the following cards has nothing to do with INT? \n Soldier Andre Card')
		.addField('Quiz Question Set 3 - Mage Quiz', '06. What is the Mage good at compared to other job classes? \n Exceptional Magic Skills \n 07. What is the INT bonus at Job Lv 40 for a mage? \n 5 \n 08. Which item cant be equipped by mages? \n Cap \n 09. 	Which of the following is the catalyst when making the Mage test solution 3? \n Blue Gemstone \n 10. Which card is irrelevant to magic? \n Magnolia Card')
		.addField('Location', 'At the top floor of geffen tower He is standing in the corner.');
		message.channel.send(embed2);
		
	let embed3 = new Discord.RichEmbed()
		.setTitle('Wizard Job Quest - Ability Test')
		.setImage(map3)
		.setColor('#0b04d8')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Raul Expagarus', 'gef_tower (102, 24)')
		.addField('Quest Step', 'There will be 3 different rooms, each containing monsters of a different elemental property. The Room of Water will have monsters of the water property, followed by the Room of Earth with earth property monsters, and finally the Room of Fire with fire property monsters. You will have 3 minutes for each room. You must kill all of the monsters in the room to be able to advance to the next room. Remember to use the right spells for each room.')
		.addField('Monster Water Room (Use Wind Spells)',' Phen x 1 \n Kukre x 2 \n Vadon x 1 \n Cornutus x 1 \n Marina x 1 \n Marin x 1 \n Obeaune x 1 \n Hydra x 4 \n Marine Sphere x 1 ')
		.addField('Monster Earth Room (Use Fire Spells)','Yoyo x 1 \n Deniro x 1 \n Caramel x 1 \n Hode x 1 \n Savage x 1 \n Giearth x 1 \n Piere x 1 \n Orc Warrior x 1 \n Vitata x 1 \n Mantis x 1 \n Mandragora x 6 \n Flora x 1')
		.addField('Monster Fire Room 3 (Use Ice Spells)','Zerom x 1 \n Goblin x 1 \n Scorpion x 1 \n Frilldora x 1 \n Peco Peco x 1 \n Elder Willow x 1 \n Metaller x 1 \n Horong x 2 \n Greatest General x 1')
		.addField('Note','In some versions of RO, if you failed more than 4 times (in the water room?), he will offer you to bribe him with a `Worn Out Scroll` in exchange for a pass.  \n After you passed this test, go to Catherine Medichi and she will change you into a wizard. You will get 6 Blue Potions upon changing job. \n Note: Everytime you fail the test, he will give you a pop quiz before you can take the test again. Here are the questions and answers to the pop quiz: ')
		.addField('Note Question', '01. Choose the monster with a different attribute than the others. \n Cornutus \n 02. Choose the monster that is not a looting one. \n Zerom \n 03. Which of these monsters does not recognize casting? \n Marina \n 04. Chose the spell that would be efficient against a Marine Sphere \n Lightning Bolt \n 05. Choose the monster that can move. \n Frilldora')
		.addField('Location', 'At the top floor of geffen tower Same NPC as the one in the previous step');
		message.channel.send(embed3);		
	
	
}

module.exports.help = {
	name: "wizardjobchange"
}