import * as db from '../database/index.js' 

//procura todos um personagem pelo id
export async function getCharByName(userId, charName){
    
    let sql = 'SELECT * FROM personagem WHERE 1=1';
    let params = [];

    sql+= ` AND userId = $${params.length+1}`
    params.push(userId);
    
    sql += ` AND charName ILIKE $${params.length+1}`
    params.push(`%${charName}%`);

    const result = await db.query(sql, params);
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
        'INSERT INTO personagem(charName, charClass , CharLevel, age, gender, charImage ,userId) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [ character.name, character.charClass, character.level, character.age, character.gender, character.image, character.userId]
    );
    return result;
}
