const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/709.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60025_0.jpg'
const sn = 'http://img.ragnarokonline.com/event/super_novie_2.jpg'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Super Novice', {file: sn})

	let embed = new Discord.RichEmbed()
		.setTitle('Super Novice Job Quest - Item Collecting')
		.setImage(map1)
		.setColor('#f41145')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Tozel', 'aldeba_in (223, 167)')
		.addField('Ingredient(s)', 'Sticky Mucus x 30 \n Resin x 30 ')
		.addField('Product(s)', 'Pantie x 1 ')
		.addField('Quest Step', 'Give him the items he asks from you and he will change you into a supernovice. Pretty straight forward. \n At the time of the job change, you will get a Pantie as a gift. \n **Requirements: You must be a novice at base level 45 or higher in and having a job lvl 10 to become a supernovice**')
		.addField('Location', 'Southwest of Al De Baran');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "supernovicejobchange"
}