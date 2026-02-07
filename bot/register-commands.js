import dotenv from 'dotenv';
dotenv.config();

import {REST, Routes, ApplicationCommandOptionType} from 'discord.js';

const commands = [
    {
        name: 'tema',
        description: 'envia um tema aleatório',
    },
    {
        name: 'poder',
        description: 'envia um poder aleatório',
    },
    {
        name: 'temas',
        description: 'lista todos os temas',
    },
    {
        name: 'alterar-cor',
        description: "altera a cor de um cargo",
        options: [{
            name: 'cargo',
            description: "nome do cargo",
            type: ApplicationCommandOptionType.Role,      
            required: true,
            max_length: 6
        },
        {
            name: 'cor',
            description: "valor da cor",
            type: ApplicationCommandOptionType.String,
            required: true
        }],
    },

    //personagens

    {
        name: 'procurar-personagem',
        description: 'mostra um usuário específico',
        options: [{
            name: 'nome',
            description: 'nome do personagem.',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'id',
            description: 'id do dono.',
            type: ApplicationCommandOptionType.User,
            required: false
        }
        ]   
    },

    {
        name: 'procurar-todos-personagens',
        description: 'mostra todos os personagens de um usuário específico',
        options: [{
            name: 'usuario',
            description: 'dono do personagem.',
            type: ApplicationCommandOptionType.User,
            required: false
        }]
    },

    {
        name: 'criar-personagem',
        description: 'cria um novo personagem',
        options: [{
            name: 'nome',
            description: 'nome do personagem',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'classe',
            description: 'classe do personagem',
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: 'nivel',
            description: 'nível do personagem',
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: 'idade',
            description: 'idade do personagem',
            type: ApplicationCommandOptionType.Integer,
            required: false
        },
        {
            name: 'genero',
            description: 'gênero do personagem',
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: 'imagemURL',
            description: 'URL da imagem do personagem',
            type: ApplicationCommandOptionType.String,
            required: false
        }
        ]
    },

];
const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async()=>{
    try{
        console.log('registering');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands},
        )
        console.log('registered');
    }catch(error){
        console.log(`error: ${error}`);
    }
})();