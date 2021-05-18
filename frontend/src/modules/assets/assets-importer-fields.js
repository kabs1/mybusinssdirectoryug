import { AssetsModel } from '@/modules/assets/assets-model';

const { fields } = AssetsModel;

export default [
  fields.assetImage,
  fields.assetName,
  fields.assetDetails,
  fields.assetValue,
  fields.assetDocs,
  fields.assetsStall,
  fields.assetPurchaseDate,
];
