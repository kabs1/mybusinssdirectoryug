import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ProductsListPage = () =>
  import('@/modules/products/components/products-list-page.vue');
const ProductsFormPage = () =>
  import('@/modules/products/components/products-form-page.vue');
const ProductsViewPage = () =>
  import('@/modules/products/components/products-view-page.vue');
const ProductsImporterPage = () =>
  import('@/modules/products/components/products-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'products',
        path: '/products',
        component: ProductsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.productsView,
        },
      },
      {
        name: 'productsNew',
        path: '/products/new',
        component: ProductsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.productsCreate,
        },
      },
      {
        name: 'productsImporter',
        path: '/products/import',
        component: ProductsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.productsImport,
        },
      },
      {
        name: 'productsEdit',
        path: '/products/:id/edit',
        component: ProductsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.productsEdit,
        },
        props: true,
      },
      {
        name: 'productsView',
        path: '/products/:id',
        component: ProductsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.productsView,
        },
        props: true,
      },
    ],
  },
];
