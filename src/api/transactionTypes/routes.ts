// src/api/transactionTypes/routes.ts

import express from 'express';
import { getTransactionTypeHandler } from './controllers/transactionTypeController';

const router = express.Router();

router.get('/:typeName', getTransactionTypeHandler);

export default router;
