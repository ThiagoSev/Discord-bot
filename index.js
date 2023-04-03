const Discord = require("discord.js");
const { Client, GatewayIntentBits, roleMention } = require('discord.js');
const config = require("./config.json");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
const fs = require("fs");
const { channel } = require("diagnostics_channel");

let tema = '{"employees":[' +
'{"Tema":"Cyberpunk","random":"Igreja" },' +
'{"Tema":"Steampunk","random":"Zoológico" },' +
'{"Tema":"Espacial","random":"Sexta-feira" },' +
'{"Tema":"Dark future","random":"Colônia" },' +
'{"Tema":"Mad Max","random":"Item Misterioso" },' +
'{"Tema":"Pré-histórico","random":"Profecia" },' +
'{"Tema":"Piratas","random":"Lava-rápido" },' +
'{"Tema":"Terror","random":"Noite Infinita" },' +
'{"Tema":"Submundo","random":"Traição" },' +
'{"Tema":"Pós-Apocalipse","random":"Festa" },' +
'{"Tema":"Super-heróis","random":"Lanchonete" },' +
'{"Tema":"Sobrenatural","random":"Assassinato" },' +
'{"Tema":"Magi-Tech","random":"Parque Temático" },' +
'{"Tema":"Faroeste","random":"2077" },' +
'{"Tema":"Zumbi","random":"Fazenda" },' +
'{"Tema":"Stonepunk","random":"Sobrenatural" },' +
'{"Tema":"Horrorpunk","random":"Máfia" },' +
'{"Tema":"Dieselpunk","random":"Orfanato" },' +
'{"Tema":"Atompunk","random":"Shopping" },' +
'{"Tema":"Mitológico","random":"Sucrilhos" },' +
'{"Tema":"Deserto"},' +
'{"Tema":"Cidade Inundada"},' +
'{"Tema":"Viajante Dimensional"},' +
'{"Tema":"Medieval","random":"Natal" }]}';

let power = '{"employees":[' +
'{"poder":"fogo: Controle do elemento fogo" },' +
'{"poder":"ar: Controle do elemento ar" },' +
'{"poder":"terra: Controle do elemento terra" },' +
'{"poder":"água: Controle do elemento água" },' +
'{"poder":"Eletrecidade: controla a energia elétrica e raios." },' +
'{"poder":"Luz: Manipula a luz, aumenta e diminui a intensidade, cria hologramas, etc" },' +
'{"poder":"Sombra: Viagem através da sombra, criar objetos com a sombra, etc" },' +
'{"poder":"Alquimia: transforma um elemento em outro." },' +
'{"poder":"Teletransporte: se transporte para outros lugares sem a necessidade de uma locomoção." },' +
'{"poder":"Transmorfo: poder de se transformar completamente em outra criatura." },' +
'{"poder":"Metal: Controle sobre a forma de qualquer metal." },' +
'{"poder":"Empatic: poder de transmitir seus sentidos, como visão, audição e olfato para outros lugares." },' +
'{"poder":"Telecinese: Controla objetos com a mente." },' +
'{"poder":"Sedução: Habilidade seduzir qualquer pessoa através do olhar ou da voz." },' +
'{"poder":"Eco: capacidade de dar gritos super-sônicos." },' +
'{"poder":"Explosão: cria explosões." },' +
'{"poder":"Clarividência: pode obter informações sobre algo, ou algum evento do passado ou futuro" },' +
'{"poder":"Memória muscular: Habilidade de realizar qualquer movimento que tenha visto" },' +
'{"poder":"Animar Objetos: Dá vida a objetos." },' +
'{"poder":"Reviver os Mortos: revive os mortos" },' +
'{"poder":"Manipulação Óssea: Criação de uma nova massa óssea, que pode ser projetada para fora ou reposta em seu corpo" },' +
'{"poder":"Rei dos Mares: Os seres marinhos executam suas ordens." },' +
'{"poder":"Duplicação: Cria clones de si mesmo." },' +
'{"poder":"Invisibilidade: Fica invisível." },' +
'{"poder":"Elástico: Seu corpo é totalmente elástico." },' +
'{"poder":"Cura: Habilidade de curar ferimentos." },' +
'{"poder":"Sentidos Aguçados: Seus sentidos humanos são mais sensíveis, sendo assim você tem uma visão, audição, tato, paladar e olfato melhores." },' +
'{"poder":"Super Força: Sua força é maior que a de um ser humano comum." },' +
'{"poder":"Velocidade: Capacidade de correr na velocidade da luz" },' +
'{"poder":"Empatia: Capacidade de ler ou sentir os sentimentos de outros." },' +
'{"poder":"Forja: Poder  de criar armas." },' +
'{"poder":"Conjuração: habilidade de convocar seres vivos, espíritos ou objetos." },' +
'{"poder":"Gravidade: Controla a gravidade." },' +
'{"poder":"Calor: Controla a temperatura." },' +
'{"poder":"Hipnose: Coloca o alvo em um estado de transe, podendo controlá-lo." },' +
'{"poder":"Voo: Capacidade de voar" },' +
'{"poder":"eater: após matar alguém, ou achar um cadáver recente, podem solidificar a energia espiritual residual do corpo podendo engoli-la , recebendo conhecimento daquela pessoa" }]}';

