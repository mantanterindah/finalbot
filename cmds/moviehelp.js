const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	//let msg = await message.reply('', {})

	let embed = new Discord.RichEmbed()
		.setTitle('Movie Help Commands')
		//.setImage()
		.setColor('#f44265')
		.setThumbnail()
		.setTimestamp()
		.addField('meha', '```fix\n'+'do type !meha(space)(content to search) \n if not show anything no result on thats website \n this commands search data from samehadaku.net and show 5 result'+'```')
		.addField('opzlover', '```css\n'+'do type !opzlover(space)(content to search) \n if not show anything no result on thats website \n this commands search data from opzlover and show 3 result'+'```')
		.addField('Coming Soon', 'Coming Soon');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "moviehelp"
}