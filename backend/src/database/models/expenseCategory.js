const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class ExpenseCategory extends AbstractEntityModel {
  constructor() {
    super('expenseCategory', 'expenseCategory', {
      expCategoryTitle: new types.String(null, null),
      expCategoryDetails: new types.String(null, 250),
      importHash: new types.String(null, 255),
    });
  }
};
