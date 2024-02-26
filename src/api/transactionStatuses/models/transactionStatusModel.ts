// src/api/transactionStatuses/models/transactionStatusModel.ts

import { db } from '../../../config';

export interface TransactionStatus {
  id: number;
  name: string;
}

export const getTransactionStatusByName = async (statusName: string): Promise<TransactionStatus | null> => {
  try {
    const status = await db.oneOrNone('SELECT * FROM transaction_statuses WHERE name = $1', [statusName]);
    return status;
  } catch (error) {
    console.error('Error getting transaction status by name:', error);
    return null;
  }
};
