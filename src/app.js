// src/app.js

import express from 'express';
import apiRoutes from './api';
import { connectToDB } from './config/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });
