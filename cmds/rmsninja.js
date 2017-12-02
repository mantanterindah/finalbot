const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/730.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60008_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/730.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60008_1.jpg'
const npc3 = 'http://file5.ratemyserver.net/quests/npcs/881.gif'
const map3 = 'http://file5.ratemyserver.net/quests/minimaps/m60008_2.jpg'
const npc4 = 'http://file5.ratemyserver.net/quests/npcs/730.gif'
const map4 = 'see step 2'
const ninja = 'http://rosprites.simn.de/crscdb/einstxii/2.gif'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Ninja', { file: ninja})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Ninja Job Quest - From Alberta to Amatsu')
		.setImage(map1)
		.setColor('#1411f4')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Akagi', 'alberta (30, 65)')
		.addField('Quest Step', 'Akagi at the lower left corner of Alberta will give free warp to Amatsu to novice at job level 10. Talk to him if you want a free ride. \n **Requirements: You must be a novice at job level 10 in order to start the quest. **')
		.addField('Location', 'See on Image');
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Ninja Job Quest - Amatsu')
		.setImage(map2)
		.setColor('#1411f4')
		.setThumbnail(npc2)
		.setTimestamp()
		.addField('Cougar Gai', 'que_ng (30, 65)')
		.addField('Quest Step', 'Talk to Cougar Gai to signup for the quest. He will ask you to bring a message to Field Cat Joe in Einbroch.\n After you come back from Einbroch, you will need to give him the above items to finish off the quest and become a Ninja. Be sure to checkout the other NPCs in the Ninja Guide, they are your source for ninja gears. \n How to get to Einbroch: Take the Izlude airship (1200z). Exit at Yuno. go downstair into the terminal, talk with the Airport Staff to take the airship to Einbroch. Exit at Einbroch.')
		.addField('Location', 'Inside a house near the center of Amatsu Town. It looks like an empty house when you got in, you have to get pass the fake wall to get to the real Ninja Guide.');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Ninja Job Quest - Einbroch')
		.setImage(map3)
		.setColor('#1411f4')
		.setThumbnail(npc3)
		.setTimestamp()
		.addField('Suspicious Guy', 'Einbroch (184, 194)')
		.addField('Quest Step', 'He will ask you to help him gather the above items then he will help you find **Field Cat Joe**. After you show him the items, he will reveal himself as the person you are looking for. He will give you a reply, take the items off you and warps you back to Amatsu. \n **Note: It is best to collect double the amount of what he asked for since Cougar Gai will ask you to bring him the same thing later.**')
		.addField('Ingredient(s)', 'Phracon x 1 \n Cyfar x 5')
		.addField('Location', 'On top of Einbroch Tower, you have to pay 10z to the ground NPC(s) to get to the top of the tower.');
		message.channel.send(embed3);

	let embed4 = new Discord.RichEmbed()
		.setTitle('Ninja Job Quest - Amatsu')
		//.setImage(map4)
		.setColor('#1411f4')
		.setThumbnail(npc4)
		.setTimestamp()
		.addField('Cougar Gai', 'see step 2')
		.addField('Ingredient(s)', 'Phracon x 1 \n Cyfar x 5')
		.addField('Product(s)', 'Asura [2] x 1')
		.addField('Quest Step', 'Now you are supposed to go back to **Cougar Gai**. As mentioned above you have to bring him the same set of items Joe asked for. So just give him the items and be ready to be transformed into a Ninja! He will give you an Ashura[2] to start off as a Ninja.');
		message.channel.send(embed4);		
}

module.exports.help = {
	name: "ninjajobchange"
}