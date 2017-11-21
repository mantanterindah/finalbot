const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (bot, message, args) => {
	request.get('https://www.mobilelegends.com/', function(err, resp, body) {
		if (err) {
			console.log(body)
		}
	
	})

}

module.exports.help = {
	name: "moba"
}