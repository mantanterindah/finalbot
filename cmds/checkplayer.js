const Discord = module.require('discord.js');
const request = module.require('request');

module.exports.run = async (bot, message, args) => {

	const url = 'http://www.enigmasealindo.com/'

	request(url , function(err, resp, body) {
	if (err) {
		console.log(err)
	}

	let $ = cheerio.load(body);

	var msg = $('div.container > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(7) > h2').text();

	console.log(msg)
	message.channel.send(msg)
})

	
	
}

module.exports.help = {
	name: "online"
}