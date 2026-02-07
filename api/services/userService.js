import * as db from '../database/index.js' 

export async function getUserById(discordId){
    
    const result = await db.query(
        'SELECT * FROM usuario WHERE discordId = $1',
        [discordId]
    );
    return result.rows[0];
}

export async function createUser(discordId){
    try{
        const result = await db.query(
        'INSERT INTO usuario VALUES ($1)',
        [discordId]
        );
        return result.rows[0];
    }catch(err){
        return null;
    }
    
}
