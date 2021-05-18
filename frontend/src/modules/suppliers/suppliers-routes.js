import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const SuppliersListPage = () =>
  import('@/modules/suppliers/components/suppliers-list-page.vue');
const SuppliersFormPage = () =>
  import('@/modules/suppliers/components/suppliers-form-page.vue');
const SuppliersViewPage = () =>
  import('@/modules/suppliers/components/suppliers-view-page.vue');
const SuppliersImporterPage = () =>
  import('@/modules/suppliers/components/suppliers-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'suppliers',
        path: '/suppliers',
        component: SuppliersListPage,
        meta: {
          auth: true,
          permission: Permissions.values.suppliersView,
        },
      },
      {
        name: 'suppliersNew',
        path: '/suppliers/new',
        component: SuppliersFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.suppliersCreate,
        },
      },
      {
        name: 'suppliersImporter',
        path: '/suppliers/import',
        component: SuppliersImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.suppliersImport,
        },
      },
      {
        name: 'suppliersEdit',
        path: '/suppliers/:id/edit',
        component: SuppliersFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.suppliersEdit,
        },
        props: true,
      },
      {
        name: 'suppliersView',
        path: '/suppliers/:id',
        component: SuppliersViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.suppliersView,
        },
        props: true,
      },
    ],
  },
];
