import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const AssetsListPage = () =>
  import('@/modules/assets/components/assets-list-page.vue');
const AssetsFormPage = () =>
  import('@/modules/assets/components/assets-form-page.vue');
const AssetsViewPage = () =>
  import('@/modules/assets/components/assets-view-page.vue');
const AssetsImporterPage = () =>
  import('@/modules/assets/components/assets-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'assets',
        path: '/assets',
        component: AssetsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.assetsView,
        },
      },
      {
        name: 'assetsNew',
        path: '/assets/new',
        component: AssetsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.assetsCreate,
        },
      },
      {
        name: 'assetsImporter',
        path: '/assets/import',
        component: AssetsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.assetsImport,
        },
      },
      {
        name: 'assetsEdit',
        path: '/assets/:id/edit',
        component: AssetsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.assetsEdit,
        },
        props: true,
      },
      {
        name: 'assetsView',
        path: '/assets/:id',
        component: AssetsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.assetsView,
        },
        props: true,
      },
    ],
  },
];
