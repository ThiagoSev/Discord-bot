import * as userService from '../services/userService.js'

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
