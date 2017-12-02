const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/86.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60005_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/83.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60005_0.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/115.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60005_2.jpg'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/47.gif'
const map4 = 'http://file5.ratemyserver.net/quests/minimaps/m60005_3.jpg'
const npc5 = 'http://file5.ratemyserver.net/quests/npcs/86.gif'
const map5 = 'http://file5.ratemyserver.net/quests/minimaps/m60005_4.jpg'
const npc6 = 'http://file5.ratemyserver.net/quests/npcs/115.gif'
const map6 = 'http://file5.ratemyserver.net/quests/minimaps/m60005_5.jpg'
const merchant = 'https://tcrf.net/images/9/9d/RO-unused-hairanimation-merchant-m-attacking1.gif'


module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Merchant', {file: merchant})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Merchant Job Quest - Getting Started')
		.setColor('#f4ed11')
		.setThumbnail(npc1)
		.setImage(map1)
		.addField('Chief Mahnsoo', 'alberta_in (53, 43)')
		.addField('Quest Step', 'Simply talk to ** Chief Mahnsoo ** to get the quest started. You will need to pay ** 1000z ** up front or pay 500z now and another 500z after you finish the quest.After that, he will ask you to retrieve a product from the warehouse and deliver it to one of the three designations. You must remember (write it down) the serial number he issue and retrieve the correct product from the warehouse. The warehouse NPC will still give you a product even if you give the wrong serial number, however the receiver will not accept the product in that case.Once you successfully delivered the product, go back to Alberta and give the voucher to the warehouse NPC. Then you can return to him and he will change to you a merchant. ** Requirements: You must be a novice at job level 10 in order to start the quest **')
		.addField('Location', 'The Merchant Guild is located in Alberta, in a building at the lower left corner of the map.');
		message.channel.send(embed1)

	let embed2 = new Discord.RichEmbed()
		.setTitle('Merchant Job Quest - Warehouse')
		.setColor('#f4ed11')
		.setThumbnail(npc2)
		.setImage(map2)
		.addField('Merchant Guildsman', 'alberta_in (28, 29)')
		.addField('Quest Step', 'This is where you should get your product from. You must give him the correct serial number, he will accept any number as mentioned previously. Here is a list of possible designation and serial numbers:')
		.addField('Kafra Worker in the Former Swordman Association in Prontera', '(Serial #: 2485741 or 2328137)')
		.addField('Man in Mage Guild in Geffen', 'Serial  2989396 or 2191737')
		.addField('Java Dullihan, the Dyermaker in Morroc', 'Serial  3012685 or 3487372')
		.addField('Kafra worker in Byalan island, Chief Mahnsoo will also throw in a personal letter.', 'Serial  3318702 or 3543625')
		.addField('Case', 'If in any case you drop / lost your del box, talk to him again without a del box in your inventory. He will tell you to talk to Chief Mahnsoo and start the test all over again.')
		.addField('Location', 'The room located south in the Merchant Guild.');
		message.channel.send(embed2)

	let embed3 = new Discord.RichEmbed()
		.setTitle('Merchant Job Quest - Prontera Kafra')
		.setColor('#f4ed11')
		.setThumbnail(npc3)
		.setImage(map3)
		.addField('Kafra', 'Prontera (248, 42)')
		.addField('Ingredient(s)', '**Delivery Box x 1 or  Voucher x 1 **')
		.addField('Case', 'If you are assigned to deliver your product to Kafra Worker in the Former ** Swordman Association in Prontera ** this is your designation. She is standing in front of the door of the former Swordman Association (old swordman guild in Beta 2001~). She will give you a voucher as receipt if you delivered the correct product.')
		.addField('Location', 'Southeast corner of Prontera Town.');
		message.channel.send(embed3)
		
	let embed4 = new Discord.RichEmbed()
		.setTitle('Merchant Job Quest - Man in Mage Guild in Geffen')
		.setColor('#f4ed11')
		.setThumbnail(npc4)
		.setImage(map4)
		.addField('Guild Staff', 'geffen_in (155, 122)')
		.addField('Ingredient(s)', '**Delivery Box x 1 or  Voucher x 1 **')
		.addField('Location', 'Inside the Mage Guild, that is at 11 oclock position at the town of Geffen.');
		message.channel.send(embed4)
	
	let embed5 = new Discord.RichEmbed()
		.setTitle('Merchant Job Quest - Dyers Student')
		.setColor('#f4ed11')
		.setThumbnail(npc5)
		.setImage(map5)
		.addField('Dyers Student', 'morocc_in (140, 102)')
		.addField('Ingredient(s)', '**Delivery Box x 1 or  Voucher x 1 **')
		.addField('Location', 'Inside a building located at Northeast of Morroc Town.');
		message.channel.send(embed5)			
	
}

module.exports.help = {
	name: "merchantjobchange"
}