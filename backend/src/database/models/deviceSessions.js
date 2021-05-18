const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class DeviceSessions extends AbstractEntityModel {
  constructor() {
    super('deviceSessions', 'deviceSessions', {
      sessionDevice: new types.RelationToOne(),
      sessionLoginDate: new types.DateTime(),
      sessionLogoutDate: new types.DateTime(),
      sessionUser: new types.RelationToOne(),
      sessionDeviceType: new types.Enumerator([
        "POS",
        "Stock",
        "Customer",
        "HR"
      ]),
      sessionIp: new types.String(null, null),
      sessionNetwork: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
