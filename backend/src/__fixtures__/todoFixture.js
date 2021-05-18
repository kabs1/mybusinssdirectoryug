const genericFixture = require('./genericFixture');
const TodoRepository = require('../database/repositories/todoRepository');

const todoFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new TodoRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = todoFixture;
