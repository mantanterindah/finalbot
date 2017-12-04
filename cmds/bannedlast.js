const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

const url = 'https://forum.gravindo.id/showthread.php?1291-Info-Banned-List'

module.exports.run = async (bot, message, args) => {

	request(url, function(err, resp, body) {
		if (err) {
			console.log(err)
		}

		let $ = cheerio.load(body);

		var last = $('.first_last a');
		var last1 = last.attr('href');

		//console.log(last)
		message.channel.send(last1)
	})
}

module.exports.help = {
	name: "bannedlast"
}
//#yui-gen8 > span.first_last > a