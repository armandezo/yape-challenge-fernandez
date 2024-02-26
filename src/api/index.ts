// src/api/index.ts

import express from 'express';
import transactionRoutes from './transactions';
import transactionTypeRoutes from './transactionTypes';
import transactionStatusRoutes from './transactionStatuses';

const router = express.Router();

router.use(transactionRoutes);
router.use(transactionTypeRoutes);
router.use(transactionStatusRoutes);

export default router;
