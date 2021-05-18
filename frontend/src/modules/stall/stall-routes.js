import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const StallListPage = () =>
  import('@/modules/stall/components/stall-list-page.vue');
const StallFormPage = () =>
  import('@/modules/stall/components/stall-form-page.vue');
const StallViewPage = () =>
  import('@/modules/stall/components/stall-view-page.vue');
const StallImporterPage = () =>
  import('@/modules/stall/components/stall-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'stall',
        path: '/stall',
        component: StallListPage,
        meta: {
          auth: true,
          permission: Permissions.values.stallView,
        },
      },
      {
        name: 'stallNew',
        path: '/stall/new',
        component: StallFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.stallCreate,
        },
      },
      {
        name: 'stallImporter',
        path: '/stall/import',
        component: StallImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.stallImport,
        },
      },
      {
        name: 'stallEdit',
        path: '/stall/:id/edit',
        component: StallFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.stallEdit,
        },
        props: true,
      },
      {
        name: 'stallView',
        path: '/stall/:id',
        component: StallViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.stallView,
        },
        props: true,
      },
    ],
  },
];
