const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/727.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60014_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/732.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60014_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/59.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60014_2.jpg'
const hunter = 'http://www.playragnarok.com/images/gameguide/classes/index/index_21_hunter_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Hunter', {file: hunter})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Hunter Job Quest - Interview')
		.setImage(map1)
		.setColor('#6704d8')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Hunter Sherin', 'hu_in01 (386, 374)')
		.addField('Quest Step', 'How to get to Hugel: Take the Izlude airship (1200z). Exit at Yuno. Go downstair into the terminal, talk with the Airport Staff to take the airship to Hugel. Exit the airship as it arrive at Hugel. \n Talk to Hunter Sherin to sign up for the quest. She will give you an interview consisting of 10 questions, each question worth 10 points. You must get at least 90 points on the interview in order to advance to the next step. There shouldnt be any problem if you answer the questions with common sense. Here are the questions and answers: ')
		.addField('Question', '01. You are an Archer, and you dont know where you should go to hunt. What do you do? \n Quietly ask a person passing by. or Wander around alone and search for a place. \n 02. So youve decided on a place to hunt. Youre going to hunt the monsters known as Hodes in the Sograt Desert. But youre in Payon! How do you get to the desert? \n Use the Kafra service. or Walk with a friend \n 03.There is no Priest to ask for a warp, and no friend is around to walk with you. You must use the Kafra service, but you have no Zeny! How would you go about to make the Zeny that you need? \n Sell items I do not need or Hunt at a nearby field. \n 04. So you finally arrive at the Sograt Desert. But you realize that Hodes are a bit too strong for you to hunt alone. What is your solution to this situation? \n Go back to town.')
		.addField('Question', '05. Lets say you were having too much trouble hunting Hodes and returned to town. Now you are out of HP and a Priest happens to be around. How would you ask for a Heal? \n Would it be possible to get a Heal, please \n 06. This time, you found a rare item while you were going through your inventory. You go out to sell the item, and there are many people with stores and chatrooms open. What is the best way to sell your item? \n Open a chatroom and wait. or Look to see if anyone already wants it. \n 07. While you are waiting, someone is begging for items and Zeny. What should you do? \n Give some of my items and Zeny')
		.addField('Question', '08. By now, you decide to go to the Maze by yourself. But on your way, you run into someone that is lost. What should you do? \n Tell them which way to go. or Guide them to their destination. \n 09. After meeting this lost person, you decide to get back to hunting. Just then, you find that someone is attacking a boss! What should you do? \n Watch, then attack when asked for help. \n 10. You are now very exhausted after your day of hunting. Its time to go back to town. But whats this!? You find an expensive item lying on the floor! What should you do with it? \n Try to find the owner. or Just walk by.')
		.addField('Note', '**After you passed the interview, she will ask you to talk to Demon Hunter (the Guild Receptionist in the same room) for the next test. \n Requirements: You must be an Archer at job level 40 or higher in order to start the quest.**')
		.addField('Location', 'Inside a house located at the northeastern corner of Hugel Town.');
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Hunter Job Quest - Collecting Items')
		.setImage(map2)
		.setColor('#6704d8')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Demon Hunter (Guild Receptionist)', 'hu_in01 (382, 382)')
		.addField('Item Set 1', 'Bill of Birds x 3 \n Skel-Bone x 5 \n Green Herb x 3')
		.addField('Item Set 2', 'Venom Canine x 3 \n Animal Skin x 3 \n Red Herb x 5')
		.addField('Item Set 3', 'Dokebi Horn x 3 \n Piece of Egg Shell x 3 \n Fluff x 10')
		.addField('Item Set 4', 'Yellow Herb x 9 \n Worm Peeling x 9 \n Shell x 9')
		.addField('Item Set 5', 'Tooth of Bat x 3 \n Sticky Mucus x 1 \n Bears Footskin x 1')
		.addField('Item Set 6', 'Yoyo Tail x 1 \n Porcupine Quill x 2 \n Acorn x 1')
		.addField('Item Set 7', 'White Herb x 3 \n Trunk x 5 \n Claw of Desert Wolf x 5 ')
		.addField('Quest Step', 'He will ask you to gather some items for him. Give him the items he wants to pass this test. There are 7 sets of possible items he may assign, see the list above. Once you are done, he ask you to go see the **Guild Master** in Payon Central Palace or the Archer Guide at Payon Village for the final test')
		.addField('Location', 'Inside a house located at the northeastern corner of Hugel Town.');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Hunter Job Quest - Ability Test')
		.setImage(map3)
		.setColor('#6704d8')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Hunter (GuildMaster)', 'payon_in02 (21, 31)')
		.addField('Product(s)', 'Necklace of Wisdom x 1')
		.addField('Quest Step', 'This NPC can be found at 2 possible places but only one will give the test. If you go to the wrong one, she will refer you to the NPC at the other location. The chance is predetermined by which item collection quest you were assigned. \n In this test, you will be warped into a room full of monsters. You will need to kill 4 of those monsters, but not just any 4. You have to kill those that named Job Change Monster. You will have 3 minutes to find and kill the 4 monsters')
		.addField('Quest Step', 'Once you are done, a switch will appear at the center of the room (see here). Click on the switch and an exit will appear in the room (see here). You have to get to the exit in 30 seconds to pass the test. If you get knocked out, get caught in a trap, or run out of time, you will fail the test and have to start over again. \n When you passed the test, talk to the Guild Master again, she will give you a Nicklace of Wisdom as a proof of your success. Take the proof and show it to Hunter Sherin in Hugel, she will change you into a hunter. At this piont, if you are at job level 50 you will get a Hunter Bow, otherwise you will get a Crossbow[2]')
		.addField('Note', 'Note: If you dont have the Nicklace of Wisdom with you for any reason, you will have to start the quest all over again.')
		.addField('Location', 'Case 1: Inside a room at the Archer Guild, where you turned archer. \n Case 2: Center of Payon, NOT the main Palace building but the building at the right side of the Palace. She is in the first room.');
		message.channel.send(embed3);	
	
}

module.exports.help = {
	name: "hunterjobchange"
}