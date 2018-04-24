const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (bot, message, args) => {

	//const url = 'http://dunia21.tv/?s='
	request(`https://dunia21.tv/?s=${args}`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}

		let $ = cheerio.load(body);

		var film1 = $('div.container > div.site-content > main > div > section > article:nth-child(2)').children();
		var judulfilm1 = film1.find('h2 a').text();
		var tagfilm1 = film1.find('p a').text();
		var gambarfilm1 = film1.find('a img').attr('src');
		var linkfilm1 = film1.find('a').attr('href');

		var film2 = $('div.container > div.site-content > main > div > section > article:nth-child(3)').children();
		var judulfilm2 = film2.find('h2 a').text();
		var tagfilm2 = film2.find('p a').text();
		var gambarfilm2 = film2.find('a img').attr('src');
		var linkfilm2 = film2.find('a').attr('href');


		var film3 = $('div.container > div.site-content > main > div > section > article:nth-child(4)').children();
		var judulfilm3 = film3.find('h2 a').text();
		var tagfilm3 = film3.find('p a').text();
		var gambarfilm3 = film3.find('a img').attr('src');
		var linkfilm3 = film3.find('a').attr('href');

		console.log(judulfilm1)
		console.log(tagfilm1)
		console.log(gambarfilm1)
		console.log(linkfilm1)


		let embed1 = new Discord.RichEmbed()
			.setTitle(judulfilm1)
			.setColor('#1f08ce')
			.setURL(linkfilm1)
			.setImage('https:'+gambarfilm1)
			.setThumbnail(message.author.avatarURL)
			.setDescription(tagfilm1)
			.setTimestamp();
			message.channel.send(embed1)

		let embed2 = new Discord.RichEmbed()
			.setTitle(judulfilm2)
			.setColor('#1f08ce')
			.setURL(linkfilm2)
			.setImage('https:'+gambarfilm2)
			.setThumbnail(message.author.avatarURL)
			.setDescription(tagfilm2)
			.setTimestamp();
			message.channel.send(embed2)

		let embed3 = new Discord.RichEmbed()
			.setTitle(judulfilm3)
			.setColor('#1f08ce')
			.setURL(linkfilm3)
			.setImage('https:'+gambarfilm3)
			.setThumbnail(message.author.avatarURL)
			.setDescription(tagfilm3)
			.setTimestamp();
			message.channel.send(embed3)

	})

	
	
}

module.exports.help = {
	name: "lk21"
}

//selector
//body > div.container > div.site-content > main > div > section > article:nth-child(2)
//nama
//body > div.container > div.site-content > main > div > section > article:nth-child(2) > div > header > h2 > a
//
