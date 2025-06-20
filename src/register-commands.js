require('dotenv').config();
const {REST, Routes} = require('discord.js');

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