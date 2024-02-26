// src/api/transactionStatuses/controllers/transactionStatusController.ts

import { Request, Response } from 'express';
import { TransactionStatus, getTransactionStatusByName } from '../models/transactionStatusModel';

export const getTransactionStatusHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { statusName } = req.params;
    const status = await getTransactionStatusByName(statusName);
    if (status) {
      res.status(200).json(status);
    } else {
      res.status(404).json({ message: 'Transaction status not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
