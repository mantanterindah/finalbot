const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	let msg = await message.channel.send('```diff\n-Please type number what you want see\n- 1.Server Spesification\n- 2.Server Feature\n- 3.Costume Cards\n- 4.Delete Character\n- 5.VIP-Benefit\n- 6.Special Box\n- 7.Roulette Coin\n- 8.Rebirth Sytem\n- 9.Auto-Event\n- 10.Coin(Copper,Bronze,Rekt)\n- 11.Event\n- 12.Costume Recycle\n- 13.Quest Official Rektnarok```',{file: 'https://cdn.discordapp.com/attachments/432589912177508352/496297090679308288/unknown.png'})

	//let embed = new Discord.RichEmbed()
	//	.setTitle('Guide List Rektnarok')
		//.setImage()
	//	.setColor('#320ddb')
	//	.setThumbnail(bot.user.avatarURL)
	//	.setTimestamp()
	//	.addField('Server Spesification', 'do type **!guide-spesification**')
	//	.addField('Server Feature', 'do type **!guide-feature**')
	//	.addField('Costume Card','do type **!guide-costumecard**')
	//	.addField('How to Delete Char','do type **!guide-deletechar**')
	//	.addField('Costume Recycle','do type **!guide-costumerecycle**')
	//	.addField('VIP Member Benefit','do type **!guide-vipbenefit**')
	//	.addField('Rektnarok Special Box','do type **!guide-specialbox**')
	//	.addField('Roulette Coin Function','do type **!guide-roulette**')
	//	.addField('Rektnarok Rebirth System','do type **!guide-rebirth**')
	//	.addField('Auto Event in Game','do type **!guide-autoevent**')
	//	.addField('Coin(Bronze,Copper,Rekt)','do type **!guide-coin**');
	//	message.channel.send(embed);
	
	let embedautoevent = new Discord.RichEmbed()
		.setTitle('Auto Event/Event List')
		//.setImage()
		.setColor('#e5e512')
		//.setThumbnail()
		.setTimestamp()
		.addField('Reward', 'Auto Event Box :\nRoullette Bronze Coin, Bronze Coin, Roullette Silver Coin, Copper Coin, Mastela Fruit, Megaphone, Speed Potion, All Dish Cash +5')
		.addField('Disguise', 'Kalian harus cepet-cepetan menebak nama monster dengan benar.Event ini terdiri dari 10 Ronde.\nJadwal : Setiap hari pukul 12 AM, 4 AM, 8 AM, 12 PM, 4 PM, 8 PM.\nReward : 1x Auto Event Box per Round')
		.addField('Cluckers', 'Kalian harus mengclick NPC Ayam yang ada diprontera hingga rewardnya keluar.\nSaat mengclick kalian akan kemungkinan terkena berbagai macam status dan nuke.\nJadwal : 10 AM, 6 PM, 10 PM\nReward : 7x Auto Event Box per Event.')
		.addField('Find the Crystal', 'Saat pengumuman baca baik baik Crystal akan spawn di kota apa.\nKota yang dipakai hanya prontera, geffen, hugel, izlude, dan comodo.\nSpawn akan random dari 5 - 15 monster per event.\nJadwal : 1.30 PM, 5 PM dan 9 PM\nReward : 1x Auto Event Box per crystal yang kamu kill.')
		.addField('Rektnarok Wiki Event', 'Event ini bertujuan untuk menguji wawasan kalian tentang RO.\nSaat event dimulai kalian harus berada didekat NPC ini.\nSaat NPC berubah menjadi monster klik NPC dan Pilih Write Answer dan jawablah pertanyaan yang diajukan dengan benar.\nHanya 5 Ronde Per Event.\nJadwal : 2.30 AM, 5.30 AM, 8.30 AM, 11.30 AM, 2.30 PM, 5.30 PM, 8.30 PM, 11.30 PM\nReward : 1x Auto Event Box per Round.');
		//message.channel.send(embed);
	let embedcoin = new Discord.RichEmbed()
		.setTitle('Guide Copper/bronze/Rekt Coin')
		//.setImage()
		.setColor('#24d6d6')
		//.setThumbnail()
		.setTimestamp()
		.addField('BRONZE COIN', 'Bronze coin adalah coin yang digunakan untuk membeli barang-barang rental dari NPC Imma the Rentalers di tengah prontera.\nMendapatkannya bisa dari Drop Global Monster,mengikuti auto event / event by gm, atau memenangkan roullette feature.\nItem ini tidak bisa ditransaksikan.')
		.addField('COPPER COIN', 'Copper coin adalah coin yang digunakan untuk ditukarkan menjadi rekt coin jika sudah mencapai target tertentu.\nDefaultnya exchanger rate adalah 50 copper coin -> 1 rekt coin.\nCoin ini hanya bisa didapatkan dari Drop Global Monster, mengikuti auto event / event by gm, atau memenangkan roullette feature.\nItem ini tidak bisa ditransaksikan.')
		.addField('REKT COIN', 'Rekt coin adalah coin yang digunakan untuk membeli barang di Rekt Coin shop.\nItem ini hanya bisa didapatkan setelah menukarkan Copper Coin sesuai rate exchangenya.\nItem ini bisa ditransaksikan dan dijual didalam vending.');
		//message.channel.send(embed);

	
	let embedcardweapon = new Discord.RichEmbed()
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
		//message.channel.send(embed1);

	let embedcardarmor = new Discord.RichEmbed()
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
		//message.channel.send(embed2);

	let embedcardshield = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-SHIELD')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Golden Thief Bug', 'Reduce magic damage by 70%, Nullify all supportive skills, that target the owner at the cost of doubling SP Consumption cost when using skills.')
		.addField('Maya ', 'MDEF + 20. Enables the use of [Auto-Guard] lvl 2.')
		//.addField('', '')
		//.addField('', '')
		.addField('Toad','Reduce 35% of damage taken from Demi-Human monsters.');
		//message.channel.send(embed3);

	let embedcardmanteu = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-MANTEU')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Lord of Death','VIT + 10. Receive 10% less damage from Small, Medium and Large size monster.')
		//.addField('','')
		//.addField('', '')
		//.addField('', '')
		.addField('Stem Worm','DEX + 5.');
		//message.channel.send(embed3);

	let embedcardacc = new Discord.RichEmbed()
		.setTitle('Costume Cards Effect-ACC')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('High Priest Margaretha','Every time you receive Magical or Physical Damage, there a small chance to auto-cast Level 1 Assumptio on yourself.')
		.addField('Ifrit','ATK & HIT + (JobLvl / 5). CRIT + (JobLvl / 10).')
		.addField('Osiris','Resurrect with full HP/SP. Enables the use of [Increase Agility] lvl 5.')
		//.addField('', '')
		.addField('Sting','DEX + 4.');
		//message.channel.send(embed3);

	let embedcardheadgear = new Discord.RichEmbed()
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
		//message.channel.send(embed4);
		
	let embedcardfootgear = new Discord.RichEmbed()
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
		//message.channel.send(embed5);

	
	let embedcostumerecycle = new Discord.RichEmbed()
		.setTitle('Costume Recycle')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489846940759228436/costumrec.jpg')
		.setColor('#0eefd9')
		//.setThumbnail()
		.setTimestamp()
		.addField('Syarat Menukarkan Costume :', '1. Bawalah costume yang ingin dijadikan Sampah Point.\n2. Bicaralah kepada Orang Kaya dan pilih ask more information.\n3. Lalu pilih tukarkan costume.\n4. Nanti anda disuruh menyebut nama costume yang diinginkan (Harus sesuai database ya List penamaan akan diupdate dibawah)\n5. Jika sudah costume akan hilang dan anda akan mendapatkan Sampah Point sesuai costume yang dibawa.')
		//.addField('', '')
		.addField('Note :', '- NPC ini akan langsung mendelete semua costume yang kamu tulis diinventorymu.\n- 1x Costume bernilai 1 Sampah Point.\n- Untuk menukarkan menjadi box lagi, bicaralah lagi ke npc tersebut lalu pilihlah opsi yang bawah setelah ask more information.\n- 3x Sampah Point untuk 1x Buah Costume Box September 2018')
		.addField('List Nama Recycle V1 :','Costume Archangel Wing penulisannya adalah ``Archangel Wing``\nCostume Feather Fluttering penulisannya adalah ``Costume Fluttering Feather``\nCostume Blessing of Angel penulisannya adalah ``Costume Blessing of Angel``\nCostume Gold Tones penulisannya adalah ``Costume Tone of Gold``\nCostume Monochrome Cap penulisannya adalah ``Costume Monochrome Cap``\nCostume Gryphon Hairband penulisannya adalah ``Costume Gryphon Hairband``\nCostume Monk Crown penulisannya adalah ``Costume Monk Crown``\nCostume Yellow Hat penulisannya adalah ``Yellow Hat``\nCostume Baseball Cap penulisannya adalah ``Costume Baseball Cap``\nCostume Rainbow Eggshell penulisannya adalah ``Costume Rainbow Eggshell``Costume Panda Hat penulisannya adalah ``Costume Panda Cap``\nCostume Kitty Band penulisannya adalah ``Costume Kitty Band``\nCostume Beanie penulisannya adalah ``Costume Beanie``')
		.addField('List Nama Recycle V2 : ','Costume Poring Soap Pipe penulisannya adalah ``Costume Poring Soap Pipe``\nCostume Flutter Butterfly Wing penulisannya adalah ``C Flutter Butterfly``\nAura of Sprinkle Flame penulisannya adalah ``Flame Sprinkle Bottom``\nAura of Tik Tok penulisannya adalah ``TikTok Aura Top``\nFlame Aura Top penulisannya adalah ``Flame Aura Top``\nFlame Aura Middle penulisannya adalah ``Flame Aura Middle``\nFlame Aura Bottom penulisannya adalah ``Flame Aura Bottom``\nRO Kok Batman 1 penulisannya adalah ``RO Kok Batman-1``\nRO Kok Batman 2 penulisannya adalah ``RO Kok Batman-2``\nRO Kok Batman 3 penulisannya adalah ``RO Kok Batman-3``\nCostume Bankruptcy Mask penulisannya adalah ``Costume Bankruptcy Mask``\nCostume Black Musang Hat penulisannya adalah ``Costume Black Musang Hat``')
		.addField('List Nama Recycle V2 :','Costume Blazing Soul penulisannya adalah ``Costume Blazing Soul``\nCostume 3D Glasses penulisannya adalah ``Costume 3D Glasses``\nCostume Baby Dragon Hat penulisannya adalah ``Costume Baby Dragon Hat``\nCostume Ascension Black Dragon penulisannya adalah ``Costume Ascension Black Dragon``\nCostume Bankruptcy of Heart penulisannya adalah ``Costume Bankruptcy of Heart``\nCostume Frog King Hat penulisannya adalah ``Costume Frog King Hat``\nCostume Minstrel Songs ``Hat penulisannya adalah Costume Minstrel Songs Hat``\nCostume Abysmal Knight Helm penulisannya adalah ``Costume Abysmal Knight Helm``\nCostume Black Devil Mask penulisannya adalah ``Costume Black Devil Mask``');
		//message.channel.send(embed);

	let embeddelchar = new Discord.RichEmbed()
		.setTitle('Guide How To Delete Character:')
		//.setImage()
		.setColor('#e0dc0d')
		//.setThumbnail()
		.setTimestamp()
		.addField('Syarat:', '- Character tidak ada diguild / party\n- Kalau bisa jangan membawa item diinventory.')
		//.addField('', '')
		.addField('Caranya :', '- Klik Delete Reservation saat di character selection screen.\n- Nanti akan muncul tulisan 9 month blablabla, abaikan saja itu bug display.\n- Tunggu hingga 5000 detik atau sekitar 2 jam kurang.\n- Setelah itu nanti warna time deletenya akan berwarna biru.\n- Tekan lagi tombol delete.\n- Saat dimintain Delete password tulis Tanggal Lahirmu dalam Format YY-MM-DD.\n- Misal Tanggal Lahirmu 1 januari 1990 maka ditulis 90-01-01.');
		//message.channel.send(embed);

	let embedfeature = new Discord.RichEmbed()
		.setTitle(':: REKTNAROK Server Featured ::')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Featured :', 'Job Rebirth / 2nd Transendent\nCustom Card Effect\nDisabled Custom Item\nEasy Jobchange using Job Master NPC\nWarp NPC for skip the walk time\nHeadgear Quest with Custom Story\nCostume Quest with Custom Story\nBalanced Donation Item (kRO,iRO,idRO Official Headgears)\nWeekly Special EXP and DROP Event\nClan System\nAuto Event\nAttendance Daily Feature\nDaily Login Reward\nRoulette Feature\nCustom Raid Dungeon (Soon)\nBuy Market Official\nVending Restricted Area (Agar Market Rapi dan Enak Dilihat)\nStylish NPC (Tersedia Premium dan Normal Stylish)\nMax Guild 34/34 Member')
		.addField('Player Commands :', '@commands\n@rates\n@mi (VIP User)\n@time\n@whereis\n@autotrade')
		.addField('Disabled Feature :', '3rd Job / Expanded Job Lanjutan\nCustom Item\nMall Equipment');
		//message.channel.send(embed);

	let embedrebirth = new Discord.RichEmbed()
		.setTitle('Guide Rebirth Quest')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489846940759228436/costumrec.jpg')
		.setColor('#e20db1')
		.setThumbnail('https://cdn.discordapp.com/attachments/432589912177508352/489856515935567873/unknown.png')
		.setTimestamp()
		//.addField('', '')
		.addField('Requirement Akses NPC ini :', '- Job 2nd atau dibawahnya\n- Level 99')
		.addField('Requirement Bahan :', '- 1x Mystic Frozen\n- 1x Flame Heart\n- 1x Rough Wind\n- 1x Great Nature\n- 1x Red Blood\n- 1x Crystal Blue\n- 1x Wind of Verdure\n- 1x Green Live\n Zeny 1.285.000z')
		.addField('Note :', 'Usahakan Jangan Dc/Pilih Char Setelah Memberikan Heroic Stone pada npc Jobchanger')
		.addField('Rebirth Quest', 'Di Rektnarok untuk rebirth menjadi transendent class.\nKamu membutuhkan sebuah batu dewa bernama Heroic Stone.\nUntuk mendapatkannya kamu harus meminta kepada Siti Badriah di Stylish House.');
		//message.channel.send(embed);

	let embedroulette = new Discord.RichEmbed()
		.setTitle('Roulette Coin Guide')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489853739276959761/roulette.jpg')
		.setColor('#e20db1')
		//.setThumbnail()
		.setTimestamp()
		.addField('Roullette Bronze Coin :', '- Dimulai dari baris 1\n- Membutuhkan 1 Bronze Coin untuk sekali main (Double klik dulu coinnya sebelum memencet tombol roullette)\n- Coin bisa didapatkan dari Drop Global Monster, Auto Event / Event dari GM.')
		.addField('Roullette Silver Coin :', '- Dimulai dari baris ke 3\n- Membutuhkan 10 Roullette Silver Coin untuk sekali main (Double klik sebanyak 10 coin sebelum memencet tombol roullette)\n- Coin bisa didapatkan dari Drop Global Monster, Auto Event / Event dari GM.')
		.addField('Roullette Gold Coin :', '- Dimulai dari 3 baris sebelum baris paling atas.\n- Membutuhkan 10 Roullette Gold Coin untuk sekali main (Double klik sebanyak 10 coin sebelum memencet tombol roullette)\n- Coin hanya bisa didapatkan dari bermain Roullette /Event dari GM.');
		//message.channel.send(embed);

	let embedspecialbox = new Discord.RichEmbed()
		.setTitle('Special Box')
		//.setImage()
		.setColor('#0e1acc')
		//.setThumbnail()
		.setTimestamp()
		.addField('Attendance Box', 'Muffler [1]\nMink Coat [1]\nJacket [1]\nFormal Suit [1]\nManteau [1]\nShoes [1]\nSandals [1]\nBoots [1]\nGuard [1]\nBuckler [1]\nShield [1]\nHood [1]\nNinja Suit [1]\nThief Clothes [1]\nDamascus [2]\nInfiltrator\nTwo Handed Sword [2]\nBloody Axe\nWizardy Staff\nGakkung [2]\nChain [3]\nCostume : Hopping Rabbit\nCostume : Black Khalitzburg Knight Helm\nCostume : Baby Penguin\nCostume : Twin Margaret\nCostume : Cat Ears Cape\nCostume : Water Spell Caster')
		.addField('Special Gift Box', 'Very Rare :\n\nCostume Bloody Wing (Costume Manteau)\nAura Butterfly\nSeptember Costume Box\nRekt Coin\n\nRare :\nEnrich Elunium\nEnrich Oridecon\nGym Pass\nVIP 3 Days\nAll Dish Cash +7 Status\nCopper Coin\n\n\nNormal :\nSemua item sampah yang ada di dalam Old Blue Box biasa.\nSemua item sampah yang ada di dalam gift box biasa')
		.addField('Monthly Costume Box October', 'Non Rare :\nCostume Cow Hat 3\nCostume Aura Quartz\nCostume Silk Hat of Earth\nCostume School Creatura Hat\nCostume Coppola\n\n\nRare :\nCostume Burning Sun Lower\nCostume Leopard Ear Hat\nCostume Bragi Wing Ears\nCostume Coiledup Snake Hat\nCostume Metal Dragon Helm\n\nVery Rare\nCostume PiggyBack\nCostume Vicious Aura Mind\nCostume Poring Muffler');
		//message.channel.send(embed);

	let embedspesification = new Discord.RichEmbed()
		.setTitle('::Rektnarok Server Spesification::')
		//.setImage()
		.setColor('#17e008')
		.setThumbnail(bot.user.avatarURL)
		.setTimestamp()
		.addField('Detail Information', 'EXP Rate = 25x / 25x / 5x\nDrop Normal Monster = 3x\nDrop Normal Card = 7x\nDrop Boss Monster = 1x\nDrop Boss Card Monster = 1x\nJob 2nd Trans\nJob Taekwon,Ninja,Gunslinger (Updated Soon)\nMax Party Share Level = 30 Level\nStart Episode 10.4\nrAthena new 2018 client platform\nNew Character Selection UI\nGepard 3.0 Protection\nMain Language : Bahasa Indonesia');
		//.addField('', '')
		//.addField('', '');
		//message.channel.send(embed);

	let embedvipbenefit = new Discord.RichEmbed()
		.setTitle('VIP Benefit')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/496298007432658944/fullpremi.png')
		.setColor('#0eefd9')
		//.setThumbnail()
		.setTimestamp()
		//.addField('', '')
		//.addField('', '')
		.addField('Benefit dari VIP Player adalah :', 'EXP diboost dari 2500% menjadi 3000% alias 30x\nBoost drop rate sebesar 30% dari drop rate server\nStorage kafra capacity bertambah 250 item\nPlayer bisa mengakses Premium NPC yang berada di kota-kota besar\nPlayer biasa menclaim daily login special premium box setiap harinya. Setiap 1x24 jam');
		//message.channel.send(embed);


	//EVENT LIST////////////////////////////////////////////////////////////////////////////////////////////////////////////
	let embedfacebook = new Discord.RichEmbed()
		.setTitle('Event Tag and Share')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489816770278850580/event1.jpg')
		.setColor('#f44256')
		//.setThumbnail()
		.setTimestamp()
		.addField('Desc', 'IKUTILAH EVENT LIKE DAN SHARE DARI REKTNAROK ONLINE .DAPATKAN COSTUME HAPPINESS WING UNTUK 3 ORANG PEMENANG DAN COSTUME SUNGLASSES UNTUK SEMUA PARTISIPAN.JANGAN LEWATKAN LHO YAAA.')
		.addField('Cara Bermain:', '- Like dulu Fanspage Rektnarok kita http:www.fb.com/Rektnarok\n- Lalu silahkan menuju link ini Fanspage Rektnarok Online Event Post\n- Setelah itu like postingan tersebut dan share ke timeline facebook anda\n - Buat caption untuk mengajak temanmu mengapa harus bermain Rektnarok ? dan tulis nickname charmu.\n- Tag 5 orang temanmu (Minimal)\n- Lalu posting saja dan jangan lupa untuk mengesetnya ke PUBLIC agar kami bisa membacanya.')
		.addField('Hadiah :', 'Hadiah akan diundi pada tanggal 23 September 2018.\n- 3x Orang beruntung akan mendapatkan 1x Buah Costume Happiness Wing\n- 5x Orang beruntung akan mendapatkan Cash Point senilai Rp 50.000\n- Dan semua partisipan akan mendapatkan 1 buah VIP ticket 3 day dan 1 buah Costume Sunglasses');
		//message.channel.send(embed1);

	let embedkaskus = new Discord.RichEmbed()
		.setTitle('Kaskus Reward')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/489820081237524480/event2.jpg')
		.setColor('#f44256')
		.setTimestamp()
		.addField('Halo rekt !!','Buat kamu rektnarokers yang punya id kaskus, atau aktif dikaskus dan mempunyai post minimal 100 post .Wajib banget ngikutin event kita ini karena berhadiah free gm reward box dan daily login premium box lhooo .Dan ada 5x voucher senilai 50 ribu bebas pilih (OVO/Go Pay/ Alfamart / Pulsa) untuk 5 Orang beruntung !!')
		.addField('Syarat mengikuti event ini :','- ID Kaskus wajib mempunyai minimal 100 post\n- Event ini hanya berlaku untuk 1 ID Kaskus per 1 ID Game\n- Wajib menuliskan kesan dan pesan terhadap Rektnarok didalam thread.')
		.addField('Tatacara mengikuti event :','- Login ke id kaskusmu\n- Buka Thread Kaskus Rektnarok Online\n- Post IGN dan Kesan Pesanmu selama bermain di Rektnarok disana.\n- Pemenang akan diundi tanggal 23 September 2018\n- Jika kamu hanya menulis IGN maka kami akan menganggapnya SPAM dan report ke MOMOD Kaskus.')
		.addField('Reward :','- Untuk partisipan free 3x GM Reward Box dan 3x Daily Premium Package\n- Untuk 5x Orang beruntung (akan diundi) mendapatkan voucher senilai 50 ribu rupiah bebas pilih : OVO, GoPay,Alfamart, atau Pulsa.')
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//QUEST OFFICIAL REKTNAROK////////////////////////////////////////////////////////////////////////////////////////////
	let embedquestswagboy = new Discord.RichEmbed()
		.setTitle('Quest Swag Boy')
		.setImage('https://cdn.discordapp.com/attachments/432589912177508352/492524551897481227/swag4.png')
		.setColor('#f44256')
		.setTimestamp()
		.addField('Dengan quest bocah swag, kamu bisa meminta tolong kepadanya untuk membuatkan :','- Supreme Boys Cap\n- Supreme Pipe\n- Supreme Elven Ears\n- Supreme Renowns Detective Cap\n- Supreme Romantic Leaf')
		.addField('Quest Line:','1.Letak NPC ini berada di Kota Lighthalzen. dari warp npc lalu menuju kota lighthalzen, berjalanlah keatas sampai ketemu hotel.\n2. Setelah dihotel, kearah kanan dan masuk ruangan yang nanti terdapat bar.\n3. Nah taraaa, ketemu deh sama di bocah swag Reza Ozawa yang habis hapus channel 2jt subscriber ckckkckck.Kamu bisa quest seperti list diasa.');

	let embedquestsandogaanona = new Discord.RichEmbed()
		.setTitle('Quest Sandoga Annona')
		.setImage('')
		.setThumbnail('https://cdn.discordapp.com/attachments/489807716559224833/493782085501452298/5663.gif')
		.setColor('#f44256')
		.setTimestamp()
		.addField('Desc Item :','A magnificent diadem created to pay tribute to the 7th sign of the zodiac, Libra the Balance. Attached to the crown is an Opal gemstone, the birthstone for those born under this sign.ATK + 7.[Refine Rate +7 or higher]Add low chance of auto casting Level 2 Warm Wind when physically attacking.[Refine Rate +9 or higher]FLEE + 5, ATK + 3%.')
		.addField('Quest Step 1 :','Pertama kamu harus menuju ke morocc_in 110 168 kamu bisa memakai fitur navi dengan mengetik ``/navi morocc_in 110/168``. Dan akan ada petunjuk arah yang langsung membawa kamu kesana.\nSetelah sampai tempat tujuan bicaralah kepadanya. Dia akan meminta beberapa bahan darimu yang berupa :\n- 1x Joker Card.\n- 5x Old Blue Box\n- 3x Old Purple Box.\n- 1x Old Card Album.\nJika kamu sudah mempunyai item tersebut kembalilah padanya dan kamu dapat melakukan quest libra diadem.')
		.addField('Quest Step 2 :','Bahan Libra Diadem :\n\n- 25x Steel.\n- 3x Cursed Ruby.\n- 5x Oridecon.\n- 1x Hat.\n- 30x Star Crumb.\n- 30x Cyfar.\n- 25x 1 Carat Diamond.\n- 92,500 zeny.');
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//1.Server Spesification
	//2.Server Feature
	//3.Costume Cards
	//4.Delete Character
	//5.VIP-Benefit
	//6.Special Box
	//7.Roulette Coin
	//8.Rebirth Sytem
	//9.Auto-Event
	//10.Coin(Copper,Bronze,Rekt)

	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
	console.log(collector)
	collector.on('collect', message => {
		if(message.content === '1') {
			message.channel.send(embedspesification)
		}
		if(message.content === '2') {
			message.channel.send(embedfeature)
		}
		//COSTUME CARD EFFECT//////////////////////////////////////////////////////////////////////////////////////////////////
		if(message.content === '3') {
			let msg2 = message.channel.send('```diff\n-Please Type Menu You Want:\n-a.Costume Weapon Card\n-b.Costume Armor Card\n-c.Costume HeadGears Card\n-d.Costume Shield Card\n-e.Costume Footgear Card\n-f.Costume Manteu Card\n-g.Costume Acc Card```') 
			const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
			console.log(collector2)
			collector2.on('collect', message => {
				if(message.content === 'a') {
					message.channel.send(embedcardweapon)
				}
				if(message.content === 'b') {
					message.channel.send(embedcardarmor)
				}
				if(message.content === 'c') {
					message.channel.send(embedcardheadgear)
				}
				if(message.content === 'd') {
					message.channel.send(embedcardshield)
				}
				if(message.content === 'e') {
					message.channel.send(embedcardfootgear)
				}
				if(message.content === 'f') {
					message.channel.send(embedcardmanteu)
				}
				if(message.content === 'g') {
					message.channel.send(embedcardacc)
				}
			})
		}
		////////////////////////////////////////////////////////////////////////////////////////////////////
		if(message.content === '4') {
			message.channel.send(embeddelchar)
		}
		if(message.content === '5') {
			message.channel.send(embedvipbenefit)
		}
		if(message.content === '6') {
			message.channel.send(embedspecialbox)
		}
		if(message.content === '7') {
			message.channel.send(embedroulette)
		}
		if(message.content === '8') {
			message.channel.send(embedrebirth)
		}
		if(message.content === '9') {
			message.channel.send(embedautoevent)
		}
		if(message.content === '10') {
			message.channel.send(embedcoin)
		}
		//EVENT ON GOING////////////////////////////////////////
		if(message.content === '11') {
			let msg3 = message.channel.send('```diff\nPlease Type a b c or etc to next Information :\n- a.Event Tag and Share\n- b.Kaskus Reward\n- c.4 VS 4[Coming Soon]```')
			const collectorevent = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
			console.log(collectorevent)
			collectorevent.on('collect', message => {
				if(message.content === 'a') {
					message.channel.send('Tag and SHare[Event Done]')
				}
				if(message.content === 'b') {
					message.channel.send('Kaskus Reward[Event Done]')
				}
				if(message.content === 'c') {
					message.channel.send('Coming Soon')
				}
			})
		}
		if(message.content === '12') {
			message.channel.send(embedcostumerecycle)
		}
		if(message.content === '13') {
			let msg4 = message.channel.send('```diff\nPlease Type a b c or etc to next Information :\n- a.Quest Swag Boy\n- b.Quest Sandoga Annona')
			const collectorquest = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
			console.log(collectorquest)
			collectorquest.on('collect', message => {
				if(message.content === 'a') {
					message.channel.send(embedquestswagboy)
				}
				if(message.content === 'b') {
					message.channel.send(embedquestsandogaanona)
				}
			})

			//message.channel.send(embedquestswagboy)
		}

		msg.delete()
		return;
	});
}

module.exports.help = {
	name: "help"
}