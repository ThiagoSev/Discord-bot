import express from 'express';
const app = express()
import * as controller from '../controllers/controller.js'
app.use(express.json());

app.get('/users/:discordId',
    controller.getUser
)

app.post('/users/:discordId',
    controller.createUser
)

//-------------------
// persongem
//-------------------

app.get('/character/findByName',
    controller.getCharacter
)
    
app.get('/character/all/:discordId',
    controller.getAllCharacters
)

app.post('/character/:discordId',
    controller.createCharacter
)

app.listen(3000, () =>{
    console.log("api rodando na porta 3000")
})