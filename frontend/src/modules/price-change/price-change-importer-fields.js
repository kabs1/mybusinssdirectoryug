import { PriceChangeModel } from '@/modules/price-change/price-change-model';

const { fields } = PriceChangeModel;

export default [
  fields.priceChangeRef,
  fields.priceChangeType,
  fields.priceChangeBefore,
  fields.priceChangeAfter,
  fields.priceChangeProduct,
  fields.priceChangeStall,
  fields.priceChangeSession,
  fields.priceChangeStatus,
];
