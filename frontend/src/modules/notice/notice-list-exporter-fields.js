import { NoticeModel } from '@/modules/notice/notice-model';

const { fields } = NoticeModel;

export default [
  fields.id,
  fields.noticeTitle,
  fields.noticeDetails,
  fields.noticeType,
  fields.noticeStall,
  fields.createdAt
];
