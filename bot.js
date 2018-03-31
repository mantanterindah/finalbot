const botsettings = require('./botsettings.json');
const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
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

bot.on('guildMemberAdd', member => {
	const id = "425667839605866508"
	const channel = bot.channels.get(id);
	if (!channel) return;
	channel.send(`**Welcome <@${member.id}> to Ragnarok Discord Channel Have a Nice Day! \n Please Read at <#428175505506959400> \n Enjoy !!!**`)	
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

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);



	//if(!commands.startsWith(prefix)) return;

	let cmd = bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(bot, message, args);

	
});

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
