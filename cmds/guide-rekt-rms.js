const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Sabar BossQyu')

	request(`http://ratemyserver.net/index.php?page=item_db&item_id=&iname=${args}&itype=-1&islot_sign=-1&islot=-1&ij%5B+%5D=-1&iju=-1&idesc=&iscript=&i_ele=-1&i_status=-1&i_race=-1&i_bonus=-1&icfix=&sort_r=0&sort_o=0&isearch=Search`, function(err, res, body) {
		if (err) {
			console.log(err)
		}

		let $ = cheerio.load(body);

			$('tbody > tr:nth-child(2) > td:nth-child(2) > center > table').each(function(index) {
				var gambar = $(this).find('tr > td:nth-child(1) img').attr('src');
				var nama = $(this).find('tr > td:nth-child(2) b').text()
				var job = $(this).find('tr:nth-child(5) > td').text()
				var desc = $(this).find('tr:nth-child(6) > td').text()
				var script = $(this).find('tr:nth-child(7) > td').text()

		
				console.log(nama)
				console.log(gambar)
				console.log(job)
				console.log(desc)
				console.log(script)

				message.channel.send('```js\n\n'+nama+'\n\n'+job+'\n\n'+desc+'\n\n'+script+'```', {file:gambar})

				//let embed = new Discord.RichEmbed()
					//.setTitle(nama)
					//.setImage()
					//.setColor('')
					//.setThumbnail(gambar)
					//.setTimestamp()
					//.addField('Available Job', job)
					//.addField('Desc', desc)
					//.addField('Script', script);
					//message.channel.send(embed);
			})
	})

	
	
	
}

module.exports.help = {
	name: "rmsitem"
}

//http://ratemyserver.net/index.php?page=item_db&item_id=&iname=figure&itype=-1&islot_sign=-1&islot=-1&ij%5B+%5D=-1&iju=-1&idesc=&iscript=&i_ele=-1&i_status=-1&i_race=-1&i_bonus=-1&icfix=&sort_r=0&sort_o=0&isearch=Search
