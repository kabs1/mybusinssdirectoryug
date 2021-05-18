const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Todo extends AbstractEntityModel {
  constructor() {
    super('todo', 'todo', {
      todoTitle: new types.String(null, 20),
      todoNote: new types.String(null, null),
      todoStaff: new types.RelationToMany(),
      todoStatus: new types.Enumerator([
        "New",
        "Progress",
        "Done"
      ]),
      todoStartDate: new types.DateTime(),
      todoEndDate: new types.DateTime(),
      todoRating: new types.Number(null, 100),
      todoStall: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
