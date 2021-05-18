import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ExpensesListPage = () =>
  import('@/modules/expenses/components/expenses-list-page.vue');
const ExpensesFormPage = () =>
  import('@/modules/expenses/components/expenses-form-page.vue');
const ExpensesViewPage = () =>
  import('@/modules/expenses/components/expenses-view-page.vue');
const ExpensesImporterPage = () =>
  import('@/modules/expenses/components/expenses-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'expenses',
        path: '/expenses',
        component: ExpensesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.expensesView,
        },
      },
      {
        name: 'expensesNew',
        path: '/expenses/new',
        component: ExpensesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.expensesCreate,
        },
      },
      {
        name: 'expensesImporter',
        path: '/expenses/import',
        component: ExpensesImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.expensesImport,
        },
      },
      {
        name: 'expensesEdit',
        path: '/expenses/:id/edit',
        component: ExpensesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.expensesEdit,
        },
        props: true,
      },
      {
        name: 'expensesView',
        path: '/expenses/:id',
        component: ExpensesViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.expensesView,
        },
        props: true,
      },
    ],
  },
];
