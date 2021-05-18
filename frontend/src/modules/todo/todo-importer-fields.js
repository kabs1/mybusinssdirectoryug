import { TodoModel } from '@/modules/todo/todo-model';

const { fields } = TodoModel;

export default [
  fields.todoTitle,
  fields.todoNote,
  fields.todoStaff,
  fields.todoStatus,
  fields.todoStartDate,
  fields.todoEndDate,
  fields.todoRating,
  fields.todoStall,
];
