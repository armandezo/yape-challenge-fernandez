// src/api/transactions/models/transactionModel.ts

import { db } from '../../../config';

export interface Transaction {
  transaction_external_id: string;
  account_external_id_debit: string;
  account_external_id_credit: string;
  transfer_type_id: number;
  value: number;
  created_at: Date;
}

export const createTransaction = async (transaction: Transaction): Promise<Transaction> => {
  const newTransaction = await db.one(
    'INSERT INTO transactions (transaction_external_id, account_external_id_debit, account_external_id_credit, transfer_type_id, value, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [
      transaction.transaction_external_id,
      transaction.account_external_id_debit,
      transaction.account_external_id_credit,
      transaction.transfer_type_id,
      transaction.value,
      transaction.created_at,
    ]
  );
  return newTransaction;
};

export const getTransactionById = async (transactionExternalId: string): Promise<Transaction | null> => {
  try {
    const transaction = await db.oneOrNone('SELECT * FROM transactions WHERE transaction_external_id = $1', [
      transactionExternalId,
    ]);
    return transaction;
  } catch (error) {
    console.error('Error getting transaction by ID:', error);
    return null;
  }
};
