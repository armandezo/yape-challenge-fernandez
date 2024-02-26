// src/api/transactionStatuses/routes.ts

import express from 'express';
import { getTransactionStatusHandler } from './controllers/transactionStatusController';

const router = express.Router();

router.get('/:statusName', getTransactionStatusHandler);

export default router;
