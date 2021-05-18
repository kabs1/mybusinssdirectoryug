import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const UnitsListPage = () =>
  import('@/modules/units/components/units-list-page.vue');
const UnitsFormPage = () =>
  import('@/modules/units/components/units-form-page.vue');
const UnitsViewPage = () =>
  import('@/modules/units/components/units-view-page.vue');
const UnitsImporterPage = () =>
  import('@/modules/units/components/units-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'units',
        path: '/units',
        component: UnitsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.unitsView,
        },
      },
      {
        name: 'unitsNew',
        path: '/units/new',
        component: UnitsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.unitsCreate,
        },
      },
      {
        name: 'unitsImporter',
        path: '/units/import',
        component: UnitsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.unitsImport,
        },
      },
      {
        name: 'unitsEdit',
        path: '/units/:id/edit',
        component: UnitsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.unitsEdit,
        },
        props: true,
      },
      {
        name: 'unitsView',
        path: '/units/:id',
        component: UnitsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.unitsView,
        },
        props: true,
      },
    ],
  },
];
