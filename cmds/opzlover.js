const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Bentar BossQu...')

	request(`https://www.oploverz.in/?s=${args}&post_type=post`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}

		let $ = cheerio.load(body);
		//FILM1
		var film1 = $('div.postbody > div > div.right > div > ul > li:nth-child(1)').children();
		var judulfim1 = film1.find('a').text();
		var gambarfilm1 = film1.find('div.thumb img').attr('src');
		var linkfilm1 = film1.find('a').attr('href');
		var rilisfilm1 = film1.find('div.dtl > span > span > span:nth-child(1)').text();

		//FILM2
		var film2 = $('div.postbody > div > div.right > div > ul > li:nth-child(2)').children();
		var judulfim2 = film2.find('a').text();
		var gambarfilm2 = film2.find('div.thumb img').attr('src');
		var linkfilm2 = film2.find('a').attr('href');
		var rilisfilm2 = film2.find('div.dtl > span > span > span:nth-child(1)').text();

		//FILM3
		var film3 = $('div.postbody > div > div.right > div > ul > li:nth-child(3)').children();
		var judulfim3 = film3.find('a').text();
		var gambarfilm3 = film3.find('div.thumb img').attr('src');
		var linkfilm3 = film3.find('a').attr('href');
		var rilisfilm3 = film3.find('div.dtl > span > span > span:nth-child(1)').text();

		console.log(judulfim1+'\n'+gambarfilm1+'\n'+linkfilm1+'\n'+rilisfilm1)
		console.log(judulfim2+'\n'+gambarfilm2+'\n'+linkfilm2+'\n'+rilisfilm2)
		console.log(judulfim3+'\n'+gambarfilm3+'\n'+linkfilm3+'\n'+rilisfilm3)
		//console.log(gambarfilm1)
		//console.log(linkfilm1)
		//console.log(rilisfilm1)
		//message.channel.send(gambarfilm1)

		let embed1 = new Discord.RichEmbed()
			.setTitle(judulfim1)
			.setImage(gambarfilm1)
			.setColor('#f44265')
			.setURL(linkfilm1)
			.setTimestamp()
			.addField('Rilis: ', rilisfilm1);
			message.channel.send(embed1)

		let embed2 = new Discord.RichEmbed()
			.setTitle(judulfim2)
			.setImage(gambarfilm2)
			.setColor('#f44265')
			.setURL(linkfilm2)
			.setTimestamp()
			.addField('Rilis: ', rilisfilm2);
			message.channel.send(embed2)

		let embed3 = new Discord.RichEmbed()
			.setTitle(judulfim3)
			.setImage(gambarfilm3)
			.setColor('#f44265')
			.setURL(linkfilm3)
			.setTimestamp()
			.addField('Rilis: ', rilisfilm3);
			message.channel.send(embed3)
	})
	
	
}

module.exports.help = {
	name: "opzlover"
}

//#content > div.postbody > div > div.right > div > ul > li:nth-child(1)
//#content > div.postbody > div > div.right > div > ul > li:nth-child(1) > div.thumb > a > img
//#content > div.postbody > div > div.right > div > ul > li:nth-child(1) > div.dtl > span > span > span:nth-child(1)
//<a href="https://www.google.com">I'm an inline-style link</a>