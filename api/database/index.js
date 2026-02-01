import { Pool, Client } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
    user: 'postgres',
    password: process.env.BD,
    host: 'localhost',
    port: 5432,
    database: 'discord-bot',
})

const client = await pool.connect();

export async function query (text, params){
  return pool.query(text, params)
}

await client.release() 