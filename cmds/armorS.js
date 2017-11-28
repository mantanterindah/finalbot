const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Armor Class S')
		.setColor('#d1cd0b')
		.addField('Original Item	Enchanted Item','Zeny Required	Item Required	Success	NPC')
		.addField('Majestic Goat [0]	 Majestic Goat [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Spiky Band [0]	 Spiky Band [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Bone Helm [0]	 Bone Helm [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Corsair [0]	 Corsair [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Crown [0]	 Crown [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Tiara [0]	 Tiara [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Sphinx Hat [0]	 Sphinx Hat [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Robe of Cast [0]	 Robe of Cast [1]','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Earring [0]	 Earring [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Ring [0]	 Ring [1]','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Bow Thimble [0]	 Bow Thimble [1]	','2000000z	 Elunium x 2	10%	Seiyablem')
		.addField('Mage Coat [0]	 Mage Coat [1]	','1000000z	 Elunium x 1	10%	Leablem')
		.addField('Holy Robe [0]	 Holy Robe [1]	','1000000z	 Elunium x 1	5%	Leablem')
		.addField('Sacred Mission [0]	 Sacred Mission [1]	','1000000z	 Elunium x 1	5%	Leablem')
		.addField('Undershirt [0]	 Undershirt [1]	','1000000z	 Elunium x 1	5%	Leablem')
		.addField('Pantie [0]	 Pantie [1]	','1000000z	 Elunium x 1	5%	Leablem');
		message.channel.send({embed})
	
}

module.exports.help = {
	name: "judiarmor-s"
}