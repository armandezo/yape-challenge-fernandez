// src/api/transactions/routes.ts

import express from 'express';
import { createTransactionHandler, getTransactionHandler } from './controllers/transactionController';

const router = express.Router();

router.post('/', createTransactionHandler);
router.get('/:transaction_external_id', getTransactionHandler);

export default router;
