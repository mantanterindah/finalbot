const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('```diff\nKetik Angkanya Aje Buat Intip :\n-1. Piya Egg\n-2. Baby Piya\n-3. Silly Piya\n-4. Smart Piya\n-5. Healty Piya\n-6. Exo Piya\n-7. Chiken\n-8. Mage Piya\n-9. Cleric Piya\n-10. Jester Piya\n-11. Knight Piya\n-12. War Piya\n-13. Hero Piya```')

	//let sample = new Discord.RichEmbed()
		//.setTitle('')
		//.setColor('320ddb')
		//.setThumbnail('')
		//.setImage('')
		//.setTimestamp()
		//.addField('List Bahan', '');
		//message.channel.send();
	
	///////////////////////////
	//STAGE 1
	let piyaeggtobabypiya = new Discord.RichEmbed()
		.setTitle('')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558331883344232469/piyaeggtobaby.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558331910749814787/piyaeggtobaby2.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nHatching Stone\nGeranium\nLarge Geranium\nSap\nMilk\nBabys Pacifier\nSoy Milk\nEgg\nChicken Feather\nMadams Feather\nOxygen\nMothers Heart\nMotherly Love\nMotherly Devotion\nFathers Excuse\nFathers Good Old Days\nPiyas Unfertilized Egg\nVolcanic Rock\nForging Rock');
		//message.channel.send();
	//STAGE 2

	let babypiyatosmart = new Discord.RichEmbed()
		.setTitle('Baby Piya ke Smart/Exo/Silly Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332053419196427/babypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332075175051285/babypiyatosmart.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nWit\nGlasses\nSwimming Goggles\nCrystal of Star\nIlluminating Crystal\nMark of Sage\nMark of Great Sage\nLiver\nSoy Milk\nWooden Staff\nMace\nCats Whiskers\nMark of Mage\nBell\nEyeball\nBlue Crystal');
		//message.channel.send();

	let babypiyatohealty = new Discord.RichEmbed()
		.setTitle('Baby Piya ke Healty/Exo/Silly Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332053419196427/babypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332099434774528/babypiyatohealty.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMeat	Soy Milk\nPea\nKidney Bean\nRed Potion\nHigh-Red Potion\nMax-Red Potion\nBears Gall\nBronze Carp\nSilver Carp\nGold Carp\nWheat\nMilk\nMushroom\nLiver\n1000 Year-Old Mushroom\nEgg\nHerb\nBlue Potion\nHigh-Blue Potion\nMax-Blue Potion\n40oz Herbal Wine');
		//message.channel.send();

	//STAGE 3-Silly//
	let sillytojester = new Discord.RichEmbed()
		.setTitle('Silly Piya Ke Jester/Chiken Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332420294705152/sillypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332440167317504/sillypiyatojester.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock');
		//message.channel.send();

	let sillytomage = new Discord.RichEmbed()
		.setTitle('Silly Piya Ke Mage /Chiken Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332420294705152/sillypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332455233257493/sillypiyatomage.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMark of Great Sage\nMagic Powder\nSoul of Great Mage\nMark of Mage\nConjurers Robe(T)\nConjurers Robe(B)\nConjurers Hat\nConjurers Shoes\nMagic Leather Clothes(T)\nMagic Leather Clothes(B)\nMagic Leather Shoes\nMagic Leather Hat\nEnchanted Cotton Shoes\nEnchanted Cotton Hat\nEnchanted Cotton Tunic(T)\nEnchanted Cotton Tunic(B)\nRod\nHat of Praise\nMark of Sage\nMage Piyas Staff');
		//message.channel.send();

	let sillytocleric = new Discord.RichEmbed()
		.setTitle('Silly Piya Ke Cleric/Chiken Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332420294705152/sillypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332467459915806/sillypiyatocleric.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMark of Sage\nWit\nMark of Great Sage\nSages Staff\nCompression Bandage\nBandage\nCleric Piyas Syringe\nCleric Piyas Hat\nMace Handle\nCrystal of Dean\nCrystal of Vinagh\nCrystal of Hokma\nCrystal of Hesed\nCrystal of Keterre\nCrystal of Neza\nAdels Blessing\nMark of Vinagh\nMark of Dean\nMark of Neza\nMark of Hokma\nMark of Elios');
		//message.channel.send();

	let sillytoknight = new Discord.RichEmbed()
		.setTitle('Silly Piya Ke Knight/Chiken Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332420294705152/sillypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332483737747458/sillypiyatoknight.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nIron Plate\nKnights Crest\nReally Hard Shell\nHard Shell\nSoul of Holy Knight\nPiyas Sword\nMithril\nCeramic\nTitanium\nHeavy Metal\nGolemium\nSword Hilt\nDamascus\nIron\nForging Rock\nBone\nArmor Pieces\nBronze\nStone\nRock\nFlame Stone\nVolcanic Rock');
		//message.channel.send();

	//Stage 3 Smart//

	let smarttojester = new Discord.RichEmbed()
		.setTitle('Smart Piya Ke Jester/Chiken/War Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332773769936916/smartpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332793319456778/smartpiyatojester.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather	Chicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock');
		//message.channel.send();

	let smarttomage = new Discord.RichEmbed()
		.setTitle('Smart Piya Ke Mage/Chiken/War Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332773769936916/smartpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332801603338247/smartpiyatomage.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMark of Great Sage\nMagic Powder\nSoul of Great Mage\nMark of Mage\nConjurers Robe(T)\nConjurers Robe(B)\nConjurers Hat\nConjurers Shoes\nMagic Leather Clothes(T)\nMagic Leather Clothes(B)\nMagic Leather Shoes\nMagic Leather Hat\nEnchanted Cotton Shoes\nEnchanted Cotton Hat\nEnchanted Cotton Tunic(T)\nEnchanted Cotton Tunic(B)\nRod\nHat of Praise\nMark of Sage\nMage Piyas Staff');
		//message.channel.send();

	let smarttocleric = new Discord.RichEmbed()
		.setTitle('Smart Piya Ke Cleric/Chiken/War Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332773769936916/smartpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332821383413765/smartpiyatocleric.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMark of Sage\nWit\nMark of Great Sage\nSages Staff\nCompression Bandage\nBandage\nCleric Piyas Syringe\nCleric Piyas Hat\nMace Handle\nCrystal of Dean\nCrystal of Vinagh\nCrystal of Hokma\nCrystal of Hesed\nCrystal of Keterre\nCrystal of Neza\nAdels Blessing\nMark of Vinagh\nMark of Dean\nMark of Neza\nMark of Hokma\nMark of Elios');
		//message.channel.send();

	//STAGE 3 Healty//

	let healtytoknight = new Discord.RichEmbed()
		.setTitle('Healty Piya Ke Knight/Chiken/War Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333161592061962/healtypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333184543293453/healtypiyatoknight.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nIron Plate\nKnights Crest\nReally Hard Shell\nHard Shell\nSoul of Holy Knight\nPiyas Sword\nMithril\nCeramic\nTitanium\nHeavy Metal\nGolemium\nSword Hilt\nDamascus\nIron\nForging Rock\nBone\nArmor Pieces\nBronze\nStone\nRock\nFlame Stone\nVolcanic Rock');
		//message.channel.send();

	let healtytojester = new Discord.RichEmbed()
		.setTitle('Healty Piya Ke Jester/Chiken/War Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333161592061962/healtypiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333214226251788/healtypiyatojester.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock');
		//message.channel.send();

	//STAGE 3 EXO//

	let exotomage = new Discord.RichEmbed()
		.setTitle('Exo Piya Ke Mage/War/Hero Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333851097890835/exopiyatomage.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMark of Mage\nMagic Powder\nSoul of Great Mage\nConjurers Robe(T)\nConjurers Robe(B)\nConjurers Hat\nConjurers Shoes\nMagic Leather Clothes(T)\nMagic Leather Clothes(B)\nMagic Leather Shoes\nMagic Leather Hat\nEnchanted Cotton Shoes\nEnchanted Cotton Hat\nEnchanted Cotton Tunic(T)\nEnchanted Cotton Tunic(B)\nRod\nHat of Praise\nMark of Sage\nMage Piyas Staff\nMark of Great Sage');
		//message.channel.send();

	let exotocleric = new Discord.RichEmbed()
		.setTitle('Exo Piya Ke Cleric/War/Hero Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333865417113610/exopiyatocleric.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMark of Sage\nWit\nMark of Great Sage\nSages Staff\nCompression Bandage\nBandage\nCleric Piyas Syringe\nCleric Piyas Hat\nMace Handle\nCrystal of Dean\nCrystal of Vinagh\nCrystal of Hokma\nCrystal of Hesed\nCrystal of Keterre\nCrystal of Neza\nAdels Blessing\nMark of Vinagh\nMark of Dean\nMark of Neza\nMark of Hokma\nMark of Elios');
		//message.channel.send();

	let exotojester = new Discord.RichEmbed()
		.setTitle('Exo Piya Ke Jester/War/Hero Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333882194329600/exopiyatojester.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock');
		//message.channel.send();

	let exotoknight = new Discord.RichEmbed()
		.setTitle('Exo Piya Ke Knight/War/Hero Piya')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333895867629588/exopiyatoknight.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nIron Plate\nKnights Crest\nReally Hard Shell\nHard Shell\nSoul of Holy Knight\nPiyas Sword\nMithril\nCeramic\nTitanium\nHeavy Metal\nGolemium\nSword Hilt\nDamascus\nIron\nForging Rock\nBone\nArmor Pieces\nBronze\nStone\nRock\nFlame Stone\nVolcanic Rock');
		//message.channel.send();

	//Stage 4//

	let chikentocranky = new Discord.RichEmbed()
		.setTitle('Chiken Ke Cranky/Super Piya/KOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558334317382598699/chiken.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558334334235574303/chikenpiyatocranky.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nJasons Heart\nCold Heart\nHeart of Golem');

	let magetogmp = new Discord.RichEmbed()
		.setTitle('Mage Piya Ke GMP/Super Piya/QOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335365031657472/magepiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335378512281603/magepiyatogmp.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nGrannys Staff\nMage Piyas Staff\nWagon Drivers Staff\nGhosts Staff\nMoo Moo Staff\nDarkwing Shard\nCool Guys Stick\nStaff of Neza\nReinas Staff\nSoul of Great Mage\nMark of Mage\nMagic Powder');

	let clerictopriest = new Discord.RichEmbed()
		.setTitle('Cleric Piya Ke Priest/Super Piya/QOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335480890916885/clericpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335495596146690/clerictipriest.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nSoul of Holy Knight\nSoul of Great Mage\nSoul of Jester\nSoul of Swordsman\nSoul of Snow Princess\nSpirit of Cat\nSoul of Pirate\nFallen Spirit\nSoulless Sword\nGhosts Staff\nGhosts Sword\nGhosts Shield');

	let jestertoartist = new Discord.RichEmbed()
		.setTitle('Jester Piya ke Artist/Super Piya/KOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558334840773279754/jesterpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558334858364059658/jesterpiyatoartist.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nSoul of Holy Knight\nSoul of Great Mage\nSoul of Jester\nSoul of Swordsman\nSoul of Snow Princess\nSpirit of Cat\nSoul of Pirate\nFallen Spirit\nSoulless Sword\nHeart of Wind\nMothers Heart\nMotherly Devotion');

	let knighttomsp = new Discord.RichEmbed()
		.setTitle('Knight Piya Ke MSP/Super Piya/KOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335663989063687/knightpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335678983831573/knightpiyatoswordmas.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nAzoth Blade\nCrystalline Sword\nGlare Blade\nSword of Ellen\nKris Blade\nFlamberge\nDeath Seeker\nFavonius\nOrnate Blade\nUltima\nFalchion\nShark Shank\nGrizzly Cleaver\nDullahans Sword\nGhosts Sword\nSkeletons Sword\nSkeletons Dark Sword\nRabbits Cleaver');

	let wartosuper = new Discord.RichEmbed()
		.setTitle('War Piya Ke Super Piya/KOAC/QOAC/F.KOAC/F.QOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335823167094794/warrpiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335837146972170/warrpiyatosuper.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nMage Piyas Staff\nWarrior Piyas Sword\nPiyas Sword\nCleric Piyas Syringe\nCleric Piyas Hat\nMadams Feather\nSoul of Holy Knight\nSoul of Great Mage\nSoul of Jester\nSoul of Swordsman\nSoul of Snow Princess\nSpirit of Cat\nSoul of Pirate');

	let herotogeneral = new Discord.RichEmbed()
		.setTitle('Hero Piya Ke General/KOAC/QOAC/F.KOAC/F.QOAC')
		.setColor('320ddb')
		.setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558336011458052096/heropiya.png')
		.setImage('https://cdn.discordapp.com/attachments/502501525529034762/558336025454444555/heropiyatogeneral.png')
		.setTimestamp()
		.addField('List Bahan', '4 Leaf Clover\nIlluminating Crystal\nShiny Thread\nFiber Optics\nHeart of Wind\nMark of Wind\nCrystal of Star\nAviators Armor(T)\nAviators Armor(B)\nAviators Boots\nWinged Shield\nBamboo Hat');


		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
		console.log(collector)
		collector.on('collect', message => {
			if(message.content === '1') {
				message.channel.send(piyaeggtobabypiya)
			}
			if(message.content === '2') {
				message.channel.send(babypiyatosmart)
				message.channel.send(babypiyatohealty)
			}
			if(message.content === '3') {
				message.channel.send(sillytojester)
				message.channel.send(sillytomage)
				message.channel.send(sillytocleric)
				message.channel.send(sillytoknight)
			}
			if(message.content === '4') {
				message.channel.send(smarttojester)
				message.channel.send(smarttocleric)
				message.channel.send(smarttomage)
			}
			if(message.content === '5') {
				message.channel.send(healtytojester)
				message.channel.send(healtytoknight)
			}
			if(message.content === '6') {
				message.channel.send(exotojester)
				message.channel.send(exotomage)
				message.channel.send(exotocleric)
				message.channel.send(exotoknight)
			}
			if(message.content === '7') {
				message.channel.send(chikentocranky)
			}
			if(message.content === '8') {
				message.channel.send(magetogmp)
			}
			if(message.content === '9') {
				message.channel.send(clerictopriest)
			}
			if(message.content === '10') {
				message.channel.send(jestertoartist)
			}
			if(message.content === '11') {
				message.channel.send(knighttomsp)
			}
			if(message.content === '12') {
				message.channel.send(wartosuper)
			}
			if(message.content === '13') {
				message.channel.send(herotogeneral)
			}
			msg.delete()
			return;
		});


}

module.exports.help = {
	name: "helppiya"
}
