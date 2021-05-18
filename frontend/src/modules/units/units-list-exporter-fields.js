import { UnitsModel } from '@/modules/units/units-model';

const { fields } = UnitsModel;

export default [
  fields.id,
  fields.unitsTitle,
  fields.unitsCode,
  fields.unitsType,
  fields.createdAt
];
