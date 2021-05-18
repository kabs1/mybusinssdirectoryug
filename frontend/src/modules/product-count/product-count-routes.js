import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ProductCountListPage = () =>
  import('@/modules/product-count/components/product-count-list-page.vue');
const ProductCountFormPage = () =>
  import('@/modules/product-count/components/product-count-form-page.vue');
const ProductCountViewPage = () =>
  import('@/modules/product-count/components/product-count-view-page.vue');
const ProductCountImporterPage = () =>
  import('@/modules/product-count/components/product-count-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'productCount',
        path: '/product-count',
        component: ProductCountListPage,
        meta: {
          auth: true,
          permission: Permissions.values.productCountView,
        },
      },
      {
        name: 'productCountNew',
        path: '/product-count/new',
        component: ProductCountFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.productCountCreate,
        },
      },
      {
        name: 'productCountImporter',
        path: '/product-count/import',
        component: ProductCountImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.productCountImport,
        },
      },
      {
        name: 'productCountEdit',
        path: '/product-count/:id/edit',
        component: ProductCountFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.productCountEdit,
        },
        props: true,
      },
      {
        name: 'productCountView',
        path: '/product-count/:id',
        component: ProductCountViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.productCountView,
        },
        props: true,
      },
    ],
  },
];
