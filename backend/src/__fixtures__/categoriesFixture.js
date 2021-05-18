const genericFixture = require('./genericFixture');
const CategoriesRepository = require('../database/repositories/categoriesRepository');

const categoriesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CategoriesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = categoriesFixture;
