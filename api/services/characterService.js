import * as db from '../database/index.js' 

//procura todos um personagem pelo id
export async function getCharById(charId){
    
    const result = await db.query(
        'SELECT * FROM personagem WHERE id = $1',
        [charId]
    );
    return result.rows[0];
}

//procura todos os personagens de um usuário
export async function getAllCharsByUserId(userId){
    
    const result = await db.query(
        'SELECT * FROM personagem WHERE userId = $1',
        [userId]
    );
    return result;
}


export async function createChar(character){
    const result = await db.query(
        'INSERT INTO personagem(nome,genero,userId) VALUES ($1, $2, $3)',
        [ character.name, character.gender, character.userId]
    );
    return result.rows[0];
}
