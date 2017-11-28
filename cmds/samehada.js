const Discord = module.require('discord.js')
const request = module.require('request');
const cheerio = module.require('cheerio');
const url = 'https://samehadaku.net/'

module.exports.run = async (bot, message, args) => {
	let msg = await message.reply("Bentar Boss")
	
	request(`https://www.samehadaku.net//?s=${args} ${args}`, function(err, resp, body) {
		if(err) {
			console.log(err)
		}

		var $ = cheerio.load(body);

		$('div.mag-box-container').each(function(index) {
				var judul = $(this).find('ul > li:nth-child(1) .post-title').text();
				var link   = $(this).find('ul > li:nth-child(1) a').attr('href');
				var gambar = $(this).find('ul > li:nth-child(1) img').attr('src');
				var judul1 = $(this).find('ul > li:nth-child(2) .post-title').text();
				var link1   = $(this).find('ul > li:nth-child(2) a').attr('href');
				var gambar1 = $(this).find('ul > li:nth-child(2) img').attr('src');
				var judul2 = $(this).find('ul > li:nth-child(3) .post-title').text();
				var link2   = $(this).find('ul > li:nth-child(3) a').attr('href');
				var gambar2 = $(this).find('ul > li:nth-child(3) img').attr('src');
				var judul3 = $(this).find('ul > li:nth-child(4) .post-title').text();
				var link3   = $(this).find('ul > li:nth-child(4) a').attr('href');
				var gambar3 = $(this).find('ul > li:nth-child(4) img').attr('src');
				var judul4 = $(this).find('ul > li:nth-child(5) .post-title').text();
				var link4   = $(this).find('ul > li:nth-child(5) a').attr('href');
				var gambar4 = $(this).find('ul > li:nth-child(5) img').attr('src');


				console.log(judul)
				console.log(link)
				console.log(gambar)

				let embed = new Discord.RichEmbed()
					.setTitle(judul)
					.setColor("#9B59B6")
					.setThumbnail(gambar)
					.addField('Link:', link)


				message.channel.send(embed)

				let embed1 = new Discord.RichEmbed()
					.setTitle(judul1)
					.setColor("#734004")
					.setThumbnail(gambar1)
					.addField('Link:', link1)


				message.channel.send(embed1)


				let embed2 = new Discord.RichEmbed()
					.setTitle(judul2)
					.setColor("#C4072D")
					.setThumbnail(gambar2)
					.addField('Link:', link2)


				message.channel.send(embed2)


				let embed3 = new Discord.RichEmbed()
					.setTitle(judul3)
					.setColor("#201ACE")
					.setThumbnail(gambar3)
					.addField('Link:', link3)


				message.channel.send(embed3)


				let embed4 = new Discord.RichEmbed()
					.setTitle(judul4)
					.setColor("#09A309")
					.setThumbnail(gambar4)
					.addField('Link:', link4)


				message.channel.send(embed4);
		})

		msg.delete();
	})
}

module.exports.help = {
	name: "meha"
}
//#the-post > div.entry-content.entry.clearfix > div:nth-child(3) > div:nth-child(14)