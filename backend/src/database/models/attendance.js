const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Attendance extends AbstractEntityModel {
  constructor() {
    super('attendance', 'attendance', {
      attendanceRef: new types.String(3, 15),
      attendanceStaff: new types.RelationToOne(),
      attendanceClockIn: new types.DateTime(),
      attendanceClockOut: new types.DateTime(),
      attendanceNote: new types.String(null, 250),
      expenseStall: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
