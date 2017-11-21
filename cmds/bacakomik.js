const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (bot, message, args) => {
	request(`https://mangaindo.web.id/?s=${args}`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}
		let $ = cheerio.load(body);

		$('#main').each(function(index) {
			var utamanya = $(this).find('article');
			var indexnya = utamanya.children();
			var anaknya = indexnya.find('h2 a').attr('href');

			request(anaknya, function(err, resp, body) {
				if (err) {
					console.log(err)
				}

				let $ = cheerio.load(body);

				$('.entry-content').each(function(index) {
					var komiknya = $(this).find('p').children();
					(komiknya).each(function(index) {
						var itunya = $(this).attr('src');

						console.log(itunya)

						let embed = new Discord.RichEmbed()
							.setImage(itunya)
							.setColor("#0x00AE86")
							message.channel.send(embed)
					})
				})
			})
		})
	})
	
}

module.exports.help = {
	name: "bacakomik"
}