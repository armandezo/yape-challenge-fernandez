// src/api/transactions/controllers/transactionController.ts

import { Request, Response } from 'express';
import { Transaction, createTransaction, getTransactionById } from '../models/transactionModel';

export const createTransactionHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const newTransaction: Transaction = req.body;
    const createdTransaction = await createTransaction(newTransaction);
    res.status(201).json(createdTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { transaction_external_id } = req.params;
    const transaction = await getTransactionById(transaction_external_id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
