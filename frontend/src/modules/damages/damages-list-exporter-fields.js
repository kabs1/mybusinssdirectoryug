import { DamagesModel } from '@/modules/damages/damages-model';

const { fields } = DamagesModel;

export default [
  fields.id,
  fields.damageRef,
  fields.damageProduct,
  fields.damageDate,
  fields.damageCausedBy,
  fields.damageAmmount,
  fields.damageNote,
  fields.damageStall,
  fields.createdAt
];
