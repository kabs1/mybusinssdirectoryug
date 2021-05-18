import { ExpensesModel } from '@/modules/expenses/expenses-model';

const { fields } = ExpensesModel;

export default [
  fields.id,
  fields.expenseCover,
  fields.expensesTitle,
  fields.expensesCost,
  fields.expenseMadeTo,
  fields.expensesMadeBy,
  fields.expensesDate,
  fields.expensesStatus,
  fields.expenseStall,
  fields.expenseNote,
  fields.expenseDoc,
  fields.createdAt
];
