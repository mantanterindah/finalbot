const Discord = module.require('discord.js');
const cheerio = module.require('cheerio');
const request = module.require('request');

module.exports.run = async (bot, message, args) => {
	request(`https://db.idrowiki.org/klasik/item/search/name/${args}`, function(err, resp, body) {
		if (err) {
			console.log(err)
		}
		//NAMA ITEM + URL LANJUTAN
		let $ = cheerio.load(body);

		$('td.Table_Content.ItemList_Name_Content').each(function(index) {
			var namanya = $(this).find('a').text();
			var linknya = $(this).find('a').attr('href');

			
			message.channel.send("**"+namanya+"**"+"  "+linknya)

		
		})
	})



	

}

module.exports.help = {
	name: "item"
}

//'.ItemInfo_DropList_Table'