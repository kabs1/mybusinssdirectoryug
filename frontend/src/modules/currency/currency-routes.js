import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CurrencyListPage = () =>
  import('@/modules/currency/components/currency-list-page.vue');
const CurrencyFormPage = () =>
  import('@/modules/currency/components/currency-form-page.vue');
const CurrencyViewPage = () =>
  import('@/modules/currency/components/currency-view-page.vue');
const CurrencyImporterPage = () =>
  import('@/modules/currency/components/currency-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'currency',
        path: '/currency',
        component: CurrencyListPage,
        meta: {
          auth: true,
          permission: Permissions.values.currencyView,
        },
      },
      {
        name: 'currencyNew',
        path: '/currency/new',
        component: CurrencyFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.currencyCreate,
        },
      },
      {
        name: 'currencyImporter',
        path: '/currency/import',
        component: CurrencyImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.currencyImport,
        },
      },
      {
        name: 'currencyEdit',
        path: '/currency/:id/edit',
        component: CurrencyFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.currencyEdit,
        },
        props: true,
      },
      {
        name: 'currencyView',
        path: '/currency/:id',
        component: CurrencyViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.currencyView,
        },
        props: true,
      },
    ],
  },
];
