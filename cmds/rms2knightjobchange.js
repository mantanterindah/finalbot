const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/56.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/65.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/65.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_2.jpg'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/733.gif'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_3.jpg'
const npc5 = 'http://file5.ratemyserver.net/quests/npcs/728.gif'
const map5 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_4.jpg'
const npc6 = 'http://file5.ratemyserver.net/quests/npcs/734.gif'
const map6 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_5.jpg'
const npc7 = 'http://file5.ratemyserver.net/quests/npcs/119.gif'
const map7 = 'http://file5.ratemyserver.net/quests/minimaps/m60010_6.jpg'
const knight = 'http://i298.photobucket.com/albums/mm248/FoolishBob/Ragnarok%20Gif/Knight2.gif'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Knight', {file: knight})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest')
		.setImage(map1)
		.setColor('#d81d04')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Chivalry Captain Herman', 'prt_in (88, 101)')
		.addField('Quest Step', 'Talk to **Chivalry Captain Herman** to sign up. He will tell you to speak to Sir Andrew Syloc for the first test. **Requirements: You must be a Swordsman at job level 40 or higher in order to start.**')
		.addField('Location', 'Northwest corner of Prontera Town (Top Left of the map).');
		message.channel.send(embed1);

	let embed2 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest - First Test - Collect Items')
		.setImage(map2)
		.setColor('#d81d04')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Sir Andrew Syloc', 'prt_in (75, 107)')
		.addField('Ingredient(s)', '**-- -- First Set -- --** \n Elder Pixies Moustache x 5 \n Wing of Red Bat x 5 \n Orcish Voucher x 5 \n Moth Dust x 5 \n Reptile Tongue x 5 \n Mane x 5 \n \n **-- -- Second Set -- --** \n Bug Leg x 5 \n Heart of Mermaid x 5 \n Snails Shell x 5 \n Clam Flesh x 5 \n Old Frying Pan x 5 \n Maneater Blossom x 5')
		.addField('Quest Step', 'He will assign you to collect one of the two sets of items. Just hunt the items and give them to him to pass this part of the quest. After you are done, he will tell to talk to **Chivalry Captain Herman** again and he will inform you about your second test with **Sir James Syracuse.** \n **Note: If you are at job level 50, he will tell you that you can skip this test and move onto the next part. **')
		.addField('Location', 'Inside the Knights Guide');
		message.channel.send(embed2);
	
	let embed3 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest - Second Test - Knight Knowledge Quiz')
		.setImage(map3)
		.setColor('#d81d04')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Sir James Syracuse', 'prt_in (71, 91)')
		.addField('Quest Step', 'There are 8 questions in this quiz. Whenever you get one question wrong, you will have to start all over again. Here are the questions and answers:')
		.addField('Answers', '[Q1] Can you tell me which of these swords is NOT a two handed sword?  [Answer: Flamberge] \n [Q2] What skill listed below is NOT used for attacking an opponent? [Answer: Endure Lv.10] \n [Q3] What spear skill below uses the MOST sp?  [Answer: Spear Stab] \n [Q4] Which of the elements below is strongest against Dark/Undead monsters? [Answer: Holy] \n [Q5] What percentage of your attack speed is regained by learning level 3 cavalry mastery? [Answer: 80%] \n [Q6] If you run into a novice and he asks you to tank for him because hes to lazy to fight on his own, you should.... [Answer: Tell the novice a good place to train] \n [Q7] If youre in a party and your party gets attacked, what would you do? [Answer: Stay in front and protect everyone.] \n [Q8] What do you think is most important to a Knight? [Answer: Honor] \n \n After you passed this part, speak with **Chivalry Captain Herman** and he will direct you to **Sir Windsor** for the third test.')
		.addField('Location', 'Inside the Knights Guide');
		message.channel.send(embed3);

	let embed4 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest - Third Test - Swordsman Ability Test')
		.setImage(map4)
		.setColor('#d81d04')
		.setThumbnail(npc4)
		.setTimestamp()
		.addField('Sir Windsor', 'prt_in (79, 94)')
		.addField('Quest Step', '**-- -- First Room -- --** \n Dustiness x 4 \n Piere x 2 \n Deniro x 2 \n Andre x 2 \n Argos x 2 \n \n **-- -- Second Room -- --** \n Frilldora x 2 \n Desert Wolf x 2 \n Drainliar x 4 \n Anacondaq x 4 \n \n **-- -- Third Room -- --** \n Goblin x 1 \n Goblin x 1 \n Goblin x 1 \n Goblin x 1 \n Goblin x 1 \n Goblin Archer x 1 \n Steam Goblin / Goblin Steamrider x 1')
		.addField('Case', 'Sir Windsor will warp you to the test area. Enter the chat room that says "Knight Test Waiting Room" and you should be warped to the first room shortly. There are 3 rooms in this test, each filled with monsters. The time limit you can spend in each room is 3 minutes, simply kill everything in each room as fast as possible. After each room is cleared you will be warped to the next room. If you are finished with all 3 rooms or you reached the time limit, you will be warped back to the Knights Guide. Simply talk to him again if you failed and need to retake the test. \n When you completed the test, talk to Sir Windsor again for comfirmation. Hell ask to talk to **Chivalry Captain Herman** who will direct you to **Lady Amy Beatris** for the fourth test.')
		.addField('Location', 'Inside the Knights Guide');
		message.channel.send(embed4);
		
	let embed5 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest - Fourth Test - Situational Question Quiz')
		.setImage(map5)
		.setColor('#d81d04')
		.setThumbnail(npc5)
		.setTimestamp()
		.addField('Lady Amy Beatris', 'prt_in (69, 107)')
		.addField('Quest Step', 'She will ask you 10 questions, answer at least 8 question correctly to pass this test. Here are the questions and answers (notice some quetsions has two correct answers):')
		.addField('Answer', '[Q1] Lets say your in Morroc and you want to recruit a party member. What would you do? \n [Answer: Make a chatroom and wait. or Ask if anyone wants to party with a Knight.. ] \n [Q2] Youre in a party with a hunter, a priest, a wizard, a blacksmith, and an assassin. The six of you decide to train in the Pyramids. Your party makes it to the fourth floor of the pyramid, what will you do now? \n [Answer: Scout ahead and make sure its safe for all or Stay in front of the party and move slowly] \n [Q3] A lame-o guy creates a mob right in front of your party and disappears. What would you do? \n [Answer: Look after your partners or Fight hard and help when needed] ')
		.addField('Answer', '[Q4] Somehow you beat the mob. Your party then journeys on and you stumble upon someone who has fainted. This guy begs you to help him, what will you do? \n [Answer: Ask the priest in your party to help.] \n [Q5] You guys have to go to different places so you guys seperate yourselves into smaller groups. During your previous battles, a monster dropped a very valuable item that you picked up. What do you do with it? \n [Answer: Give it to the person that deserves it the most. or Discuss it with the others.]  ')
		.addField('Answer', '[Q6] You decide to go back to Prontera and sell some of the valuble items you picked up. On the road, you see a lot of chatrooms. What would be the best way to sell them? \n [Answer: Create a chatroom to advertise the items. or Go around looking for someone that needs them.] \n [Q7] Someone comes up to you and begs you for money. What would you do? \n [Answer: Tell him a place where its suitable for him to earn money.] \n')
		.addField('Answer', '[Q8] Now your alone and training in a forest. You are happily riding a pecopeco. You run into somone whos lost. What do you do? \n [Answer: Tell her where the exit is. or Bring her to the exit.] \n [Q9] Youre still in the forest but now your busy fighting monsters. You realize that youve run out of healing items and your health is very low. Suddenly a priest appears! What would you do? \n [Answer: Would you please heal me. Ill share the drops with you.] \n [Q10] Your getting tired so you decide to head back to town. On the road back to town, you see a very valuable object. What will you do? \n [Answer: Ask around to see if anyone dropped it. or Leave it there.]  ')
		.addField('Next Step', 'After you passed this part, speak with **Chivalry Captain Herman** and he will direct you to **Sir Edmund** for the fifth test.')
		.addField('Location', 'Inside the Knights Guide');
		message.channel.send(embed5);
		
	let embed6 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest - Fifrth Test - Self Control Test')
		.setImage(map6)
		.setColor('#d81d04')
		.setThumbnail(npc6)
		.setTimestamp()
		.addField('Sir Edmund', 'prt_in (70, 99)')
		.addField('Quest Step', 'In this test, you will be warped to a room with some porings, lunatics, chonchons, spores etc. The point of this test is to see if you can stay calm. You do not have to do anything, simply stay in the room until it annouce the test has been completed.**DO NOT hit / kill any of the monsters in the room, it will auto fail you as soon as you hit on any of the monsters.** The test will last for 4 minutes, so just find something else to do, leave your character afk on screen. \n \n Once you completed the test and got warped out, talk to Sir Edmund again for comfirmation. Hell ask to talk to **Chivalry Captain Herman** who will direct you to **Sir Grey** for the last test.')
		.addField('Location', 'Inside the Knights Guide');
		message.channel.send(embed6);
		
	let embed7 = new Discord.RichEmbed()
		.setTitle('Knight Job Quest - Sixth Test - Personality Test')
		.setImage(map7)
		.setColor('#d81d04')
		.setThumbnail(npc7)
		.setTimestamp()
		.addField('Sir Grey', 'prt_in (87, 90)')
		.addField('Quest Step', 'This test is more like a general interview before you become a knight. You can answer the questions the way you feel that fits your personality. In the end, hell let you pass and ask you to speak to Chivalry Captain Herman where he will change you into a Knight finally. \n You will get 3 Awakening Potions if your job level is below job 50 when you become a knight. If you are job level 50, you will get 7 Awakening Potions.')
		.addField('Location', 'Inside the Knights Guide');
		message.channel.send(embed7);						
	
	
}

module.exports.help = {
	name: "knightjobchange"
}