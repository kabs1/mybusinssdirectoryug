import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const TaxClassListPage = () =>
  import('@/modules/tax-class/components/tax-class-list-page.vue');
const TaxClassFormPage = () =>
  import('@/modules/tax-class/components/tax-class-form-page.vue');
const TaxClassViewPage = () =>
  import('@/modules/tax-class/components/tax-class-view-page.vue');
const TaxClassImporterPage = () =>
  import('@/modules/tax-class/components/tax-class-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'taxClass',
        path: '/tax-class',
        component: TaxClassListPage,
        meta: {
          auth: true,
          permission: Permissions.values.taxClassView,
        },
      },
      {
        name: 'taxClassNew',
        path: '/tax-class/new',
        component: TaxClassFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.taxClassCreate,
        },
      },
      {
        name: 'taxClassImporter',
        path: '/tax-class/import',
        component: TaxClassImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.taxClassImport,
        },
      },
      {
        name: 'taxClassEdit',
        path: '/tax-class/:id/edit',
        component: TaxClassFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.taxClassEdit,
        },
        props: true,
      },
      {
        name: 'taxClassView',
        path: '/tax-class/:id',
        component: TaxClassViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.taxClassView,
        },
        props: true,
      },
    ],
  },
];
