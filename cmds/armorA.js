const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Armor Class A')
		.setColor('#0bc7d1')
		.addField('Original Item	Enchanted Item','Zeny Required	Item Required	Success	NPC')
		.addField('Gemmed Sallet [0]	 Gemmed Sallet [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Bucket Hat [0]	 Bucket Hat [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Memory Book [0]	 Memory Book [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Tights [0]	 Tights [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Legion Plate Armor [0]	 Legion Plate Armor [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Full Plate [0]	 Full Plate [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Thief Clothes [0]	 Thief Clothes [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Greaves [0]	 Greaves [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Coif [0]	 Coif [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Manteau [0]	 Manteau [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Helm [0]	 Helm [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Ninja Suit [0]	 Ninja Suit [1]','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Orc Helm [0]	 Orc Helm [1]','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Ancient Cape [0]	 Ancient Cape [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Monk Hat [0]	 Monk Hat [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Golden Gear [0]	 Golden Gear [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Brooch [0]	 Brooch [1]	','400000z	 Elunium x 1	20%	Seiyablem')
		.addField('Munak Hat [0]	 Munak Hat [1]	','300000z	 Elunium x 1	20%	Seiyablem')
		.addField('Pirate Bandana [0]	 Pirate Bandana [1]	','500000z	 Elunium x 1	10%	Leablem')
		.addField('Black Leather Boots [0]	 Black Leather Boots [1]','500000z	 Elunium x 1	10%	Leablem');
		message.channel.send({embed})
	
}

module.exports.help = {
	name: "judiarmor-a"
}