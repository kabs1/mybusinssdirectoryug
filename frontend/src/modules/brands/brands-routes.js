import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const BrandsListPage = () =>
  import('@/modules/brands/components/brands-list-page.vue');
const BrandsFormPage = () =>
  import('@/modules/brands/components/brands-form-page.vue');
const BrandsViewPage = () =>
  import('@/modules/brands/components/brands-view-page.vue');
const BrandsImporterPage = () =>
  import('@/modules/brands/components/brands-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'brands',
        path: '/brands',
        component: BrandsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.brandsView,
        },
      },
      {
        name: 'brandsNew',
        path: '/brands/new',
        component: BrandsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.brandsCreate,
        },
      },
      {
        name: 'brandsImporter',
        path: '/brands/import',
        component: BrandsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.brandsImport,
        },
      },
      {
        name: 'brandsEdit',
        path: '/brands/:id/edit',
        component: BrandsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.brandsEdit,
        },
        props: true,
      },
      {
        name: 'brandsView',
        path: '/brands/:id',
        component: BrandsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.brandsView,
        },
        props: true,
      },
    ],
  },
];
