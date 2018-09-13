const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ...')

	let embed = new Discord.RichEmbed()
		.setTitle('Guide How To Delete Character:')
		//.setImage()
		.setColor('#e0dc0d')
		//.setThumbnail()
		.setTimestamp()
		.addField('Syarat:', '- Character tidak ada diguild / party\n- Kalau bisa jangan membawa item diinventory.')
		//.addField('', '')
		.addField('Caranya :', '- Klik Delete Reservation saat di character selection screen.\n- Nanti akan muncul tulisan 9 month blablabla, abaikan saja itu bug display.\n- Tunggu hingga 5000 detik atau sekitar 2 jam kurang.\n- Setelah itu nanti warna time deletenya akan berwarna biru.\n- Tekan lagi tombol delete.\n- Saat dimintain Delete password tulis Tanggal Lahirmu dalam Format YY-MM-DD.\n- Misal Tanggal Lahirmu 1 januari 1990 maka ditulis 90-01-01.');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-deletechar"
}