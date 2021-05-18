const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Holiday extends AbstractEntityModel {
  constructor() {
    super('holiday', 'holiday', {
      holidayCover: new types.Files(),
      holidayTitle: new types.String(null, 20),
      holidayDetails: new types.String(null, null),
      holidayStartDate: new types.DateTime(),
      holidayEndDate: new types.DateTime(),
      holidayStall: new types.RelationToMany(),
      holidayStaff: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
