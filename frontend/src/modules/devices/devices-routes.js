import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DevicesListPage = () =>
  import('@/modules/devices/components/devices-list-page.vue');
const DevicesFormPage = () =>
  import('@/modules/devices/components/devices-form-page.vue');
const DevicesViewPage = () =>
  import('@/modules/devices/components/devices-view-page.vue');
const DevicesImporterPage = () =>
  import('@/modules/devices/components/devices-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'devices',
        path: '/devices',
        component: DevicesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.devicesView,
        },
      },
      {
        name: 'devicesNew',
        path: '/devices/new',
        component: DevicesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.devicesCreate,
        },
      },
      {
        name: 'devicesImporter',
        path: '/devices/import',
        component: DevicesImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.devicesImport,
        },
      },
      {
        name: 'devicesEdit',
        path: '/devices/:id/edit',
        component: DevicesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.devicesEdit,
        },
        props: true,
      },
      {
        name: 'devicesView',
        path: '/devices/:id',
        component: DevicesViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.devicesView,
        },
        props: true,
      },
    ],
  },
];
