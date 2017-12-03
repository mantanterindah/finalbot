const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/731.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/63.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/63.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_1.jpg'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/69.gif'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_3.jpg'
const npc5 = 'http://file5.ratemyserver.net/quests/npcs/725.gif'
const map5 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_4.jpg'
const npc6 = 'http://file5.ratemyserver.net/quests/npcs/734.gif'
const map6 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_5.jpg'
const npc7 = 'http://file5.ratemyserver.net/quests/npcs/59.gif'
const map7 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_6.jpg'
const npc8 = 'http://file5.ratemyserver.net/quests/npcs/118.gif'
const map8 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_7.jpg'
const npc9 = 'http://file5.ratemyserver.net/quests/npcs/726.gif'
const map9 = 'http://file5.ratemyserver.net/quests/minimaps/m60015_8.jpg'
const blacksmith = 'http://www.playragnarok.com/images/gameguide/classes/index/index_21_blacksmith_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('BlackSmith', {file: blacksmith})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Registration')
		.setImage(map1)
		.setColor('#0bef3d')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Guildsman Altiregen', 'ein_in01 (18, 28)')
		.addField('Quest Step', 'Talk to him to sign up for the quest. He will assign you your first test, which is to go help **Geshupenschte** in Einbech. \n How to get to Einbroch: Take the Izlude airship (1200z). Exit at Yuno. Go downstair into the terminal, talk with the Airport Staff to take the airship to Einbroch. Exit the airship as it arrive at Einbroch. \n **Requirements: You must be a Merchant at job level 40 or higher in order to start the quest.**')
		.addField('Location', 'Southeastern corner of Einbroch The building has a sign says "Black Smith" on the top');
		message.channel.send(embed1);

	let embed2 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Geshupenschte Part 1: Q & A')
		.setImage(map2)
		.setColor('#0bef3d')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Geshupenschte', 'ein_in01 (201, 27)')
		.addField('Quest Step', 'How to get to Einbech from Einbroch? Simply talk to the Train Station Staff located at Northwestern of Einbroch. You will have to pay 200z fees to take the train to Einbech. (see screenshots) \n There are 3 parts to Geshupenschtes test. First part is question and answer. Each question worth 10 points, you must get perfect for the first time to pass. If you failed the first time, retake the test and get a score of 90 or more will do. There are 2 possible set of questions you should expect, here are the questions and answers: ')
		.addField('Quiz Question Set 1', '**01. Which town and local item dont match?** \n **Alberta - Swordmace** \n **02. What does the smith skill Hammerfall do** \n **Stun** \n **03. What is a merchant not good at?** \n **Running Fast** \n **04. Where do you buy Blue Gems** \n **Geffen** \n **05. Where is the Geffen Tool Shop from the tower?** \n **8 o clock**')
		.addField('Quiz Question Set 1', '**06. What weapon cant be used by merchants?** \n **Bible** \n **07. Which has the highest def?** \n **Mink Coat** \n **08. For Level 3 weapons, what is the Safe limit for upgrading?** \n **+5** \n **09. 	What can you make with Trunks ?** \n **Sakkat** \n **10. What is the most important to merchants!?** \n **All answers are correct** ')
		.addField('Quiz Question Set 2', '**01. Which town and local item is mismatched?** \n **Aldebaran - Hammer** \n **02. How much does Jellopy sell for?** \n **3z** \n **03. Whats necessary to make a shop?** \n **Must have cart** \n **04. Where is the merchant guild located?** \n **Alberta** \n **05. Where is the Morroc Weapon Shop from the center?** \n **5 o clock**')
		.addField('Quiz Question Set 2', '**06. What cant a merchant equip?** \n **Claymore** \n **07. What has the highest defense?** \n **Mink Coat** \n **08. For Level 3 weapons, what is the Safe limit for upgrading?** \n **	+5** \n **09. Which monster doesnt drop iron ore** \n **Anolian** \n **10. What is the most important to merchants?!** \n **All answers are correct**')
		.addField('Location', 'Inside a building located at the center of Einbech');
		message.channel.send(embed2);
		
	let embed3 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Geshupenschte Part 2 & 3: Collecting Items + Delivery')
		.setImage(map3)
		.setColor('#0bef3d')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Geshupenschte', 'ein_in01 (201, 27)')
		.addField('Item Set 1', 'Ingredient(s) \n Steel x 2 \n Rotten Bandage x 1 \n Blue Gemstone x 2 \n Arc Wand [1] x 1 \n **-- Set 1 Delivery --** \n Product(s) \n Arc Wand [1] x 1')
		.addField('Item Set 2', 'Ingredient(s) \n Star Dust x 2 \n Skel-Bone x 2 \n Zargon x 1 \n Gladius [2] x 1 \n **-- Set 2 Delivery --** \n Product(s) \n Gladius [2] x 1')
		.addField('Item Set 3', 'Ingredient(s) \n Coal x 2 \n Shell x 2 \n Red Blood x 2 \n Tsurugi [1] x 1 \n **-- Set 3 Delivery --** \n Product(s) \n Tsurugi [1] x 1')
		.addField('Item Set 4', 'Ingredient(s) \n Iron Ore x 8 \n Trunk x 1 \n Blue Gemstone x 2 \n Arbalest [1] x 1 \n **-- Set 4 Delivery --** \n Product(s) \n  Arbalest [1] x 1')
		.addField('Item Set 5', 'Ingredient(s) \n Iron Ore x 8 \n Green Herb x 20 \n Animal Skin x 2 \n Morning Star [1] x 1 \n **-- Set 5 Delivery --** \n Product(s) \n Morning Star [1] x 1')
		.addField('Quest Step', 'In this part of the test, he will ask you to collect a set of items. Just bring him the items he asked to pass the test. There are five sets of possible items, all listed above. In each set, there is one piece of weapon. You have to get that weapon from the store, giving him the same weapon but with an extra slot will not work. \n After you give him the material, he will work on the material right away and then give you the resulting weapon. He then ask you to deliver it to one of the NPCs:')
		.addField('Quest Step', 'Arc Wand goes to Geffens Baisulitst\nGladius goes to Morrocs Wickebin\nTsurugi goes to Lighthalzens Krongast - use Airship\nArbalest goes to Payons Tilpitz\nMorning Star goes to Hugels Bismarc - use Airship')
		.addField('Quest Step', 'See below steps for locations of each.\nFor each delivery, you will get a receipt from the NPC. Show the receipt to Geshupenschte to pass this part of the test. After that, he will direct you to go back to Guildsman Altiregen. Guildsman Altiregen will ask you to find Mitmayer for the last test.')
		.addField('Note', '**Note: If for any reason you dont have the receipt with you, you will have to start the whole quest all over again.**')
		.addField('Location', 'Inside a building located at the center of Einbech');
		message.channel.send(embed3);
		
	let embed4 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Delivery to Baisulitst in Geffen')
		.setImage(map4)
		.setColor('#0bef3d')
		.setThumbnail(npc4)
		.setTimestamp()
		.addField('Baisulitst', 'Geffen (46, 164)')
		.addField('Ingredient(s) Arc Wand [1] x 1', 'Product(s) Voucher x 1')
		.addField('Quest Step', 'Give her the item, she will issue you a receipt. Take that receipt back to **Geshupenschte.**')
		.addField('Location', '11 o clock position of Geffen Town Just a little to the left of the Mage Guild Building');
		message.channel.send(embed4);
		
	let embed5 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Delivery to Wickebine in Morroc')
		.setImage(map5)
		.setColor('#0bef3d')
		.setThumbnail(npc5)
		.setTimestamp()
		.addField('Wickebine', 'Morocc (27, 112)')
		.addField('Ingredient(s) Gladius [2] x 1', 'Product(s) Voucher x 1 ')
		.addField('Quest Step', 'Give her the item, she will issue you a receipt. Take that receipt back to **Geshupenschte.**')
		.addField('Location', 'A little south from the West Exit of Morroc Town');
		message.channel.send(embed5);
		
	let embed6 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Delivery to Krongast in Lighthalzen')
		.setImage(map6)
		.setColor('#0bef3d')
		.setThumbnail(npc6)
		.setTimestamp()
		.addField('Krongast', 'Lighthalzen (209, 80)')
		.addField('Ingredient(s) Tsurugi [1] x 1', 'Product(s)  Voucher x 1')
		.addField('Quest Step', 'Give her the item, she will issue you a receipt. Take that receipt back to **Geshupenschte.**')
		.addField('Location', 'Lower right of Lighthalzen, near to the "chopping down axe" structure building.');
		message.channel.send(embed6);
		
	let embed7 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Delivery to Tilpitz in Payon')
		.setImage(map7)
		.setColor('#0bef3d')
		.setThumbnail(npc7)
		.setTimestamp()
		.addField('Tilpitz', 'payon (214, 79)')
		.addField('Ingredient(s) Arbalest [1] x 1', 'Product(s) Voucher x 1')
		.addField('Quest Step', 'Give her the item, she will issue you a receipt. Take that receipt back to **Geshupenschte.**')
		.addField('Location', '5 o clock position of Payon He stands in front of a gate');
		message.channel.send(embed7);
		
	let embed8 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Delivery to Bismarc in Hugel')
		.setImage(map8)
		.setColor('#0bef3d')
		.setThumbnail(npc8)
		.setTimestamp()
		.addField('Bismarc', 'Hugel (168, 183)')
		.addField('Ingredient(s) Morning Star [1] x 1', 'Product(s) Voucher x 1')
		.addField('Quest Step', 'Give her the item, she will issue you a receipt. Take that receipt back to **Geshupenschte.**')
		.addField('Location', 'Just a little Northwest from the Airship');
		message.channel.send(embed8);

	let embed9 = new Discord.RichEmbed()
		.setTitle('Blacksmith Job Quest - Last Q & A Test')
		.setImage(map9)
		.setColor('#0bef3d')
		.setThumbnail(npc9)
		.setTimestamp()
		.addField('Mitmayer', 'ein_in01 (24, 41)')
		.addField('Quest Step', 'This is a quiz about how well you know metals and the blacksmith class. It consist of 5 questions, each question worth 20 points. You must get a score of 80 or more to pass. There are 3 possible sets of questions. Here are the questions and answers:')
		.addField('Quiz Question Set 1', '**01. Which skill is needed for discount?**\n**Enlarge Weight Lv 3**\n**02. What effect does hammerfall have?**\n**Stun**\n**03. How much zeny is taken when Mammonite 10 is used?**\n**1,000z**\n**04. How much money is saved with max discount??**\n**24 %**\n**05. How much can you earn with max overcharge?**\n**24 %**\n')
		.addField('Quiz Question Set 2', '**01. Which monster drops steel?**\n**Skeleton Worker**\n**02. What can you make with Red Bloods?**\n**Flame Heart**\n**03. Which ore do you have the most of in storage?**\n**Red Blood or Green Live or Crystal Blue**\n**04. What kind of monsters are weak against wind weapons?**\n**Water**\n**05. How many irons are needed to make steel?**\n**5**')
		.addField('Quiz Question Set 3', '**01. What do you do when you find a person in distress?**\n**Ask what they need or Talk for a bit**\n**02. Where do you learn change cart?**\n**Alberta**\n**03. Geffen tower is the center, where is the [old] Blacksmith guild?**\n**5oclock**\n**04. Which town has the most smiths?**\n**Geffen [used to be]**\n**05. Which stat affect forge?**\n**DEX**')
		.addField('Quest Step', '**If you pass the test, she will give you a Hammer of Blacksmith as proof of success. You must show it to Guildsman Altiregen in order for him to change you into a Blacksmith. He will also give you 5 steels if your job level is below 50 (job level 50 players get 10 steels).**')
		.addField('Note', '**Note: If you loose the Hammer of Blacksmith, you will have to start the quest all over again.**')
		.addField('Location', 'In the area behind Guildsman **Altiregen** Just walk a few steps further into the room');
		message.channel.send(embed9);							
	
}

module.exports.help = {
	name: "blacksmithjobchange"
}