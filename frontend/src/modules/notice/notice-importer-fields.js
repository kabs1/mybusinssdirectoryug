import { NoticeModel } from '@/modules/notice/notice-model';

const { fields } = NoticeModel;

export default [
  fields.noticeCover,
  fields.noticeTitle,
  fields.noticeDetails,
  fields.noticeType,
  fields.userIds,
  fields.noticeDevice,
  fields.noticeStall,
];
