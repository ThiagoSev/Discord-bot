import dotenv from 'dotenv'
//const Discord = require("discord.js");
import { Client, GatewayIntentBits,IntentsBitField, roleMention, EmbedBuilder } from 'discord.js';
import * as db from 'database/index.js';

const client = new Client({
	intents: [
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
	],
});

dotenv.config();


let random = {employees:[ 
	{random:"Igreja" }, 
	{random:"Zoológico" }, 
	{random:"Sexta-feira" }, 
	{random:"Colônia" }, 
	{random:"Item Misterioso" }, 
	{random:"Profecia" }, 
	{random:"Lava-rápido" }, 
	{random:"Noite Infinita" }, 
	{random:"Traição" }, 
	{random:"Festa" }, 
	{random:"Lanchonete" }, 
	{random:"Assassinato" }, 
	{random:"Parque Temático" }, 
	{random:"2077" }, 
	{random:"Fazenda" }, 
	{random:"Sobrenatural" }, 
	{random:"Máfia" }, 
	{random:"Orfanato" }, 
	{random:"Shopping" }, 
	{random:"Sucrilhos" }
]};

let tema = {employees:[ 
	{Tema:"Cyberpunk"}, 
	{Tema:"Steampunk"}, 
	{Tema:"Espacial"}, 
	{Tema:"Dark future"}, 
	{Tema:"Mad Max"}, 
	{Tema:"Pré-histórico"}, 
	{Tema:"Piratas"}, 
	{Tema:"Terror"}, 
	{Tema:"Submundo"}, 
	{Tema:"Pós-Apocalipse"}, 
	{Tema:"Super-heróis"}, 
	{Tema:"Sobrenatural"}, 
	{Tema:"Magi-Tech"}, 
	{Tema:"Faroeste"}, 
	{Tema:"Zumbi"}, 
	{Tema:"Stonepunk"}, 
	{Tema:"Horrorpunk"}, 
	{Tema:"Dieselpunk"}, 
	{Tema:"Atompunk"}, 
	{Tema:"Mitológico"}, 
	{Tema:"Deserto"}, 
	{Tema:"Cidade Inundada"}, 
	{Tema:"Viajante Dimensional"}, 
	{Tema:"Medieval"}
]}; 

//const obj = JSON.parse(tema);
//const data = JSON.parse(power);

client.on('interactionCreate', (interaction) =>{
	if(!interaction.isChatInputCommand()) return;

	if(interaction.commandName == "tema"){
		interaction.reply(obj.employees[Math.floor(Math.random() * 24)].Tema + " com " + obj.employees[Math.floor(Math.random() * 22)].random)
	}
	if(interaction.commandName == "poder"){
		interaction.reply(data.employees[Math.floor(Math.random() * 37)].poder)
	}
	if(interaction.commandName == "temas"){
		let textTema='';
		let i=1;
		let arrayTemas = tema.employees.map(element => {
			textTema += `${i}- ${element.Tema}\n`;
			i++;
		});
		const alltemas = new EmbedBuilder()
			.setColor(222222)
			.setTitle('Todos Temas')
			.setDescription(textTema)
			interaction.reply({embeds: [alltemas]});
	}
	if(interaction.commandName == "alterar-cor"){
		if(interaction.user.id != "446445131936301066")return;
		const cargo = interaction.options.get('cargo').role.id;
		const cor = interaction.options.get('cor').value;
		const guild = interaction.guild;
		guild.roles.edit(`${cargo}`,{color: cor})
			.then(updated => {console.log(`Edited role name to ${updated.name}`),
				interaction.reply(`Cargo ${updated.name} editado.`)})
  			.catch(console.error)
	}

	if(interaction.commandName == "criarFicha"){
		db.Quet
	}
});

client.on("ready", () => {
    console.log(`Bot on`);
});
client.on("guildCreate", guild => {
    console.log(`o bot entrou em um servidor`);
});
client.login(process.env.TOKEN);
