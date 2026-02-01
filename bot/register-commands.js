require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

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
    }

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
        console.log(`errror: ${error}`);
    }
})();