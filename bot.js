const botsettings = require('./botsettings.json');
const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
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

bot.on('ready', () => {
    const Games = [`Ragnarok Retro`, `Age of Ragnarok`]
    setInterval(() => { bot.user.setActivity(`${Games[Math.floor(Math.random() * Games.length)] }`) }, 30000)
});

bot.on('message', message => {
//	  if (message.author.id !== '367980665553027075') return;
	if (message.author.id === '367980665553027075') return; //optimus
	if (message.author.id === '309800585438298122') return; //tnz
	if (message.author.id === '386439077538562061') return; //ardi
	if (message.author.id === '409909129235136513') return; //angga
	if (message.author.id === '713049806637105302') return; //samid
	if (message.author.id === '890822583505801246') return; //heimdall
	if (message.author.id === '320192042049339405') return; //cumi
	if (message.author.id === '338135213873954816') return; //mamen

	const SwearWords3 = ["RAZIA!!"]
	
	const rand1 = [
	'https://cdn.discordapp.com/attachments/926185554427645952/1004202581180027042/unknown.png',
	'https://cdn.discordapp.com/attachments/926185554427645952/1004202784834461756/unknown.png',
	'https://cdn.discordapp.com/attachments/926185554427645952/1004203038505975898/unknown.png',
	'https://cdn.discordapp.com/attachments/926185554427645952/1004203441133998140/unknown.png',
	'https://cdn.discordapp.com/attachments/926185554427645952/1004204225477218385/unknown.png',
	'https://cdn.discordapp.com/attachments/926185554427645952/1004204499709202432/unknown.png',
	];
	
	const asu = rand1[Math.floor(Math.random() * rand1.length)];
	
	if (SwearWords3.some(word => message.content.includes(word))) {
		const id = "850151563036590121";
		const channel = bot.channels.get(id);
		channel.send(message.content , {file: asu})
	}

});

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
