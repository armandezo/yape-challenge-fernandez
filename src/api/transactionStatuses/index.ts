// src/api/transactionStatuses/index.ts

import express from 'express';
import transactionStatusRoutes from './routes';

const router = express.Router();

router.use('/transaction-statuses', transactionStatusRoutes);

export default router;
