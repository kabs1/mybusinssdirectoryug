const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Devices extends AbstractEntityModel {
  constructor() {
    super('devices', 'devices', {
      deviceImage: new types.Files(),
      deviceName: new types.String(null, null),
      deviceSerial: new types.String(4, null),
      deviceType: new types.Enumerator([
        "android",
        "ios",
        "windows",
        "mac",
        "linux"
      ]),
      deviceCurrency: new types.RelationToOne(),
      deviceNote: new types.String(null, null),
      deviceDocs: new types.Files(),
      deviceStall: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
