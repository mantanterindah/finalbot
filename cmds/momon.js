const Discord = module.require('discord.js');
const cheerio = module.require('cheerio');
const request = module.require('request');


module.exports.run = async (bot, message, args) => {
	request(`https://db.idrowiki.org/klasik/monster/search/name/${args}`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}

		let $ = cheerio.load(body);

		$('td.Table_Content.MobInfo_Value_Monster').each(function(index) {
			var namanya = $(this).find('a').text();
			var linknya = $(this).find('a').attr('href');



				request(linknya, function(err, resp, body) {
					if (err) {
						console.log(err)
				}
					let $ = cheerio.load(body)
					//Gambarmomon
					var gambar = $('.MobInfo_Info_Wrapper').each(function(i, element) {
						var gambarnya = $(this).find('.MobInfo_Image img').attr('src');
						//console.log(gambarnya)
					//DropanMomon	
						

							message.channel.send("**"+namanya+"**"+"   "+linknya);
					})
					
				})

		});
	});
}

module.exports.help = {
	name: "momon"
}

//body > center > div > div.RDMS_Content > div.MobInfo_List > table > tbody > tr:nth-child(2) > td.Table_Content.MobInfo_Value_Monster
//body > center > div > div.RDMS_Content > div.MobInfo_Spawn > table:nth-child(2)
//body > center > div > div.RDMS_Content > div.MobInfo_Spawn > table:nth-child(3)
//body > center > div > div.RDMS_Content > div.MobInfo_Spawn > table:nth-child(2) > tbody > tr:nth-child(1) > td