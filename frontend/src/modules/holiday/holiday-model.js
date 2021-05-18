import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { StallField } from '@/modules/stall/stall-field';
import { StaffField } from '@/modules/staff/staff-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.holiday.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  holidayCover: new ImagesField('holidayCover', label('holidayCover'), 'holiday/holidayCover',{
    "max": 1
  }),
  holidayTitle: new StringField('holidayTitle', label('holidayTitle'), {
    "required": true,
    "max": 20
  }),
  holidayDetails: new StringField('holidayDetails', label('holidayDetails'), {
    "required": true
  }),
  holidayStartDate: new DateTimeField('holidayStartDate', label('holidayStartDate'), {
    "required": true
  }),
  holidayEndDate: new DateTimeField('holidayEndDate', label('holidayEndDate'), {
    "required": true
  }),
  holidayStall: StallField.relationToMany('holidayStall', label('holidayStall'), {}),
  holidayStaff: StaffField.relationToMany('holidayStaff', label('holidayStaff'), {}),
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
  holidayStartDateRange: new DateTimeRangeField(
    'holidayStartDateRange',
    label('holidayStartDateRange'),
  ),
  holidayEndDateRange: new DateTimeRangeField(
    'holidayEndDateRange',
    label('holidayEndDateRange'),
  ),
};

export class HolidayModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
