const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send('```diff\nKetik Angkanya Aja Bossqu kalo pingin liat\n-1. Seed->Bud\n-2. Bud->MomoJr/FlowerBud/Shuck\n-3. MomoJr->WarMomo/KingMomo/PrettyMomo\n-4.FlowerBud->Rose/SunFlower\n-5.Shuck->Beanie/PrettyBeanie/WarBeanie\n-6. WarMomo\n-7. KingMomo\n-8. PrettyMomo\n-9. Rose\n-10. SunFlower\n-11. Beanie\n-12. PrettyBeanie\n-13. WarBeaniea```')

	//let embed = new Discord.RichEmbed()
	//	.setTitle('')
		//.setImage('')
	//	.setColor('#320ddb')
	//	.setThumbnail(bot.user.avatarURL)
	//	.setTimestamp()
	//	.addField('Bahan :','');
	
	///Stage1////
	let seedbud = new Discord.RichEmbed()
		.setTitle('Seed Ke Bud')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554352870573735939/SPOILER_seedbud.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clovern\nLeaf\nRespect\nOxygen\nHydrogen\nCarbon\nDyes\nSap\nGeranium\nLarge Geranium\nPea Shell\nPea\nKidney Bean\nSoy Milk\nHerb\nLog\nVegetable Oil\nStem of Radish\nMulberry Leaf\nWhite Glove\nRadish\nRotten\nLeaf \nStem of Radish');
		//.addField('','')
		//.addField('','')
	//Stage 2/////////////////////////////////////////////
	let budmomojr = new Discord.RichEmbed()
		.setTitle('Bud Ke MomoJr')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554352864412041273/SPOILER_budmomojr.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clovern\nOxygen\nRadish\nPiece of Radish\nMoo Moo Staff\nFiber Optics\nVegetable Oil\nMoo Moos Headset\nStem of Radish\nCool Water Kimchee\nSap\nMagic Powder\nHeros Claw\nLarge Geranium\nPink Ribbon\nCrystal\nCotton Tunic(T)\nEnchanted Cotton Tunic(T)\nCotton Tunic(B)\nEnchanted Cotton Tunic(B)\nArmor Pieces\nMace');

	let budflowerbud = new Discord.RichEmbed()
		.setTitle('Bud ke Flower Bud')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554352838340378625/SPOILER_budflowerbud.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nOxygen\nFairys Powder\nSoul of Snow Princess\nSnow Crystal\nPink Ribbon\nRed Ribbon\nDyes\nBlue Dye\nAdels Blessing\nRed Dye\nSpore\nYeast\nSilver\nGold\nPiece of Cloth\n5 Color String\nCrystal of Star\nIlluminating Crystal\nMagic Powder\nCrystal of Nixie\nBlue Crystal\nSolarstone');

	let budshuck = new Discord.RichEmbed()
		.setTitle('Bud Ke Shuck')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554352850948456504/SPOILER_budshuck.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nOxygen\nPea Shell\nPea\nKidney Bean\nSoy Milk\nRespect\nRotten Leaf\nScrubber\nWhite Glove\nLeaf\nHerb\nLog\nRod\nStem of Radish\nDumb Knuckle\nDyes\nSap\nVine\nMulberry\nLeaf\nMoonstone');
	//STAGE 3////////////////////////////////////

	let momojrwarmomokingmomoprettymomo = new Discord.RichEmbed()
		.setTitle('MomoJr ke WarMomo/KingMomo/PrettyMomo')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554352834808643615/SPOILER_momojrwarmomo.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nRadish\nMoo Moo Staff\nMans Romance\nMans Senility\nFathers Good Old Days\nFathers Excuse\nPharaohs Curse\nIce\nIce Crystal\nCold Heart\nBowl\nShark Shank\nCool Guys Helmet\nCool Guys Stick');
	
	let flowerbudrosesunflower = new Discord.RichEmbed()
		.setTitle('FlowerBud Ke Rose/SunFlower')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554354048325779463/flowerbudbranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nSnow Crystal\nGolden Fur\nGold\nSolarstone\nPlatinum\nVegetable Oil\nOgres Safety Helmet\nKnights Crest\nEgg\nPiyas Unfertilized Egg\nGold Carp\nDusk Armor(T)\nDusk Shield\nDusk Armor(B)\nDusk Boots\nDusk Helmet\nYellow Iron\nGolden Plunger\nBell\nCactus Flower');

	let shuckbeaniewarbeanieprettybeanie = new Discord.RichEmbed()
		.setTitle('Shuck Ke WarBeanie/Beanie/PrettyBeanie')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554354068034945034/shuckbranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nPea Shell\nPea Shell\nPea\nKidney Bean\nSoy Milk\nRespect\nRotten Leaf\nScrubber\nWhite Glove\nLeaf\nHerb\nLog\nRod\nStem of Radish\nDumb Knuckle\nDyes\nSap\nVine\nMulberry Leaf');
	//Stage 4////////////////////////////////////////////////////
	//ATK///////////////
	let warmomolast = new Discord.RichEmbed()
		.setTitle('WarMomo Ke InfluWarMomo/Male/FlyMale')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554354111928336394/warmomobnrach.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nCrystalline Sword\nTranslucent Great Sword\nCrystalline Dagger\n4 Leaf Clover\nRadish\nBland Water Kimchee\nBowl\nHat of Quickness\nShoes of Quickness\nSuit of Quickness(T)\nSuit of Quickness(B)\nBlue Ribbon\nBlue Dye');

	let kingmomolast = new Discord.RichEmbed()
		.setTitle('King Momo Ke MTG/InfluWarMomo/Male')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554353973998387230/kingmomobranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nCrystalline Sword\nTranslucent Great Sword\nCrystalline Dagger\n4 Leaf Clover\nRadish\nBland Water Kimchee\nBowl\nHat of Quickness\nShoes of Quickness\nSuit of Quickness(T)\nSuit of Quickness(B)\nBlue Ribbon\nBlue Dye');

	let prettymomolast = new Discord.RichEmbed()
		.setTitle('PrettyMomo Ke BeautyMomo/Male')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554354007057891335/prettymomobranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nCrystalline Sword\nTranslucent Great Sword\nCrystalline Dagger\n4 Leaf Clover\nRadish\nBland Water Kimchee\nBowl\nHat of Quickness\nShoes of Quickness\nSuit of Quickness(T)\nSuit of Quickness(B)\nBlue Ribbon\nBlue Dye');
	//MATK////////////////

	let roselast = new Discord.RichEmbed()
		.setTitle('Rose Ke WhiteRose/Female/FlyFemale')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554355594232987679/rosebranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nWit\nStone\nTooth\nTransparent Mace\nCrystalline Staff\nSolar Hat\nSunflower Seed\nLight Panel');

	let sunflowerlast = new Discord.RichEmbed()
		.setTitle('Sun Flower Ke Solar/Female')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554355613698883595/sunflowerbranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nWit\nStone\nTooth\nTransparent Mace\nCrystalline Staff\nSolar Hat\nSunflower Seed\nLight Panel');

	//ATKMATK//////////////

	let beanielast = new Discord.RichEmbed()
		.setTitle('Beanie Ke FrenchBeanie/InfluBeanie/Female')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554355474846187525/beaniebranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nSeaweed\nBell\nAsh\nTransparent Mace\nCrystalline Staff\nHat of Quickness\nViridian Hat');

	let prettybeanilast = new Discord.RichEmbed()
		.setTitle('Pretty Beanie Ke BeautyBeanie/InfluBeanie/Female')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554355653594841088/prettybeaniebranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nSeaweed\nBell\nAsh\nTransparent Mace\nCrystalline Staff\nHat of Quickness\nViridian Hat');

	let warbeanielast = new Discord.RichEmbed()
		.setTitle('WarBeanie Ke InfluBeanie/Female/FlyFemale')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/554355632216604673/warbeaniebranch.png')
		.setColor('#320ddb')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bahan :','4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nSeaweed\nBell\nAsh\nTransparent Mace\nCrystalline Staff\nHat of Quickness\nViridian Hat');

	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
	console.log(collector)
	collector.on('collect', message => {
		if(message.content === '1') {
			message.channel.send(seedbud)
		}
		if(message.content === '2') {
			message.channel.send(budmomojr)
			message.channel.send(budflowerbud)
			message.channel.send(budshuck)
		}
		if(message.content === '3') {
			message.channel.send(momojrwarmomokingmomoprettymomo)
		}
		if(message.content === '4') {
			message.channel.send(flowerbudrosesunflower)
		}
		if(message.content === '5') {
			message.channel.send(shuckbeaniewarbeanieprettybeanie)
		}
		if(message.content === '6') {
			message.channel.send(warmomolast)
		}
		if(message.content === '7') {
			message.channel.send(kingmomolast)
		}
		if(message.content === '8') {
			message.channel.send(prettymomolast)
		}
		if(message.content === '9') {
			message.channel.send(roselast)
		}
		if(message.content === '10') {
			message.channel.send(sunflowerlast)
		}
		if(message.content === '11') {
			message.channel.send(beanielast)
		}
		if(message.content === '12') {
			message.channel.send(prettybeanilast)
		}
		if(message.content === '13') {
			message.channel.send(warbeanielast)
		}
		msg.delete()
		return;

	});

}



module.exports.help = {
	name: "helpseed"
}