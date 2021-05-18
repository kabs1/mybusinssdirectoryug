import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ExpenseCategoryListPage = () =>
  import('@/modules/expense-category/components/expense-category-list-page.vue');
const ExpenseCategoryFormPage = () =>
  import('@/modules/expense-category/components/expense-category-form-page.vue');
const ExpenseCategoryViewPage = () =>
  import('@/modules/expense-category/components/expense-category-view-page.vue');
const ExpenseCategoryImporterPage = () =>
  import('@/modules/expense-category/components/expense-category-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'expenseCategory',
        path: '/expense-category',
        component: ExpenseCategoryListPage,
        meta: {
          auth: true,
          permission: Permissions.values.expenseCategoryView,
        },
      },
      {
        name: 'expenseCategoryNew',
        path: '/expense-category/new',
        component: ExpenseCategoryFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.expenseCategoryCreate,
        },
      },
      {
        name: 'expenseCategoryImporter',
        path: '/expense-category/import',
        component: ExpenseCategoryImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.expenseCategoryImport,
        },
      },
      {
        name: 'expenseCategoryEdit',
        path: '/expense-category/:id/edit',
        component: ExpenseCategoryFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.expenseCategoryEdit,
        },
        props: true,
      },
      {
        name: 'expenseCategoryView',
        path: '/expense-category/:id',
        component: ExpenseCategoryViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.expenseCategoryView,
        },
        props: true,
      },
    ],
  },
];
