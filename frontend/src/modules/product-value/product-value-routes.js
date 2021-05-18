import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ProductValueListPage = () =>
  import('@/modules/product-value/components/product-value-list-page.vue');
const ProductValueFormPage = () =>
  import('@/modules/product-value/components/product-value-form-page.vue');
const ProductValueViewPage = () =>
  import('@/modules/product-value/components/product-value-view-page.vue');
const ProductValueImporterPage = () =>
  import('@/modules/product-value/components/product-value-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'productValue',
        path: '/product-value',
        component: ProductValueListPage,
        meta: {
          auth: true,
          permission: Permissions.values.productValueView,
        },
      },
      {
        name: 'productValueNew',
        path: '/product-value/new',
        component: ProductValueFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.productValueCreate,
        },
      },
      {
        name: 'productValueImporter',
        path: '/product-value/import',
        component: ProductValueImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.productValueImport,
        },
      },
      {
        name: 'productValueEdit',
        path: '/product-value/:id/edit',
        component: ProductValueFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.productValueEdit,
        },
        props: true,
      },
      {
        name: 'productValueView',
        path: '/product-value/:id',
        component: ProductValueViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.productValueView,
        },
        props: true,
      },
    ],
  },
];
