const Discord = module.require('discord.js');
const fs = module.require('fs');

module.exports.run = async (bot, message, args) => {

	message.reply('Pong!!')
	var fake = new Date();
	var time = `${fake.getHours()} ${fake.getMinutes()} ${fake.getSeconds()} at ${fake.getDate()} ${fake.getMonth() +1} ${fake.getFullYear()}`
	var msg2 = `${message.author.username} ${message.content} ${time}`+'\r\n'
	fs.appendFile('report.json', msg2, function(err) {
		if (err) throw err;
	})

}

module.exports.help = {
	name: "ping"
}
