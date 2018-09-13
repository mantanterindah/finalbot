const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Sebentar Sultan ..')

	let embed = new Discord.RichEmbed()
		.setTitle('Costume Recycle')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489846940759228436/costumrec.jpg')
		.setColor('#0eefd9')
		//.setThumbnail()
		.setTimestamp()
		.addField('Syarat Menukarkan Costume :', '1. Bawalah costume yang ingin dijadikan Sampah Point.\n2. Bicaralah kepada Orang Kaya dan pilih ask more information.\n3. Lalu pilih tukarkan costume.\n4. Nanti anda disuruh menyebut nama costume yang diinginkan (Harus sesuai database ya List penamaan akan diupdate dibawah)\n5. Jika sudah costume akan hilang dan anda akan mendapatkan Sampah Point sesuai costume yang dibawa.')
		//.addField('', '')
		.addField('Note :', '- NPC ini akan langsung mendelete semua costume yang kamu tulis diinventorymu.\n- 1x Costume bernilai 1 Sampah Point.\n- Untuk menukarkan menjadi box lagi, bicaralah lagi ke npc tersebut lalu pilihlah opsi yang bawah setelah ask more information.\n- 3x Sampah Point untuk 1x Buah Costume Box September 2018');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-costumerecycle"
}