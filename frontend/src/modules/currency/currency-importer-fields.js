import { CurrencyModel } from '@/modules/currency/currency-model';

const { fields } = CurrencyModel;

export default [
  fields.currencyTitle,
  fields.currencyCode,
  fields.currencySign,
];
