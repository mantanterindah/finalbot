const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Weapon Class S')
		.setColor('#2bbcae')
		.addField('Original Item	Enchanted Item','Zeny Required	Item Required	Success	NPC')
		.addField('Poison Knife [0]	 Poison Knife [2]','1000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Ice Pick [0]	 Ice Pick [1]','2000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Sucsamad [0]	 Sucsamad [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Ginnungagap [0]	 Ginnungagap [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Cutlus [0]	 Cutlus [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Crescent Scythe [0]	 Crescent Scythe [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Survivors Rod [0]	 Survivors Rod [1]','2000000z	 Oridecon x 5,  Steel x 10	10%	Seiyablem')
		.addField('Zephyrus [0]	 Zephyrus [3]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem')
		.addField('Mailbreaker [0]	 Mailbreaker [3]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem')
		.addField('Dragon Slayer [0]	 Dragon Slayer [2]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem')
		.addField('Swordbreaker [0]	 Swordbreaker [3]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem')
		.addField('Assassin Dagger [0]	 Assassin Dagger [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem')
		.addField('Grand Cross [0]	 Grand Cross [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem')
		.addField('Executioner [0]	 Executioner [1]','1000000z	 Oridecon x 5,  Steel x 10	10%	Leablem');
		message.channel.send({embed})


}

module.exports.help = {
	name: "judiweapon-s"
}