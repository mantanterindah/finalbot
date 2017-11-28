const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Armor Class B')
		.setColor('#d10b29')
		.addField('Original Item	Enchanted Item','Zeny Required	Item Required	Success	NPC')
		.addField('Mirror Shield [0]	 Mirror Shield [1]','250000z	 Steel x 5	20%	Seiyablem')
		.addField('Chain Mail [0]	 Chain Mail [1]','250000z	 Steel x 5	20%	Seiyablem')
		.addField('Saints Robe [0]	 Saints Robe [1]	','300000z	 Steel x 5	20%	Seiyablem')
		.addField('Silk Robe [0]	 Silk Robe [1]	','300000z	 Steel x 5	20%	Seiyablem')
		.addField('Boots [0]	 Boots [1]	','300000z	 Steel x 5	20%	Seiyablem')
		.addField('Shoes [0]	 Shoes [1]	','300000z	 Steel x 5	20%	Seiyablem')
		.addField('Muffler [0]	 Muffler [1]	','300000z	 Steel x 5	20%	Seiyablem')
		.addField('Guard [0]	 Guard [1]	','300000z	 Steel x 5	20%	Seiyablem')
		.addField('Buckler [0]	 Buckler [1]	','	300000z	 Steel x 5	20%	Seiyablem')
		.addField('Shield [0]	 Shield [1]	','250000z	 Steel x 5	20%	Seiyablem')
		.addField('Bongun Hat [0]	 Bongun Hat [1]	','250000z	 Steel x 5	20%	Seiyablem')
		.addField('Skull Ring [0]	 Skull Ring [1]	','300000z	 Steel x 5	20%	Leablem')
		.addField('High Heels [0]	 High Heels [1]	','300000z	 Steel x 5	20%	Leablem');
		message.channel.send({embed})
	
}

module.exports.help = {
	name: "judiarmor-b"
}