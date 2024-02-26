// src/api/transactionTypes/index.ts

import express from 'express';
import transactionTypeRoutes from './routes';

const router = express.Router();

router.use('/transaction-types', transactionTypeRoutes);

export default router;
