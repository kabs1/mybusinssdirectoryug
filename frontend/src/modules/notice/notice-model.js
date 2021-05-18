import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { DevicesField } from '@/modules/devices/devices-field';
import { StallField } from '@/modules/stall/stall-field';
import { UserField } from '@/modules/auth/user-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.notice.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.notice.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  noticeCover: new ImagesField('noticeCover', label('noticeCover'), 'notice/noticeCover',{
    "max": 1
  }),
  noticeTitle: new StringField('noticeTitle', label('noticeTitle'), {
    "required": true
  }),
  noticeDetails: new StringField('noticeDetails', label('noticeDetails'), {
    "required": true
  }),
  noticeType: new EnumeratorField('noticeType', label('noticeType'), [
    { id: 'alert', label: enumeratorLabel('noticeType', 'alert') },
    { id: 'message', label: enumeratorLabel('noticeType', 'message') },
    { id: 'notification', label: enumeratorLabel('noticeType', 'notification') },
  ],{
    "required": true
  }),
  userIds: UserField.relationToMany('userIds', label('userIds'), {}),
  noticeDevice: DevicesField.relationToMany('noticeDevice', label('noticeDevice'), {}),
  noticeStall: StallField.relationToMany('noticeStall', label('noticeStall'), {
    "required": true
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export class NoticeModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
