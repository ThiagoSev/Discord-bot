require('dotenv').config();
const mongoose = require("mongoose");
const Discord = require("discord.js");
const { Client, GatewayIntentBits,IntentsBitField, roleMention } = require('discord.js');
const client = new Client({
	intents: [
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
	],
});
const fs = require("fs");
const { channel } = require("diagnostics_channel");


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
const data = JSON.parse(power);
const{EmbedBuilder} = require('discord.js');

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
});

client.on("ready", () => {
    console.log(`Bot on`);
});
client.on("guildCreate", guild => {
    console.log(`o bot entrou em um servidor`);
});
client.login(process.env.TOKEN);
