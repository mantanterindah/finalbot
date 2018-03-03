const Discord = module.require('discord.js');

const npc1 = 'http://file5.ratemyserver.net/quests/npcs/741.gif'
const map1 = 'http://file5.ratemyserver.net/quests/minimaps/m60017_0.jpg'
const bard = 'http://www.playragnarok.com/images/gameguide/classes/index/index_22_bard_over.png'

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Bard', {file: bard})

	let embed1 = new Discord.RichEmbed()
		.setTitle('Bard Job Quest - Registration')
		.setImage(map1)
		.setColor('#ce1033')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Wandering Bard', 'comodo (226, 123)')
		.addField('Ingredient(s)', '**Hinalle x 1**\n**OR**\n**Ment x 1**\n**OR**\n**Singing Flower x 1**\n**OR**\n**Illusion Flower x 1**\n**OR**\n**Witherless Rose x 1**\n**OR**\n**Izidor x 1**\n**OR**\n**Aloe x 1**\n**OR**\n**Frozen Rose x 1**')
		.addField('Quest Step', 'Talk to him a few times, ask him to sing for you. If you choose the correct menu options he will tell you he can help you to become a bard.\n\nIf you want to be a Bard, you have to bring him a flower\nYou cannot bring him any buyable flower except Witherless Rose which is sold')
		.addField('buyable', 'From a Trader near the east exit of Morroc\nFrom the Gift Merchant in a shop east of Lutie\nFrom Flower Girl at the lower left corner of Lighthalzen')
		.addField('Quest Step', 'See the other possible flowers of choice listed above also.\n\nOnce you done that, he will tell you to bring a present from a talking snowman named Jack Frost in Lutie and also to become friend with the people there. All these means that you have to complete the Lutie Snowman Quest and come back. See related quest section below for Lutie Snowman Quest Guide.')
		.addField('Requirements', ' You must be an Archer at job level 40 or higher in order to start the quest.')
		.addField('Related Quests:', 'Lutie Snowman Quest')
		.addField('Location', 'A few steps southeast from Comodo Center');
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Bard Job Quest - Q & A and Job Change')
		.setImage(map1)
		.setColor('#ce1033')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Wandering Bard', 'comodo (226, 123)')
		.addField('Quest Step', 'After you come back from Lutie, he will give you a singing test. All you have to do is pay attention to what he sing and sing exactly as him when it is your turn. Remember to read carefully on the capitalization and punctuation.\nAfter you pass, you have two options. You can choose to change into a Bard right away. Or you can decide to get a present from him.\nIf you choose to get a present, you have to bring him some trunks. Read the next part for the possible presents made from each type of trunks.')
		.addField('Location', 'A few steps southeast from Comodo Center');
		message.channel.send(embed2);
	
	let embed3 = new Discord.RichEmbed()
		.setTitle('Bard Job Quest - Optional Present')
		.setImage(map1)
		.setColor('#ce1033')
		.setThumbnail(npc1)
		.setTimestamp()
		.addField('Wandering Bard', 'comodo (226, 123)')
		.addField('Ingredient(s)', '**For Lute[2] : Fine-grained Trunk x 60**\n**For Mandolin[2] : Solid Trunk x 60**\n**For Mandolin[2] : Barren Trunk x 60**\n**For Violin[3] : Trunk x 60**\n**For Harp[2] if you are Job 50 : Fine-grained Trunk x 60**')
		.addField('Product(s)', '**Fine-grained Trunk : Lute [2] x 1**\n**Solid Trunk : Mandolin [2] x 1**\n**Barren Trunk : Mandolin [2] x 1**\n**Trunk  : Violin [3] x 1**\n**Fine-grained Trunk & Job 50 : Harp [2] x 1**')
		.addField('Quest Step', 'Depending on which type of trunk you bring him, he will give you a different piece of equipment.\nThe only special case is if you are at Job level 50 and you bring him 60 Fine-grained Trunk, you will get a Harp[2].')
		.addField('Location', 'A few steps southeast from Comodo Center');
		message.channel.send(embed3);
	
}

module.exports.help = {
	name: "bardjobchange"
}