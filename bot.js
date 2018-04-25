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

bot.on('message', message => {
	//if (message.author.id !== '287824903002914816') return;
	if (message.author.id === '381582057505292298') return;
	if (message.author.id === '309800585438298122') return; //tnz
	if (message.author.id === '309003371531075594') return; //kucay
	if (message.author.id === '306461555510345729') return; //ntong
	if (message.author.id === '286145687681368064') return; //dije
	const SwearWords3 = ["keciduk"]
	
	const rand1 = [
	'https://cdn.discordapp.com/attachments/432589912177508352/437194170768031744/roy1.png',
	'https://cdn.discordapp.com/attachments/432589912177508352/437197882249183243/kocak1.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437197981217980417/kaget3.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198118665191444/kaget2.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198295773741056/kaget1.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198415315599380/cidukwc.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198495833653248/cidukpolpp.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198659017375754/cidukpolisi.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198840685395968/cidukmesjid.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437198959388393473/cidukkucing.jpg',
	'https://cdn.discordapp.com/attachments/432589912177508352/437199046377996288/cidukguru.jpg',
	];
	
	const asu = rand1[Math.floor(Math.random() * rand1.length)];
	
	if (SwearWords3.some(word => message.content.includes(word))) {
		const id = "371380150773743640";
		const channel = bot.channels.get(id);
		channel.send(`${message.author.username} \n ${message.content} \n`, {file: asu})
	}

});

bot.on('guildMemberAdd', member => {
	const id = "425667839605866508"
	const channel = bot.channels.get(id);
	if (!channel) return;
	channel.send(`**Welcome <@${member.id}> to Ragnarok Discord Channel Have a Nice Day! \n Please Read at <#428175505506959400> \n <@!358424962572353536> Enjoy !!!**`)	
});

bot.on('guildMemberRemove', member => {
	const id = "425667839605866508"
	const channel = bot.channels.get(id);
	if (!channel) return;
	channel.send(`**Aw  <@${member.id}> has Leave get well soon !! \n <@!358424962572353536> **`)	
});

bot.on('message', async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	if(message.channel.id === '371380150773743640') return;

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
