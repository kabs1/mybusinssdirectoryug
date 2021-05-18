import { DamagesModel } from '@/modules/damages/damages-model';

const { fields } = DamagesModel;

export default [
  fields.damageCover,
  fields.damageRef,
  fields.damageProduct,
  fields.damageDate,
  fields.damageCausedBy,
  fields.damageAmmount,
  fields.damageNote,
  fields.damageDocs,
  fields.damageStall,
];
