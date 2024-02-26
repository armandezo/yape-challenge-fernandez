// src/api/transactionTypes/models/transactionTypeModel.ts

import { db } from '../../../config';

export interface TransactionType {
  id: number;
  name: string;
}

export const getTransactionTypeByName = async (typeName: string): Promise<TransactionType | null> => {
  try {
    const type = await db.oneOrNone('SELECT * FROM transaction_types WHERE name = $1', [typeName]);
    return type;
  } catch (error) {
    console.error('Error getting transaction type by name:', error);
    return null;
  }
};
