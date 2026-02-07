import dotenv from 'dotenv'
//const Discord = require("discord.js");
import { Client, GatewayIntentBits,IntentsBitField, roleMention, EmbedBuilder } from 'discord.js';
import express from 'express'
const app = express();
app.use(express.json());

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

client.on('interactionCreate', async (interaction) =>{
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

	//-----------------------------
	//personagens
	//-----------------------------

	if(interaction.commandName == "procurar-personagem"){

		try{
			//userId será o id do requisitante caso ele não tenha escolhido um id
			let userId =  interaction.user.id;

			if(interaction.options.get('id') != null)
				userId = interaction.options.get('id').value;


			const charName = interaction.options.get('nome').value;
			const userName = interaction.user.username;

			const url = `http://localhost:3000/character/findByName?userId=${userId}&name=${charName}`

		
			const response = await fetch(url);
			const data = await response.json();

			var description = `nome: ${data.charname}\n`+
							   `classe: ${data.charclass}\n`+
							   `nível: ${data.level}\n`
			if(data.age == null)
				description += `idade: desconhecida\n`
			else
				description += `idade ${data.age}\n`

			if(data.gender == null)
				description += `gênero: desconhecido\n`
			else
				description += `gênero: ${data.gender}\n`

			description += `userId: ${data.userId}\n`

			const AllChars = new EmbedBuilder()
			.setColor(222222)
			.setTitle(`Personagens de: ${userName}`)
			.setDescription(description)

			interaction.reply({embeds: [AllChars]});

		}catch(err){
			interaction.reply("erro ao buscar personagem: "+err);
			return null;
		}
	}

	if(interaction.commandName == "procurar-todos-personagens"){
		
		//userId será o id do requisitante caso ele não tenha escolhido um id
		let userId =  interaction.user.id;

		if(interaction.options.get('id') != null)
			userId = interaction.options.get('id').value;

		const userName = interaction.user.username;

		const url = `http://localhost:3000/character/all/${userId}`

		try{
			const response = await fetch(url, {
				method: GET,
			});

			console.log(response);

			var description = "omg hi";
			const AllChars = new EmbedBuilder()
			.setColor(222222)
			.setTitle(`Personagens de ${userName}`)
			.setDescription(description)

			interaction.reply({embeds: [alltemas]});

		}catch(err){
			interaction.reply("erro ao criar usuário");
			return null;
		}
	}

	if(interaction.commandName == "criar-personagem"){
		
		const userId = interaction.user.id;
		const name = interaction.options.get('nome').value;
		const charClass = interaction.options.get('classe')?.value;
		const level = interaction.options.get('nivel')?.value;
		const age = interaction.options.get('idade')?.value;
		const gender = interaction.options.get('genero')?.value;
		const image = interaction.options.get('imagem')?.value;

		const url = `http://localhost:3000/character/${userId}`

		try{
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name, 
					charClass,
					level,
					age,
					gender,
					image
				}),
			});

			if(!response.ok){
				interaction.reply("erro ao criar personagem");
			}

			interaction.reply("personagem criado");

		}catch(err){
			interaction.reply("erro ao criar usuário: "+err);
			return null;
		}
	}

});

client.on("clientReady", () => {
    console.log(`Bot on`);
});
client.on("guildCreate", guild => {
    console.log(`o bot entrou em um servidor`);
});
client.login(process.env.TOKEN);
