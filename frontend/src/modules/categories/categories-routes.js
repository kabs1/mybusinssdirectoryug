import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CategoriesListPage = () =>
  import('@/modules/categories/components/categories-list-page.vue');
const CategoriesFormPage = () =>
  import('@/modules/categories/components/categories-form-page.vue');
const CategoriesViewPage = () =>
  import('@/modules/categories/components/categories-view-page.vue');
const CategoriesImporterPage = () =>
  import('@/modules/categories/components/categories-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'categories',
        path: '/categories',
        component: CategoriesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoriesView,
        },
      },
      {
        name: 'categoriesNew',
        path: '/categories/new',
        component: CategoriesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoriesCreate,
        },
      },
      {
        name: 'categoriesImporter',
        path: '/categories/import',
        component: CategoriesImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoriesImport,
        },
      },
      {
        name: 'categoriesEdit',
        path: '/categories/:id/edit',
        component: CategoriesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoriesEdit,
        },
        props: true,
      },
      {
        name: 'categoriesView',
        path: '/categories/:id',
        component: CategoriesViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoriesView,
        },
        props: true,
      },
    ],
  },
];
