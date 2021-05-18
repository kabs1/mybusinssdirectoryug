import importerStore from '@/shared/importer/importer-store';
import { TodoService } from '@/modules/todo/todo-service';
import todoImporterFields from '@/modules/todo/todo-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  TodoService.import,
  todoImporterFields,
  i18n('entities.todo.importer.fileName'),
  i18n('entities.todo.importer.hint'),
);
