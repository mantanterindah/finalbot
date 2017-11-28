const Discord = module.require('discord.js')

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Armor Class C')
		.setColor('#130cd1')
		.addField('Original Item	Enchanted Item','Zeny Required	Item Required	Success	NPC')
		.addField('Mantle [0]	 Mantle [1]','200000z	 Steel x 3	25%	Seiyablem')
		.addField('Coat [0]	 Coat [1]','200000z	 Steel x 3	25%	Seiyablem')
		.addField('Circlet [0]	 Circlet [1]','200000z	 Steel x 3	25%	Seiyablem')
		.addField('Biretta [0]	 Biretta [1]','200000z	 Steel x 3	25%	Seiyablem')
		.addField('Sunflower [0]	 Sunflower [1]','100000z	 Steel x 3	25%	Leablem')
		.addField('Ph.D Hat [0]	 Ph.D Hat [1]','200000z	 Steel x 3	25%	Leablem')
		.addField('Big Ribbon [0]	 Big Ribbon [1]','200000z	 Steel x 5	25%	Leablem')
		.addField('Boys Cap [0]	 Boys Cap [1]','200000z	 Steel x 5	25%	Leablem');
		message.channel.send({embed})
}

module.exports.help = {
	name: "judiarmor-c"
}