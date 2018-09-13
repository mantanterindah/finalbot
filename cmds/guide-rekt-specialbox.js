const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ...')

	let embed = new Discord.RichEmbed()
		.setTitle('Special Box')
		//.setImage()
		.setColor('#0e1acc')
		//.setThumbnail()
		.setTimestamp()
		.addField('Attendance Box', 'Muffler [1]\nMink Coat [1]\nJacket [1]\nFormal Suit [1]\nManteau [1]\nShoes [1]\nSandals [1]\nBoots [1]\nGuard [1]\nBuckler [1]\nShield [1]\nHood [1]\nNinja Suit [1]\nThief Clothes [1]\nDamascus [2]\nInfiltrator\nTwo Handed Sword [2]\nBloody Axe\nWizardy Staff\nGakkung [2]\nChain [3]\nCostume : Hopping Rabbit\nCostume : Black Khalitzburg Knight Helm\nCostume : Baby Penguin\nCostume : Twin Margaret\nCostume : Cat Ears Cape\nCostume : Water Spell Caster')
		//.addField('', '')
		.addField('Monthly September Box', 'Non Rare\nCostume Beanie\nCostume Rainbow Eggshell\nCostume Panda Hat\nCostume Kitty Band\nCostume Baseball Cap\nCostume Yellow Hat\nCostume Monk Crown\n\nRare\nCostume Gryphon Hairband\nCostume Monochrome Hat\nCostume Gold Tones\nCostume Blessing of Angel\n\nVery Rare\nCostume Archangel Wings\nCostume Feather Fluttering');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-specialbox"
}