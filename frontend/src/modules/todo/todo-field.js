import { TodoService } from '@/modules/todo/todo-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class TodoField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/todo',
      Permissions.values.todoRead,
      TodoService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.todoTitle,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/todo',
      Permissions.values.todoRead,
      TodoService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.todoTitle,
        };
      },
      options,
    );
  }
}
