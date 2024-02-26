// src/config.js

import { Pool } from 'pg';

const dbConfig = {
  user: 'armando_user',
  host: 'localhost',
  database: 'armando_transactions_db',
  password: 'Armando@123',
  port: 5432,
};

const db = new Pool(dbConfig);

const connectToDB = async () => {
  try {
    await db.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
    throw error;
  }
};

export { db, connectToDB };
