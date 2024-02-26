// src/api/transactionTypes/controllers/transactionTypeController.ts

import { Request, Response } from 'express';
import { TransactionType, getTransactionTypeByName } from '../models/transactionTypeModel';

export const getTransactionTypeHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { typeName } = req.params;
    const type = await getTransactionTypeByName(typeName);
    if (type) {
      res.status(200).json(type);
    } else {
      res.status(404).json({ message: 'Transaction type not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
