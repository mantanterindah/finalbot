const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('```diff\nYa kalo punya aja telornya kalo ga punya jangan biar gw aja :\n-1. Heaven Egg\n-2. Baby\n-3. Girl\n-4. Lady```')

	//let sample = new Discord.RichEmbed()
	//	.setTitle('')
	//	.setImage()
	//	.setColor('320ddb')
	//	.setThumbnail()
	//	.setTimestamp()
		//.addField('', '')
		//.addField('', '')
	//	.addField('', '');
		//message.channel.send();

	let heaventobaby = new Discord.RichEmbed()
		.setTitle('Heaven Egg ke Baby')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558336419471294475/heaveneggtobaby.png')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558336353306279946/heavenegg.png')
		.setTimestamp()
		//.addField('', '')
		//.addField('', '')
		.addField('Bahan :', '4 Leaf Clover\nHatching Stone\nGeranium\nLarge Geranium\nMilk\nBabys Pacifier\nSoy Milk\nMotherly Devotion\nMothers Heart\nMotherly Love\nFathers Good Old Days\nFathers Excuse\nPiece of Cloth\nFairys Powder\nMagic Powder');
		//message.channel.send();

	let babytogirl = new Discord.RichEmbed()
		.setTitle('Baby ke Girl')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558336516779278337/babytogirl.png')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558336502602661918/baby.png')
		.setTimestamp()
		//.addField('', '')
		//.addField('', '')
		.addField('Bahan :', '4 Leaf Clover\nFairys Powder\nMotherly Devotion\nMothers Heart\nMotherly Love\nFathers Good Old Days\nFathers Excuse\nPink Ribbon\nRed Ribbon\nOxygen\nAdels Blessing\nSoul of Snow Princess\nSnow Crystal\nBundle of Dreams\nCrystal of Star\nIlluminating Crystal\nMagic Powder\n5 Color String\nCrystal of Nixie\nBlue Crystal\nSolarstone\nMoonstone\nSilver\nGold');
		//message.channel.send();

	let girltolady = new Discord.RichEmbed()
		.setTitle('Girl ke Lady')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558337038764736512/girltolady.png')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558337026286682112/girl.png')
		.setTimestamp()
		//.addField('', '')
		//.addField('', '')
		.addField('Bahan :', '4 Leaf Clover\nFairys Powder\nMotherly Devotion\nMothers Heart\nMotherly Love\nFathers Good Old Days\nFathers Excuse\nPink Ribbon\nRed Ribbon\nOxygen\nAdels Blessing\nSoul of Snow Princess\nSnow Crystal\nBundle of Dreams\nCrystal of Star\nIlluminating Crystal\nMagic Powder\n5 Color String\nCrystal of Nixie\nBlue Crystal\nSolarstone\nMoonstone\nSilver');
		//message.channel.send();

	let ladytovalk = new Discord.RichEmbed()
		.setTitle('Lady to Valk/F.Valk')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558337130900881409/ladytovalk.png')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558337112760516608/lady.png')
		.setTimestamp()
		//.addField('', '')
		//.addField('', '')
		.addField('Bahan :', '4 Leaf Clover\nSoul of Holy Knight\nSoul of Jester\nSoul of Great Mage\nSoul of Swordsman\nBoots of Starlight\nArmor of Starlight(T)\nArmor of Starlight(B)\nHelmet of Starlight\nWagon Drivers Staff\nSoulless Sword\nOrnate Blade\nDefender\nShooting Star');
		//message.channel.send();
		
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
		console.log(collector)
		collector.on('collect', message => {
			if(message.content === '1') {
				message.channel.send(heaventobaby)
			}
			if(message.content === '2') {
				message.channel.send(babytogirl)
			}
			if(message.content === '3') {
				message.channel.send(girltolady)
			}
			if(message.content === '4') {
				message.channel.send(ladytovalk)
			}
			msg.delete()
			return;
		});
	
}

module.exports.help = {
	name: "helpheaven"
}
