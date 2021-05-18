import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const VariationListPage = () =>
  import('@/modules/variation/components/variation-list-page.vue');
const VariationFormPage = () =>
  import('@/modules/variation/components/variation-form-page.vue');
const VariationViewPage = () =>
  import('@/modules/variation/components/variation-view-page.vue');
const VariationImporterPage = () =>
  import('@/modules/variation/components/variation-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'variation',
        path: '/variation',
        component: VariationListPage,
        meta: {
          auth: true,
          permission: Permissions.values.variationView,
        },
      },
      {
        name: 'variationNew',
        path: '/variation/new',
        component: VariationFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.variationCreate,
        },
      },
      {
        name: 'variationImporter',
        path: '/variation/import',
        component: VariationImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.variationImport,
        },
      },
      {
        name: 'variationEdit',
        path: '/variation/:id/edit',
        component: VariationFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.variationEdit,
        },
        props: true,
      },
      {
        name: 'variationView',
        path: '/variation/:id',
        component: VariationViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.variationView,
        },
        props: true,
      },
    ],
  },
];
