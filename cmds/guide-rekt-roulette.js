const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Kalem Juragan')

	let embed = new Discord.RichEmbed()
		.setTitle('Roulette Coin Guide')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489853739276959761/roulette.jpg')
		.setColor('#e20db1')
		//.setThumbnail()
		.setTimestamp()
		.addField('Roullette Bronze Coin :', '- Dimulai dari baris 1\n- Membutuhkan 1 Bronze Coin untuk sekali main (Double klik dulu coinnya sebelum memencet tombol roullette)\n- Coin bisa didapatkan dari Drop Global Monster, Auto Event / Event dari GM.')
		.addField('Roullette Silver Coin :', '- Dimulai dari baris ke 3\n- Membutuhkan 10 Roullette Silver Coin untuk sekali main (Double klik sebanyak 10 coin sebelum memencet tombol roullette)\n- Coin bisa didapatkan dari Drop Global Monster, Auto Event / Event dari GM.')
		.addField('Roullette Gold Coin :', '- Dimulai dari 3 baris sebelum baris paling atas.\n- Membutuhkan 10 Roullette Gold Coin untuk sekali main (Double klik sebanyak 10 coin sebelum memencet tombol roullette)\n- Coin hanya bisa didapatkan dari bermain Roullette /Event dari GM.');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-roulette"
}