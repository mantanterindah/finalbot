const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.reply('Wait a Sec ...')

	let embed1 = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-WEAPON')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Drake', 'Perfect damage on any size monster. Enables the use of [Water Ball] lvl 4.')
		.addField('Kiel D-01', 'Add a 10% chance of gaining 5% of the damage inflicted upon an enemy as SP with each attack. Add a 10% chance of decreasing enemy SP amount by 5% when attacking.')
		.addField('Doppelganger', 'Max ASPD +25%')
		.addField('Dracula', 'Receive 4% less damage from Small, Medium and Large size monster. Drain 1500 HP as the weapon is unequipped')
		.addField('Incantation Samurai', 'ATK +65')
		.addField('Sniper Cecil', 'Reduces HP recovery by 10%. Add a 10% chance of gaining 20% of the damage inflicted on an enemy as HP with each attack')
		.addField('Thanatos', 'Ignores 30% of all enemy DEF. DEF - 15, Flee - 15.')
		.addField('Turtle General', 'Increases damage inflicted on all enemies by 20%.')
		.addField('Whitesmith Howard', 'Add a 1% chance of casting Level 5 Meltdown while attacking.')
		.addField('Valkyrie Randgris', 'Add a 4% chance of auto casting Level 1 Dispell when attacking. Increases damage inflicted on all enemies by 10%.')
		.addField('Alligator', 'CRIT +12.');
		message.channel.send(embed1);

	let embed2 = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-ARMOR')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Assassin Cross Eremes', 'Add a 6% chance of inflicting Level 3 Critical Wounds on an enemy when the user receives Physical Damage.')
		.addField('Detale', 'Add a 5% chance of auto casting Level 1 Land Protector around the user when the user receives Magical Damage. MDEF - 20.')
		.addField('RSX 0806', 'Cannot be knocked back. VIT + 3.')
		.addField('Garm (Hatii)', 'DEF + 10.')
		.addField('Ghostring', 'Enchant an Armor with the Ghost Property. HP Recovery - 25%. Does not work in PvM.')
		.addField('Gloom Under Night', 'Increases damage inflicted on Holy Property, Shadow Property, Angel monster, Demon monster by 20%.')
		.addField('Ktullanux', 'Increases damage inflicted on Fire Property monsters by 20%. Add a 3% chance of auto casting Level 5 Frost Nova on an enemy when the user receives Physical Damage.');
		message.channel.send(embed2);

	let embed3 = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-SHIELD')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Golden Thief Bug', 'Reduce magic damage by 70%, Nullify all supportive skills, that target the owner at the cost of doubling SP Consumption cost when using skills.')
		.addField('Maya ', 'MDEF + 20. Enables the use of [Auto-Guard] lvl 2.')
		//.addField('', '')
		//.addField('', '')
		.addField('Toad ', 'Reduce 35% of damage taken from Demi-Human monsters.');
		message.channel.send(embed3);

	let embed4 = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-HEADGEAR')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Bloody Knight', 'ATK +30. Add a 2% chance to cause External Bleeding on an enemy when attacking.')
		.addField('Dark Illusion', 'Maximum HP and SP - 10%. Reduce Casting Time by 5%. [+ Dark Lord] Reduce Casting Time by an additional 5%. Increase Maximum HP/SP by an additional 20%.')
		.addField('Evil Snake Lord', '50% resistance to Confusion and Stone Curse. INT +3.')
		.addField('Gryphon', 'CRIT +20. For every 11 Base STR the critical bonus is reduced by 2, and you receive an additional 2 LUK.')
		.addField('Lord Knight Seyren', 'Add a 5% chance to autocast Level 5 Joint Beat when attacking.')
		.addField('Stormy Knight', 'FLEE + 20.')
		.addField('Bacsojin (White Lady)', 'Increases effectiveness of your Heal, Sanctuary and Potion Pitcher by 20%. Increases SP taken by all skills by 15%. Receive 10% more damage from Demi-Human monsters.')
		.addField('High Wizard Kathryne', 'Ignores 20% MDEF of normal monsters.')
		.addField('Maya Purple', 'Enables the use of [Intravision]. Intravision allows you to see hidden enemies for a duration of 10 seconds. The cooldown is 60 seconds.')
		.addField('Vesper', 'Ignores 20% MDEF of Boss-type monsters.');
		message.channel.send(embed4);
		
	let embed5 = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-FOOTGEAR')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Eddga', 'Permanent Endure effect as long as the footgear is equipped. MaxHP + 12%.')
		.addField('General Egnigem Cenia', 'Every 10 seconds, you recover 100 HP and 100 SP. Increases Maximum HP and Maximum SP by 20%.')
		.addField('Dark Lord', 'Maximum HP + 50%. [+ Dark Illusion] Reduce Casting Time by an additional 5%. Maximum HP/SP + 20%.')
		.addField('Lady Tanee', 'Maximum HP + 30%. +1% additional MaxHP per 8 base AGI. +1% ATK/MATK per 8 base VIT. +1 Perfect Dodge per 8 base LUK.')
		.addField('Moonlight Flower', 'DEX + 5. MaxHP + 25%. Enables fast movement all the time.')
		.addField('Mysteltainn', 'FLEE + 20, ATK + 30.')
		.addField('Gargoyle', 'DEX + 5.');
		message.channel.send(embed5);		
	
	
}

module.exports.help = {
	name: "guide-costumecard"
}