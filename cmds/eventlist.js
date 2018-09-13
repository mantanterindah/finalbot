const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ... ')

	let embed1 = new Discord.RichEmbed()
		.setTitle('Event Tag and Share')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489816770278850580/event1.jpg')
		.setColor('#f44256')
		//.setThumbnail()
		.setTimestamp()
		.addField('Desc', 'IKUTILAH EVENT LIKE DAN SHARE DARI REKTNAROK ONLINE .DAPATKAN COSTUME HAPPINESS WING UNTUK 3 ORANG PEMENANG DAN COSTUME SUNGLASSES UNTUK SEMUA PARTISIPAN.JANGAN LEWATKAN LHO YAAA.')
		.addField('Cara Bermain:', '- Like dulu Fanspage Rektnarok kita http:www.fb.com/Rektnarok\n- Lalu silahkan menuju link ini Fanspage Rektnarok Online Event Post\n- Setelah itu like postingan tersebut dan share ke timeline facebook anda\n - Buat caption untuk mengajak temanmu mengapa harus bermain Rektnarok ? dan tulis nickname charmu.\n- Tag 5 orang temanmu (Minimal)\n- Lalu posting saja dan jangan lupa untuk mengesetnya ke PUBLIC agar kami bisa membacanya.')
		.addField('Hadiah :', 'Hadiah akan diundi pada tanggal 23 September 2018.\n- 3x Orang beruntung akan mendapatkan 1x Buah Costume Happiness Wing\n- 5x Orang beruntung akan mendapatkan Cash Point senilai Rp 50.000\n- Dan semua partisipan akan mendapatkan 1 buah VIP ticket 3 day dan 1 buah Costume Sunglasses');
		message.channel.send(embed1);
	
	let embed2 = new Discord.RichEmbed()
		.setTitle('Kaskus Reward')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489820081237524480/event2.jpg')
		.setColor('#f44256')
		.setTimestamp()
		.addField('Halo rekt !!','Buat kamu rektnarokers yang punya id kaskus, atau aktif dikaskus dan mempunyai post minimal 100 post .Wajib banget ngikutin event kita ini karena berhadiah free gm reward box dan daily login premium box lhooo .Dan ada 5x voucher senilai 50 ribu bebas pilih (OVO/Go Pay/ Alfamart / Pulsa) untuk 5 Orang beruntung !!')
		.addField('Syarat mengikuti event ini :','- ID Kaskus wajib mempunyai minimal 100 post\n- Event ini hanya berlaku untuk 1 ID Kaskus per 1 ID Game\n- Wajib menuliskan kesan dan pesan terhadap Rektnarok didalam thread.')
		.addField('Tatacara mengikuti event :','- Login ke id kaskusmu\n- Buka Thread Kaskus Rektnarok Online\n- Post IGN dan Kesan Pesanmu selama bermain di Rektnarok disana.\n- Pemenang akan diundi tanggal 23 September 2018\n- Jika kamu hanya menulis IGN maka kami akan menganggapnya SPAM dan report ke MOMOD Kaskus.')
		.addField('Reward :','- Untuk partisipan free 3x GM Reward Box dan 3x Daily Premium Package\n- Untuk 5x Orang beruntung (akan diundi) mendapatkan voucher senilai 50 ribu rupiah bebas pilih : OVO, GoPay,Alfamart, atau Pulsa.')
		message.channel.send(embed2);
}

module.exports.help = {
	name: "eventlist"
}