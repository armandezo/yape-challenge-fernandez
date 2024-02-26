// src/api/transactions/index.ts

import express from 'express';
import transactionRoutes from './routes';

const router = express.Router();

router.use('/transactions', transactionRoutes);

export default router;
