const Discord = module.require('discord.js')

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setTitle('Weapon Class B')
		.setColor('#e512e1')
		.addField('Chain [2] => Chain [3]', 'Zeny: 300k | Require: Phracon 10x | Chance:20% | Npc: Seiyablem')
		.addField('Gladius [2] => Gladius [3]', 'Zeny: 300k | Require:  Oridecon x 1,  Steel x 5 | Chance:20% | Npc: Seiyablem')
		.addField('Gakkung [1] => Gakkung [2]', 'Zeny: 300k | Require: Oridecon x 2,  Steel x 5	 | Chance:20% | Npc: Seiyablem')
		.addField('Pike [3] => Pike [4]', 'Zeny: 200k | Require: Phracon 10x | Chance:20% | Npc: Seiyablem')
		.addField('Haedonggum [1] => Haedonggum [2]', 'Zeny: 300k | Require: Oridecon x 2,  Steel x 5 | Chance:20% | Npc: Seiyablem')
		.addField('Lute [2] => Lute [3]', 'Zeny: 300k | Require: Emveretarcon 10x | Chance:20% | Npc: Seiyablem')
		.addField('Wire Whip [2] => Wire Whip [3]', 'Zeny: 300k | Require: Emveretarcon 10x | Chance:20% | Npc: Seiyablem')
		.addField('Waghnak [3] => Waghnak [4]', 'Zeny: 300k | Require: Phracon 10x | Chance:20% | Npc: Seiyablem')
		.addField('Arbalest [1] => Arbalest [2]', 'Zeny: 300k | Require:  Oridecon x 2,  Steel x 5 | Chance:20% | Npc: Seiyablem')
		.addField('Orcish Axe [0] => Orcish Axe [4]', 'Zeny: 300k | Require:  Oridecon x 1 | Chance:25% | Npc: Leablem')
		.addField('Scimitar [2] => Scimitar [3]', 'Zeny: 300k | Require: Oridecon x 1 | Chance:25% | Npc: Leablem')
		.addField('Spike [0] => Spike [2]', 'Zeny: 300k | Require: Oridecon x 1 | Chance:20% | Npc: Leablem');
		message.channel.send({embed})		

}

module.exports.help = {
	name: "judiweapon-b"
}
// Oridecon x 1	25%	Leablem
// Arbalest [1]	 Arbalest [2]	300000z	 Oridecon x 2,  Steel x 5	20%	Seiyablem
