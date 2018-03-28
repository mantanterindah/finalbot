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
					//InfoMomon
					var momonnya = $('div.RDMS_PageTitle').text();
					var gambar = $('div.MobInfo_Image img').attr('src');
					var drop = $('div.MobInfo_Drop').children();
					var drop1 = drop.find('div.MobInfo_Drop_Name, div.MobInfo_Drop_Rate').text();
					var lokasi = $('div.MobInfo_Spawn').children();
					var lokasi1 = lokasi.find('td.Table_Title.MobInfo_Spawn_MapName,div.MobInfo_Spawn_Info').text();

					message.channel.send(gambar+'\n'+"```"+"js"+'\n'+momonnya+'\n'+drop1+'\n'+lokasi1+"```")
					
				})

		});
	});
}

module.exports.help = {
	name: "momon"
}

