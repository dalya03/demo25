// db.js
import { Client } from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log('Connected to the database successfully'))
  .catch(err => console.error('Error connecting to the database:', err));

export default client;
