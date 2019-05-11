const botsettings = require('./botsettings.json');
const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
//const snekfetch = require('snekfetch');
const prefix = botsettings.prefix;
const fs = require('fs')


const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
	if(err) console.log(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("Bingung mw Load Apaan gw??");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`)

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} Loaded!`);
		bot.commands.set(props.help.name, props);
	})
});

bot.on('ready', async () => {
	console.log('Bot Ready!')
	bot.commands.set(bot.command);
});

bot.on('message', message => {
	console.log(`${message.author.tag}: ${message.content} at ${message.createdTimestamp}`);
	if (message.channel.bot) return;
});

//bot.on('ready', () => {
//    const Games = [`Warung Kopi Apenk`, `Enigma Seal`]
//    setInterval(() => { bot.user.setGame(`${Games[Math.floor(Math.random() * Games.length)] }`) }, 30000)
//});

//bot.on('message', message => {
//	//if (message.author.id !== '287824903002914816') return;
//	if (message.author.id === '372911417939984394') return; //desepticon
//	if (message.author.id === '381582057505292298') return; //DummyBot
//	if (message.author.id === '367980665553027075') return; //optimus
//	if (message.author.id === '309800585438298122') return; //tnz
//	if (message.author.id === '309003371531075594') return; //kucay
//	if (message.author.id === '306461555510345729') return; //ntong
//	if (message.author.id === '286145687681368064') return; //dije
//	const SwearWords3 = ["J>", "j>", "WTS>", "wts>", "WTS", "wts", "Sell", "sell"]
//	
//	const rand1 = [
//	'https://cdn.discordapp.com/attachments/496692039732166667/496719375089401856/unknown.png',
//	'https://cdn.discordapp.com/attachments/496692039732166667/496719893144535042/unknown.png',
//	'https://cdn.discordapp.com/attachments/496692039732166667/496720192232095744/unknown.png',
//	];
//	
//	const asu = rand1[Math.floor(Math.random() * rand1.length)];
//	
//	if (SwearWords3.some(word => message.content.includes(word))) {
//		const id = "488533499385741312";
//		const channel = bot.channels.get(id);
//		channel.send('Gambar Hanya Pemanis', {file: asu})
//	}
//
//});

//bot.on('guildMemberAdd', member => {
//	const id = "425667839605866508"
//	const channel = bot.channels.get(id);
//	if (!channel) return;
//	channel.send(`**Welcome <@${member.id}> to Ragnarok Discord Channel Have a Nice Day! \n Please Read at <#428175505506959400> \n <@!358424962572353536> Enjoy !!!**`)	
//});

//bot.on('guildMemberRemove', member => {
//	const id = "425667839605866508"
//	const channel = bot.channels.get(id);
//	if (!channel) return;
//	channel.send(`**Aw  <@${member.id}> has Leave get well soon !! \n <@!358424962572353536> **`)	
//});

bot.on('message', async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	if(message.channel.id === '371380150773743640') return;
	if (message.guild.id === '425665765300240417') return; //Komunitas RO

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1).join(' ');



	//if(!commands.startsWith(prefix)) return;

	let cmd = bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(bot, message, args);

	
});

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
