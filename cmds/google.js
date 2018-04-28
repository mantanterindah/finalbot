const Discord = module.require('discord.js');
const cheerio = module.require('cheerio');
const request = module.require('request');

module.exports.run = async (bot, message, args) => {
  
      let msg = await message.reply('Wait a Sec ...')

      request(`https://www.google.com/search?q=${args}`, function(err, resp, body) {
        if (err) {
          console.log(err)
        }

        let $ = cheerio.load(body);

            $('div.g').each(function(index) {
                var result1 = $(this).children();
                var title = result1.find('h3 a').text();
                var url = result1.find('div cite').text();
                var text = result1.find('div > span').text();

                console.log(url+'\n'+text);

                //let embed = new Discord.RichEmbed()
                  //.setTitle(title)
                  //.setURL(url)
                  //.setColor('#e0d31a')
                  //.addField('Sub Text: ', text)
                  //.setThumbnail(message.author.avatarURL)
                  //.setTimestamp();

                  //message.channel.send(embed)
		    message.channel.send("__**"+title+"**__"+'\n'+'\n'+url+'\n'+'\n'+text)

          })
      })


}
	
	


module.exports.help = {
	name: "google"
}
