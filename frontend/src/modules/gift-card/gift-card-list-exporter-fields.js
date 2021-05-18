import { GiftCardModel } from '@/modules/gift-card/gift-card-model';

const { fields } = GiftCardModel;

export default [
  fields.id,
  fields.giftCardName,
  fields.giftCardNo,
  fields.giftCardAmmount,
  fields.giftCardCustomer,
  fields.giftCardStartDate,
  fields.giftCardEndDate,
  fields.giftCardStall,
  fields.giftCardStatus,
  fields.createdAt
];
