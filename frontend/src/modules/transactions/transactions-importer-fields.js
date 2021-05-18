import { TransactionsModel } from '@/modules/transactions/transactions-model';

const { fields } = TransactionsModel;

export default [
  fields.transactionRef,
  fields.transactionClass,
  fields.transactionType,
  fields.transactionValue,
  fields.transactionIdentifier,
  fields.transactionSession,
];
