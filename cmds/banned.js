const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (bot, message, args) => {

	let msg = message.reply('turut berduka cita atas para pahlawan yg gugur :sleepy: ')

	request(`https://forum.gravindo.id/showthread.php?1291-Info-Banned-List/page${args}`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}

		let $ = cheerio.load(body);

		$('tr').each(function(index) {
		var ban = $(this).children();
		var ban1 = ban.eq(0).text();
		var ban2 = ban.eq(1).text();
		var ban3 = ban.eq(2).text();
		var ban4 = ban.eq(3).text();

		
		var ygdikirim = ban1 + ban2 + ban3 + ban4
		
		message.channel.send('```'+'fix'+'\n'+ygdikirim+'\n'+'```')

	})

		
	})

	
}

module.exports.help = {
	name: "bannedpage"
}
//message.channel.send('```'+'js'+'\n'+ygdikirim+'\n'+'```')