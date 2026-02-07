import * as userService from '../services/userService.js'
import * as characterService from '../services/characterService.js'

export async function getUser(req, res){
    const id = req.params.discordId;
    
    if(id == null){
        return res.status(400).json({error: 'id é obrigatório'});
    }
    const user = await userService.getUserById(id);
    
    if(!user){
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.json(user);
}

export async function createUser(req, res){
    const id = req.params.discordId;
    
    if(id == null){
        return res.status(400).json({error: 'id é obrigatório'});
    }
    const user = await userService.getUserById(id);

    if(!user){
        const newUser = await userService.createUser(id);
        return res.json(newUser);
    }else{
        return res.status(404).json({ error: 'Usuário já existe' });
    }
}

//-------------------------
//personagens
//-------------------------

export async function getCharacter(req, res){
    const {userId, name} = req.query;
    
    const character = await characterService.getCharByName(userId, name);
    
    if(!character){
        return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    return res.json(character);
}

export async function getAllCharacters(req, res){
    const id = req.params.discordId;
    
    const character = await characterService.getAllCharsByUserId(id);
    
    if(!character){
        return res.status(404).json({ error: 'Esse usuário não tem personagens' });
    }
    return res.json(character);
}

export async function createCharacter(req, res){
    const userId = req.params.discordId;
    const {name, charClass, level, age, gender, image} = req.body;
    if(userId == null){
        return res.status(400).json({error: 'id do usuário é obrigatório'});
    }
    
    const user = await userService.getUserById(userId);

    //cria um usuário caso não exista
    if(!user){

        console.log("[createCharacter] cadastrando usuário...")
        const newUser = userService.createUser(userId);
        if(newUser == null){
            return res.status(400).json({error: 'Erro ao registrar novo usuário'});
        }
        console.log("[createCharacter] usuário cadastrado.");

    }

    const newChar = await characterService.createChar({name: name, charClass:charClass, level: level, age: age, gender: gender, image: image, userId: userId});
    return res.json(newChar);
    
}