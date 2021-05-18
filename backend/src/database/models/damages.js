const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Damages extends AbstractEntityModel {
  constructor() {
    super('damages', 'damages', {
      damageCover: new types.Files(),
      damageRef: new types.String(3, 15),
      damageProduct: new types.RelationToOne(),
      damageDate: new types.Date(),
      damageCausedBy: new types.RelationToMany(),
      damageAmmount: new types.Number(null, null),
      damageNote: new types.String(null, 250),
      damageDocs: new types.Files(),
      damageStall: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
