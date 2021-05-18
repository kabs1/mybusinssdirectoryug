import { MemosModel } from '@/modules/memos/memos-model';

const { fields } = MemosModel;

export default [
  fields.id,
  fields.memosTitle,
  fields.memosDetails,
  fields.memosStartDate,
  fields.memosEndDate,
  fields.memosTo,
  fields.memoStall,
  fields.createdAt
];
