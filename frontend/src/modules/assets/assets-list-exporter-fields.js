import { AssetsModel } from '@/modules/assets/assets-model';

const { fields } = AssetsModel;

export default [
  fields.id,
  fields.assetName,
  fields.assetDetails,
  fields.assetValue,
  fields.assetsStall,
  fields.assetPurchaseDate,
  fields.createdAt
];
