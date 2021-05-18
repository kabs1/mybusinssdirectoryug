import { CurrencyModel } from '@/modules/currency/currency-model';

const { fields } = CurrencyModel;

export default [
  fields.id,
  fields.currencyTitle,
  fields.currencyCode,
  fields.currencySign,
  fields.createdAt
];
