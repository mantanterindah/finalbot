const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ...')

	let embed = new Discord.RichEmbed()
		.setTitle('Auto Event/Event List')
		//.setImage()
		.setColor('#e5e512')
		//.setThumbnail()
		.setTimestamp()
		.addField('Reward', 'Auto Event Box :\nRoullette Bronze Coin, Bronze Coin, Roullette Silver Coin, Copper Coin, Mastela Fruit, Megaphone, Speed Potion, All Dish Cash +5')
		.addField('Disguise', 'Kalian harus cepet-cepetan menebak nama monster dengan benar.Event ini terdiri dari 10 Ronde.\nJadwal : Setiap hari pukul 12 AM, 4 AM, 8 AM, 12 PM, 4 PM, 8 PM.\nReward : 1x Auto Event Box per Round')
		.addField('Cluckers', 'Kalian harus mengclick NPC Ayam yang ada diprontera hingga rewardnya keluar.\nSaat mengclick kalian akan kemungkinan terkena berbagai macam status dan nuke.\nJadwal : 10 AM, 6 PM, 10 PM\nReward : 7x Auto Event Box per Event.')
		.addField('Find the Crystal', 'Saat pengumuman baca baik baik Crystal akan spawn di kota apa.\nKota yang dipakai hanya prontera, geffen, hugel, izlude, dan comodo.\nSpawn akan random dari 5 - 15 monster per event.\nJadwal : 1.30 PM, 5 PM dan 9 PM\nReward : 1x Auto Event Box per crystal yang kamu kill.')
		.addField('Rektnarok Wiki Event', 'Event ini bertujuan untuk menguji wawasan kalian tentang RO.\nSaat event dimulai kalian harus berada didekat NPC ini.\nSaat NPC berubah menjadi monster klik NPC dan Pilih Write Answer dan jawablah pertanyaan yang diajukan dengan benar.\nHanya 5 Ronde Per Event.\nJadwal : 2.30 AM, 5.30 AM, 8.30 AM, 11.30 AM, 2.30 PM, 5.30 PM, 8.30 PM, 11.30 PM\nReward : 1x Auto Event Box per Round.');
		message.channel.send(embed);
	
	
}

module.exports.help = {
	name: "guide-autoevent"
}