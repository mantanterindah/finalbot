const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');


module.exports.run = async (bot, message, args) => {


	request(`https://mangaindo.web.id/?s=${args}`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}
		let $ = cheerio.load(body)

		$('#main').each(function(index) {
			var judulnya = $(this).find('div.title > h2');

			(judulnya).each(function(index) {
				var namajudul = $(this).text();

				console.log(namajudul)

				message.channel.send(namajudul)
			})
		})

	})

}

module.exports.help = {
	name: "updatekomik"
}

//#post-118660
//#post-118660 > div.title > h2