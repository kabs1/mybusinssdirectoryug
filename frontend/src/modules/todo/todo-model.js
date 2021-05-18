import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { StaffField } from '@/modules/staff/staff-field';
import { StallField } from '@/modules/stall/stall-field';

function label(name) {
  return i18n(`entities.todo.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.todo.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  todoTitle: new StringField('todoTitle', label('todoTitle'), {
    "required": true,
    "max": 20
  }),
  todoNote: new StringField('todoNote', label('todoNote'), {
    "required": true
  }),
  todoStaff: StaffField.relationToMany('todoStaff', label('todoStaff'), {
    "required": true
  }),
  todoStatus: new EnumeratorField('todoStatus', label('todoStatus'), [
    { id: 'New', label: enumeratorLabel('todoStatus', 'New') },
    { id: 'Progress', label: enumeratorLabel('todoStatus', 'Progress') },
    { id: 'Done', label: enumeratorLabel('todoStatus', 'Done') },
  ],{
    "required": true
  }),
  todoStartDate: new DateTimeField('todoStartDate', label('todoStartDate'), {
    "required": true
  }),
  todoEndDate: new DateTimeField('todoEndDate', label('todoEndDate'), {
    "required": true
  }),
  todoRating: new IntegerField('todoRating', label('todoRating'), {
    "max": 100
  }),
  todoStall: StallField.relationToMany('todoStall', label('todoStall'), {
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
  todoStartDateRange: new DateTimeRangeField(
    'todoStartDateRange',
    label('todoStartDateRange'),
  ),
  todoEndDateRange: new DateTimeRangeField(
    'todoEndDateRange',
    label('todoEndDateRange'),
  ),
  todoRatingRange: new IntegerRangeField(
    'todoRatingRange',
    label('todoRatingRange'),
  ),
};

export class TodoModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
