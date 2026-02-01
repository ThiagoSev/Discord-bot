import express from 'express';
const app = express()
import * as controller from '../controllers/controller.js'

app.get('/users/:discordId',
    controller.getUser
)

app.listen(3000, () =>{
    console.log("api rodando na porta 3000")
})