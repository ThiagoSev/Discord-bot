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
    const id = req.params.charId;
    
    if(id == null){
        return res.status(400).json({error: 'id é obrigatório'});
    }
    const character = await characterService.getCharById(id);
    
    if(!character){
        return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    return res.json(character);
}

export async function getAllCharacters(req, res){
    const id = req.params.discordId;
    
    if(id == null){
        return res.status(400).json({error: 'id é obrigatório'});
    }
    const character = await characterService.getAllCharsByUserId(id);
    
    if(!character){
        return res.status(404).json({ error: 'Esse usuário não tem personagens' });
    }
    return res.json(character);
}

export async function createCharacter(req, res){
    const userId = req.params.discordId;
    const {name, gender} = req.body;
    if(userId == null){
        return res.status(400).json({error: 'id é obrigatório'});
    }
    
    const user = await userService.getUserById(userId);

    if(!user){
        return res.status(404).json({ error: 'Usuário não existe' });
    }else{
        const newChar = await characterService.createChar({name: name, gender: gender, userId: userId});
        return res.json(newChar);
    }
}