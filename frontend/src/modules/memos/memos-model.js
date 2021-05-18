import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { StaffField } from '@/modules/staff/staff-field';
import { StallField } from '@/modules/stall/stall-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.memos.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  memosCover: new ImagesField('memosCover', label('memosCover'), 'memos/memosCover',{
    "max": 1
  }),
  memosTitle: new StringField('memosTitle', label('memosTitle'), {
    "required": true,
    "max": 20
  }),
  memosDetails: new StringField('memosDetails', label('memosDetails'), {
    "required": true
  }),
  memosFrom: StaffField.relationToMany('memosFrom', label('memosFrom'), {}),
  memosStartDate: new DateTimeField('memosStartDate', label('memosStartDate'), {
    "required": true
  }),
  memosEndDate: new DateTimeField('memosEndDate', label('memosEndDate'), {
    "required": true
  }),
  memosTo: new StringField('memosTo', label('memosTo'), {
    "required": true
  }),
  memoStall: StallField.relationToMany('memoStall', label('memoStall'), {
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
  memosStartDateRange: new DateTimeRangeField(
    'memosStartDateRange',
    label('memosStartDateRange'),
  ),
  memosEndDateRange: new DateTimeRangeField(
    'memosEndDateRange',
    label('memosEndDateRange'),
  ),
};

export class MemosModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
