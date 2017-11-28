const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Weapon Class A')
		.setColor('#e512e1')
		.addField('Original Item	Enchanted Item', 'Zeny Required	Item Required	Success	NPC')
		.addField('Hunter Bow [0]	Hunter Bow [1]', '500000z	 Oridecon x 2,  Steel x 10	20%	Seiyablem')
		.addField('Survivors Rod [0]	 Survivors Rod [1]', '500000z	 Oridecon x 5,  Steel x 10	20%	Seiyablem')
		.addField('Zweihander [0]	 Zweihander [2]','800000z	 Oridecon x 5,  Steel x 10	20%	Seiyablem')
		.addField('Flamberge [0]	 Flamberge [2]','500000z	 Oridecon x 2,  Steel x 10	20%	Seiyablem')
		.addField('Infiltrator [0]	 Infiltrator [1]','700000z	 Oridecon x 5,  Steel x 10	20%	Seiyablem')
		.addField('Ballista [0]	 Ballista [1]',	'500000z	 Oridecon x 5,  Steel x 10	20%	Seiyablem')
		.addField('Stunner [0]	 Stunner [2]', '500000z	 Oridecon x 2,  Steel x 10	20%	Seiyablem')
		.addField('Berserk [0]	 Berserk [1]', '500000z	 Oridecon x 5,  Steel x 10	20%	Seiyablem')
		.addField('Claymore [0]	 Claymore [2]',	'500000z	 Oridecon x 5,  Steel x 10	20%	Seiyablem')
		.addField('Dragon Killer [0]	 Dragon Killer [2]', '500000z	 Oridecon x 2	20%	Leablem')
		.addField('Katar of Quaking [0]	 Katar of Quaking [3]',	'500000z	 Oridecon x 2	25%	Leablem')
		.addField('Katar of Raging Blaze [0]	 Katar of Raging Blaze [3]', '500000z	 Oridecon x 2	25%	Leablem')
		.addField('Katar of Frozen Icicle [0]	 Katar of Frozen Icicle [3]', '500000z	 Oridecon x 2	25%	Leablem')
		.addField('Katar of Piercing Wind [0]	 Katar of Piercing Wind [3]', '500000z	 Oridecon x 2	25%	Leablem')
		.addField('Golden Mace [1]	 Golden Mace [2]',	'500000z	 Oridecon x 2	20%	Leablem')
		.addField('Oriental Lute [0]	 Oriental Lute [2]', '500000z	 Oridecon x 2	20%	Leablem')
		.addField('Queens Whip [0]	 Queens Whip [2]',	'500000z	 Oridecon x 2	20%	Leablem')
		.addField('Spectral Spear [0]	 Spectral Spear [1]', '500000z	 Oridecon x 2	15%	Leablem')
		.addField('Gae Bolg [0]	 Gae Bolg [2]',	'500000z	 Oridecon x 2	15%	Leablem')
		.addField('Schweizersabel [0]	 Schweizersabel [2]', '500000z	 Oridecon x 2	20%	Leablem');
		message.channel.send({embed})


	
}

module.exports.help = {
	name: "judiweapon-a"
}