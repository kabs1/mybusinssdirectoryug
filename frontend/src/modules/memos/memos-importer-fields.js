import { MemosModel } from '@/modules/memos/memos-model';

const { fields } = MemosModel;

export default [
  fields.memosCover,
  fields.memosTitle,
  fields.memosDetails,
  fields.memosFrom,
  fields.memosStartDate,
  fields.memosEndDate,
  fields.memosTo,
  fields.memoStall,
];
