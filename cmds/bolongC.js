const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
	message.channel.send({embed: {
		color: 3447003,
		author: {
			name: bot.user.username,
			icon_url: bot.user.avatarURL
		},
		title: 'Weapon Class C',
		fields: [{
			name: "Trident [2]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Seiyablem"
		},
		{
			name: "Rope [3]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Seiyablem"
		},
		{
			name: "Violin [3]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Seiyablem"
		},
		{
			name: "Book of Mother Earth [0]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Leabem"
		},
		{
			name: "Book of Billows [0]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Leabem"
		},
		{
			name: "Book Gust of Wind [0]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Leabem"
		},
		{
			name: "Book of Blazing Sun [0]",
			value: "Zeny 200k | Rate 20% | Require Phracon 10x | Npc: Leabem"
		},
		],
		timestamp: new Date(),
		Footer: {
			icon_url: bot.user.avatarURL,
			text: "Raja Judi"
		}
	}})

	
}

module.exports.help = {
	name: "judiweapon-c"
}