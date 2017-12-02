const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/901.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60007_0.jpg'
const npc2 = 'http://file5.ratemyserver.net/quests/npcs/866.gif'
const map2 = 'http://file5.ratemyserver.net/quests/minimaps/m60007_1.jpg'
const gun = 'https://orig00.deviantart.net/04c2/f/2008/040/3/6/ragnarok_icon___gunslinger_by_specterfreakz.gif'
const related = 'http://ratemyserver.net/quest_db.php?type=70000&qid=70004'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply('Gunslinger', {file: gun})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Gunslinger Job Quest - Getting Started')
		.setColor('#f4ed11')
		.setThumbnail(npc1)
		.setImage(map1)
		.addField('Master Miller(Name might be different)', 'que_ng (152, 167)')
		.addField('Quest Step', 'Talk to Master Miller (Green dot, in front of the entrance) to signup for the job quest. He will ask you to find another NPC in Payon. After you changed to a Gunslinger, enter the portal marked Red on the interior map to get access to the guns and ammunition sellers. How to get to Einbroch: Take the Izlude airship (1200z). Exit at Yuno. Go downstair into the terminal, talk with the Airport Staff to take the airship to Einbroch. Exit at Einbroch. **Requirements: You must be a novice at job level 10 in order to start the quest.**')
		.addField('located', 'nside a building located at the center of Einbroch, City of Steel.')
		.addField('Related Quest Juno Airship', related);
		message.channel.send(embed1);

	let embed2 = new Discord.RichEmbed()
		.setTitle('Gunslinger Job Quest - Payon')
		.setColor('#f4ed11')
		.setThumbnail(npc2)
		.setImage(map2)
		.setTimestamp()
		.addField('The Wise Bull Horn (Name might be different)', 'payon (184, 65)')
		.addField('Ingredient(s)', ' \n Fluff x 3 \n Zargon x 3 \n Rainbow Shell x 3 \n Shell x 10 \n Green Herb x 3 \n Trunk x 1 \n Milk x 1 ')
		.addField('Quest Step', 'He will ask you to give him some items (listed above), there is a hidden item he didnt mention. After you gave him the items he requested, keep talking to him until he mention that he needed Milk. So, give him a milk then you can go back to the Gunslinger Guide and get the job change finally.')
		.addField('located', 'From Payons South Entrance, go across the bridge and then keep walking East.');
		message.channel.send(embed2);	
}

module.exports.help = {
	name: "gunslingerjobchange"
}