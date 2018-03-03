const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/742.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60021_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/754.gif'
//const map2 = ''
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/755.gif'
//const map3 = ''
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/755.gif'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60021_3.jpg'
const npc5 = 'http://file5.ratemyserver.net/quests/npcs/120.gif'
const map5 = 'http://file5.ratemyserver.net/quests/minimaps/m60021_4.jpg'
const npc6 = 'http://file5.ratemyserver.net/quests/npcs/109.gif'
//const map6 = ''
const npc7 = 'http://file5.ratemyserver.net/quests/npcs/743.gif'
const map7 = 'http://file5.ratemyserver.net/quests/minimaps/m60021_6.jpg'
const sage = 'http://www.playragnarok.com/images/gameguide/classes/index/index_22_sage_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Sage', {file: sage})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - Registration')
		.setImage(map1)
		.setColor('#e809b7')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Academy Staff', 'yuno_in03 (154, 35)')
		.addField('Options 1', '**70000z**')
		.addField('Options 2', '**Old Magicbook x 1\nNecklace of Wisdom x 1 **')
		.addField('Options 3', '**30000z + items\nFeather of Birds x 50\nFluff x 50\nClover x 50\nFeather x 50**')
		.addField('Options 4', '**30000z + items\nFeather of Birds x 50\nFluff x 50\nIron Ore x 25**')
		.addField('Options 5', '**30000z + items\nClover x 50\nFeather x 50\nSquid Ink x 25**')
		.addField('Quest Step', 'If you are at job level 50, you will get a full scholarship so that you do not have to pay any fees or collect any items. Otherwise ...\nThere are 3 options you can choose to register for the quest:\nOption 1: Pay 70,000z\nOption 2: Bring an Old Magic Book and a Necklace of Wisdom\nOption 3: He will assign you randomly one of three sets of items listed in option 3[a-c] above.\nAfter you are registered, you can go take the placement test from the Placement Test Professor.')
		.addField('Note', '**Requirements: You must be a Mage at job level 40 or higher in order to start the quest.**')
		.addField('Location', 'Top right building in Yuno Turn left once you are inside');
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - Placement Test')
		//.setImage()
		.setColor('#e809b7')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Placement Test Professor', 'yuno_in03 (105, 177)')
		.addField('Quest Step', 'There will be a quiz consisting of 20 questions. Each question worth 5 points. You must get at least 80 points to pass the test. When you are done, your next test will be given by Professor Hermes.\nThere are 3 different sets of questions, here are the questions and answers for references:')
		.addField('Question Set 1', '**01.Choose the jewel that the Morroc Jewel Merchant does not sell.**\n**Garnet**\n**02.Choose the city where users cannot purchase Monsters Feed from an NPC**\n**Aldebaran**\n**03.Choose the closest city to the Maze.**\n**Prontera**\n**04.Choose the monster that is a different type than the others.**\n**Penomena**\n**05.Choose the monster with the different attribute.**\n**Giearth**')
		.addField('Question Set 1', '**06.Choose the monster that is different in size.**\n**Argos**\n**07.Choose the monster which does not drop Yggdrasil Leaf.**\n**Marduk**\n**08.Choose the NPC that is irrelevant to the Priest job change quest.**\n**Sir Windsor**\n**09.Choose the NPC that is not a citizen of Morroc.**\n**Antonio**\n**10.Choose the Kafra lady who has gorgeous blue hair.**\n**Pavianne**')
		.addField('Question Set 1', '**11.Choose the skill that is irrelevant to learning Fire Wall, the Mage skill.**\n**Napalm Beat Lv4**\n**12.How much SP can be restored when learning SP recovery at lvl 6 (without being affected by INT)?**\n**18 sp**\n**13.How many INT points does a Mage receive as a bonus at job lvl 33?**\n**4**\n**14.Choose the correct SP consumption and the skill duration for Improve Concentration lvl 5 (Archer skill).**\n**45 / 80 sec**\n**15.Choose the skill that is irrelevant to learning Maximize Power, the Blacksmith skill.**\n**	Skin Tempering**')
		.addField('Question Set 1', '**16.What is the correct defense rate and ability of Cute Ribbon?**\n**1 / SP +20**\n**17.Choose the class that cannot equip Saint Robe.**\n**Thief**\n**18.Choose the abnormal status that cannot be cured by Green Potion.**\n**Curse**\n**19.	Choose the correct name for the ancient kingdom that disappeared somewhere in Geffen.**\n**Geffenia**\n**20.Choose the correct name for the tree that has become the root of this world.**\n**Yggdrasil**')
		.addField('Question Set 2', '**01.Choose the item that the Magical Tool merchant in Geffen does not sell.**\n**Mantle**\n**02.Choose the city where users cannot purchase Blade from an NPC.**\n**Aldebaran**\n**03.Choose the closest city to Glast Heim.**\n**Geffen**\n**04.Choose the monster that is a different type than the others.**\n**Marin**\n**05.Choose the monster that has a different attribute.**\n**Smokie**')
		.addField('Question Set 2', '**06.Choose the monster that is different sized.**\n**Drake**\n**07.Choose the monster that does not drop Phracon.**\n**Peco Peco Egg (they all drop...)**\n**08.Choose the NPC that is irrelevant to the Blacksmith job change quest.**\n**Barcadi**\n**09.Choose the NPC that is not a citizen of Al De Baran**\n**GOD-POING**\n**10.Choose the Kafra lady who is the youngest among the staff.**\n**Curly Sue**')
		.addField('Question Set 2', '**11.Choose the correct SP consumption and the number of evasions when using Safety Wall lvl 6.**\n**SP 40, 7 times**\n**12.Choose the correct amount of magic attack for Napalm Beat lvl 6.**\n**MATK x 1.3**\n**13.	Choose the catalyst stone for Mage Solution no. 4 that is used for the Mage job change quest.**\n**Carat Diamond**\n**14.Choose the correct attack strength and SP consumption for Bash lvl 6, the Swordman skill.**\n**280% / 15**\n**15.Choose the skill that is irrelevant to learning Claymore Trap, the Hunter skill.**\n**Remove Trap**')
		.addField('Question Set 2', '**16.Choose the correct defense and ability of Wedding Veil.**\n**0 / MDEF +5**\n**17.Choose the class that cannot equip Coat.**\n**Novice**\n**18.Choose the item that is not an ingredient for Blue Dyestuffs.**\n**Karvodailnirol**\n**19.	When the world was created by the god Odin, what did he use for the material?**\n**The heart of Ymir**\n**20.Choose the metal that has rumored to bring fortune and fame to a person with the destiny.**\n**Emperium**')
		.addField('Question Set 3', '**01.Choose an item that the Gift merchant in Prontera does not sell.**\n**Bouquet**\n**02.Choose a city where you cannot purchase a Stiletto.**\n**Prontera**\n**03.Choose the closest city to Turtle Island.**\n**Alberta**\n**04.Choose the monster that is a different type than the others**\n**Aster**\n**05.Choose the monster that has a different attribute than the others.**\n**Metaller**')
		.addField('Question Set 3', '**06.Choose the monster that is different sized than the others.**\n**Raydric**\n**07.Choose the monster which doesnt drop Alcohol.**\n**Poison Spore**\n**08.Choose the NPC that is irrelevant to the Knight job change quest.**\n**Thomas Servantes**\n**09.Choose the NPC that is not a citizen of Prontera.**\n**Pina**\n**10.	Choose the right name for the Kafra lady who wears glasses.**\n**Leilah**')
		.addField('Question Set 3', '**11.How much SP is spent to use lvl 7 Thunderstorm?**\n**59**\n**12.Choose the right amount of damage reduction and SP consumption of the Energy Coat skill when the casters remaining SP is 50%**\n**Damage -18% SP2%**\n**13.Choose the property that is irrelevant to Bolt type skills for the Mage class**\n**Earth**\n**14.Choose the right chance and attack strength for lvl 7 Double Attack, the Thief skill.**\n**35% / 140%**\n**15.Choose the skill that is irrelevant to learning Magnus Exorcismus, the Priest skill.**\n**Divine Protection**')
		.addField('Question Set 3', '**16.Choose the correct defense and ability of the Bunny Band.**\n**2 / LUK +2**\n**17.Choose the class that cannot equip Padded Armor.**\n**Archer**\n**18.Choose the item that cures all abnormal status and restores full HP and SP at the same time.**\n**Yggdrasil Berry**\n**19.Who rules the Rune-Midgarts kingdom right now?**\n**Tristram the 3rd (Tristan?)**\n**20.Choose the god of Crusaders.**\n**Odin**')
		.addField('Location', 'Enter the portal behind the Academy Staff In the hallway, enter the first room on the left');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - Skill Test')
		//.setImage()
		.setColor('#e809b7')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Test Professor', 'yuno_in03 (169, 180)')
		.addField('Monsters in Phase 1', 'Chonchon x 8\nFabre x 8')
		.addField('Monsters in Phase 2', 'Lunatic x 24')
		.addField('Monsters in Phase 3', 'Whisper x 1\nWhisper x 4')
		.addField('Quest Step', 'In this test, you have to kill all monsters presented to you in 3 phases in a room. You have a maximum of 3 minutes in each phase to clear the monsters.\nIf you get knock out or cannot kill all monsters within the time limit, you will fail the test.\nAfter you pass and return from the test room, depending on how well you done on the job quest so far, he will decide which path you go. He will assign you to either the Biology Professor, the Physics Professor or the History Professor. The professor is going to help you write your thesis. You need a thesis to graduate from the academy.')
		.addField('Location', 'Exit the Placement Test Room from the right Then go to the room across the hallway');
		message.channel.send(embed3);
		
	let embed4 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - Biology Class')
		.setImage(map4)
		.setColor('#e809b7')
		.setThumbnail(npc4)
		.setTimestamp()
		.addField('Biology Professor', 'yuno_in03 (32, 102)')
		.addField('Ingredient(s)', 'next text')
		.addField('-- Water Monster Drops Set 1 --', 'Tendon x 5\nNipper x 5\nSharp Scale x 5')
		.addField('-- Water Monster Drops Set 2 --', 'Clam Flesh x 5\nNipper x 5\nHeart of Mermaid x 5')
		.addField('-- Water Monster Drops Set 3 --', 'Single Cell x 5\nTentacle x 5\nFish Tail x 5')
		.addField('-- Insect Monster Drops Set 1 --', 'Cobweb x 5\nShell x 5\nInsect Feeler x 5')
		.addField('-- Insect Monster Drops Set 2 --', 'Moth Dust x 5\nSnails Shell x 5\nHorn x 5')
		.addField('-- Insect Monster Drops Set 3 --', 'Mantis Scythe x 5\nWorm Peeling x 5\nRainbow Shell x 5')
		.addField('-- Insect Monster Drops Set 4 --', 'Cobweb x 5\nMantis Scythe x 5\nSolid Shell x 5')
		.addField('-- Material for Thesis --', 'Feather of Birds x 1\nAnimal Skin x 1\nTrunk x 1\nSquid Ink x 1\nEmpty Bottle x 1')
		.addField('Product(s)', 'next text')
		.addField('-- Book with your thesis --', 'Book [3] x 1')
		.addField('Quest Step', 'To get started in his class, he require you to bring him some items dropped by water element monsters. There are 3 possible sets, see the list above for more information.\nOnce you done that, he will ask you some questions to make sure you learn from collecting those items.\nFor the next lesson, he will ask you to collect some items dropped by insectoid monsters. Again, there are 3 possible sets, see the list above for more information.')
		.addField('Quest Step', 'When you have gotten the items and give them to him, he will give you a lecture about insectoid monsters. After that, he will ask you bring the required material to write your thesis.\nOnce you bring him the items, you can start writing your thesis by choosing sentences he present to you to select from. Just use common sense to choose the sentences and complete the thesis. When you are done, you will get a Book[3]. Show it to Magic Academy Headmaster and he will change you into a Sage.')
		.addField('Location', 'A few steps west from the Sage Academy (The building next door to the west)');
		message.channel.send(embed4);
		
	let embed5 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - Physics Class')
		.setImage(map5)
		.setColor('#e809b7')
		.setThumbnail(npc5)
		.setTimestamp()
		.addField('Physics Professor', 'yuno_in03 (244, 31)')
		.addField('Ingredient(s)', 'Next text')
		.addField('-- Part 1 --', 'Stone x 30 ')
		.addField('-- Part 2 --', 'Crystal Arrow x 50\nStone Arrow x 50\nArrow of Wind x 50')
		.addField('-- Part 3 --', 'Holy Water x 1')
		.addField('-- Material for Thesis --', 'Feather of Birds x 1\nAnimal Skin x 1\nTrunk x 1\nSquid Ink x 1\nEmpty Bottle x 1')
		.addField('Product(s)', 'Next text')
		.addField('-- Part 2: To make elemental arrows --', 'Crystal Blue x 1\nGreen Live x 1\nWind of Verdure x 1 ')
		.addField('-- Book with your thesis --', 'Book [3] x 1')
		.addField('Note', 'If you are assigned to learn from him, you better start making friends with the thief class, archer class and acolyte class (if you havent already done so). Because you will need their help to complete this part of the quest.')
		.addField('Part 1:', 'To start the lecture, he will ask you to bring him 30 stones as part of the class materials. Just ask a thief class friend to help you with this one.')
		.addField('Part 2:', 'After getting him the stone, he will give you 3 elemental stones, you are supposed to ask your archer class friend to turn those elemental stones into elemental arrows and bring the arrows back to the professor.')
		.addField('Part 3:', 'Now, he will give you a lecture about elemental properties and then ask you to bring him a holy water for the next lesson. Just ask your acolyte class friend to make a holy water for you. Take it back to him.')
		.addField('Quest Step', 'After all that hard work, its finally time to prepare for your thesis. Again, you will need to bring him some items (see the list above). Once you bring him the items, you can start writing your thesis by choosing sentences he present to you to select from. Just use common sense to choose the sentences and complete the thesis. When you are done, you will get a Book[3]. Show it to Magic Academy Headmaster and he will change you into a Sage.')
		.addField('Location', 'Top right corner in Yuno Just head north from the Academy');
		message.channel.send(embed5);
		
	let embed6 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - History Class')
		//.setImage()
		.setColor('#e809b7')
		.setThumbnail(npc6)
		.setTimestamp()
		.addField('History Profressor', 'yuno_in03 (62, 176)')
		.addField('Ingredient(s)', 'Next text')
		.addField('-- Give him one of the following: --', 'Yggdrasil Leaf x 1\nYggdrasil Seed x 1\nYggdrasil Berry x ')
		.addField('-- Give him all of these: --', 'Feather of Birds x 1\nAnimal Skin x 1\nTrunk x 1\nSquid Ink x 1\nEmpty Bottle x 1')
		.addField('Product(s)', 'Next text')
		.addField('-- Book with your thesis --', 'Book [3] x 1')
		.addField('Quest Step', 'To start the lecture, you will have to bring him something that is related to Yggdrasil. You can bring a Yggdrasil leaf, Yggdrasil berry, or a Yggdrasil seed. The easiest to get should be a Yggdrasil leaf since you can buy that in Lutie, Al De Baran and various other locations for 4,000z each.')
		.addField('Quest Step', 'During his lecture, he will ask you to bring him some items in order to complete your thesis (see the list above). Once you bring him the items, you can start writing your thesis by choosing sentences he present to you to select from. The selections are based on his history lecture, if you have read what he said you should do just fine. ')
		.addField('Note1', 'The following thesis had proven to be working so far:\nA giant snake Yormungandr.\nUtgard where titans live,\nMidgard, where humans live in,\nAsgard, where gods live.\nA giant ash tree.\nAsgard, Jotunnheim, Niflheim.\ncan restore half of total HP and SP.')
		.addField('Note2', 'If you failed the thesis, you will have to bring the set of items to write the thesis again. ')
		.addField('Note3', 'When you are done, you will get a Book[3]. Show it to Magic Academy Headmaster and he will change you to a Sage.')
		.addField('Location', 'Exit the Skill Test Room Walk to the room at the end of the hallway');
		message.channel.send(embed6);
		
	let embed7 = new Discord.RichEmbed()
		.setTitle('Sage Job Quest - Job Change')
		.setImage(map7)
		.setColor('#e809b7')
		.setThumbnail(npc7)
		.setTimestamp()
		.addField('Magic Academy Headmaster', 'yuno_in02 (38, 61)')
		.addField('Quest Step', 'Speak to him and he will transform you into a Sage.')
		.addField('Location', 'Building at top left corner of Yuno');
		message.channel.send(embed7);					
	
}

module.exports.help = {
	name: "sagejobchange"
}