const obj = JSON.parse(tema);
const data = JSON.parse(power);
const{EmbedBuilder} = require('discord.js');

client.on("ready", () => {
    console.log(`Bot on`);
});
client.on("guildCreate", guild => {
    console.log(`o bot entrou em um servidor`);
});
client.on("messageCreate", async (message) => {
	let prefix = config.prefix;

	if (message.author.bot) return;
	if (message.channel.type === Discord.ChannelType.DM) return;
	if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	let cmd = args.shift().toLocaleLowerCase();
	if(cmd === "ping"){
		const m = await message.channel.send("pong");
	}
	if(cmd === "tema") {
    	const m = await message.channel.send(obj.employees[Math.floor(Math.random() * 24)].Tema + " com " + obj.employees[Math.floor(Math.random() * 22)].random);
  	}
  	if(cmd === "poder"){
    	const m = await message.channel.send(data.employees[Math.floor(Math.random() * 37)].poder);
  	}
  	if(cmd === "poderes"){
		var n = 1;
		const allpowers = new EmbedBuilder()
			.setColor(222222)
			.setTitle('Todos os Poderes')
			.setDescription(`${n}- Água\n${n+1}- Alquimia\n${n+2}- Animar Objetos\n${n+3}- Ar\n${n+4}- Calor\n${n+5}- Clarividência\n${n+6}- Conjuração\n${n+7}- Cura\n${n+8}- Duplicação\n${n+9}- Eater\n${n+10}- Eco\n${n+11}- Elástico\n${n+12}- Eletrecidade\n${n+13}- Empatia\n${n+14}- Explosão\n${n+15}- Fogo\n${n+16}- Forja\n${n+17}- Gravidade\n${n+18}- Hipnose\n${n+19}- Invisibilidade\n${n+20}- Luz\n${n+21}- Manipuulação Óssea\n${n+22}- Memória Muscular\n${n+23}- Metal\n${n+24}- Rei dos Mares\n${n+25}- Reviver os Mortos\n${n+26}- Sedução\n${n+27}- Sentido Aguçado\n${n+28}- Sombra\n${n+29}-Super Força\n${n+30}- Telecinese\n${n+31}- Teletransporte\n${n+32}- Terra\n${n+33}- Transmorfo\n${n+34}- Velocidade\n${n+35}- Voo`)
		const m = await message.channel.send({
			embeds: [allpowers]
		});
    	//for(num=0;num<=37;num++){
      	//	const m = await message.channel.send(data.employees[num].poder);
    	//}
  	}
	if(cmd === "temas"){
		const alltemas = new EmbedBuilder()
			.setColor(222222)
			.setTitle('Todos Temas')
			.setDescription('1- Cyberpunk\n2- Steampunk\n3- Espacial\n4- Dark Future\n5- Viajante Dimensional\n6- Mad Max\n7- Pré-Histórico\n8- Piratas\n9- Terror\n10- Submundo\n11- Pós-Apocalipse\n12- Super-Heróis\n13- Sobrenatural\n14- Magi-Tech\n15- Faroeste\n16- Zumbi\n17- Stonepunk\n18- Horrorpunk\n19- Dieselpunk\n20- Atompunk\n21- Mitológico\n22- Deserto\n23- Cidade Inundada\n24- Medieval')
			const m = await message.channel.send({
				embeds: [alltemas]
			});
	}
	if(cmd === "randons"){
		const allrandons = new EmbedBuilder()
			.setColor(222222)
			.setTitle('Todos Randons')
			.setDescription('1- Igreja\n2- Zoológico\n3- Sexta-Feira\n4- Colônia\n5- Item Perdido\n6- Item Misterioso\n7- Profecia\n8- Lava-Rápido\n9- Noite Infinita\n10- Traição\n11- Festa\n12- Lanchonete\n13- Assassinato\n14- Parque Temático\n15- 2077\n16- Fazenda\n17- Sobrenatural\n18- Máfia\n19- Orfanato\n20- Shopping\n21- Sucrilhos\n22- Natal')
		const m = await message.channel.send({
			embeds: [allrandons]
		});
	}

	//mudar a cor do cargo

	if(cmd === "changecolor"){
		let novacor = message.content.slice(13, 20);
		let cargo = message.content.slice(24,-1);
		if(message.author.id != "446445131936301066" && message.author.id != "417414113355104257"){
			const m = await message.channel.send('broxa não pode usar esse comando');
			return;
		};
		let guild = message.guild;
		if(message.content.indexOf('#') != 13){
			console.log('comando incorreto');
			const m = await message.channel.send('a cor deve vir primeiro, bobão');
			return;
		}
		guild.roles.edit(`${cargo}`, {color: novacor})
			.then(update => console.log(`Cor editada do cargo ${update.name} para ${novacor}`))
			.catch(console.error);
			const m = await message.channel.send(`Cor editada do cargo ${`<@&${cargo}>`} para ${novacor}`)
	}
	if(cmd === "userbanner"){
		var user = message.content.slice(14,-1);
		if(user.length == 0){
			var user = message.author.id;
		};
		const m = await message.channel.send.bannerURL(user);
	}
});
client.login(config.token);
//EM ANDAMENTO