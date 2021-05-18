import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const TodoListPage = () =>
  import('@/modules/todo/components/todo-list-page.vue');
const TodoFormPage = () =>
  import('@/modules/todo/components/todo-form-page.vue');
const TodoViewPage = () =>
  import('@/modules/todo/components/todo-view-page.vue');
const TodoImporterPage = () =>
  import('@/modules/todo/components/todo-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'todo',
        path: '/todo',
        component: TodoListPage,
        meta: {
          auth: true,
          permission: Permissions.values.todoView,
        },
      },
      {
        name: 'todoNew',
        path: '/todo/new',
        component: TodoFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.todoCreate,
        },
      },
      {
        name: 'todoImporter',
        path: '/todo/import',
        component: TodoImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.todoImport,
        },
      },
      {
        name: 'todoEdit',
        path: '/todo/:id/edit',
        component: TodoFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.todoEdit,
        },
        props: true,
      },
      {
        name: 'todoView',
        path: '/todo/:id',
        component: TodoViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.todoView,
        },
        props: true,
      },
    ],
  },
];
