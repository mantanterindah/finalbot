const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec')

	let embed = new Discord.RichEmbed()
		.setTitle('Guide Copper/bronze/Rekt Coin')
		//.setImage()
		.setColor('#24d6d6')
		//.setThumbnail()
		.setTimestamp()
		.addField('BRONZE COIN', 'Bronze coin adalah coin yang digunakan untuk membeli barang-barang rental dari NPC Imma the Rentalers di tengah prontera.\nMendapatkannya bisa dari Drop Global Monster,mengikuti auto event / event by gm, atau memenangkan roullette feature.\nItem ini tidak bisa ditransaksikan.')
		.addField('COPPER COIN', 'Copper coin adalah coin yang digunakan untuk ditukarkan menjadi rekt coin jika sudah mencapai target tertentu.\nDefaultnya exchanger rate adalah 50 copper coin -> 1 rekt coin.\nCoin ini hanya bisa didapatkan dari Drop Global Monster, mengikuti auto event / event by gm, atau memenangkan roullette feature.\nItem ini tidak bisa ditransaksikan.')
		.addField('REKT COIN', 'Rekt coin adalah coin yang digunakan untuk membeli barang di Rekt Coin shop.\nItem ini hanya bisa didapatkan setelah menukarkan Copper Coin sesuai rate exchangenya.\nItem ini bisa ditransaksikan dan dijual didalam vending.');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-coin"
}