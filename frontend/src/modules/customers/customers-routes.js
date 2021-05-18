import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CustomersListPage = () =>
  import('@/modules/customers/components/customers-list-page.vue');
const CustomersFormPage = () =>
  import('@/modules/customers/components/customers-form-page.vue');
const CustomersViewPage = () =>
  import('@/modules/customers/components/customers-view-page.vue');
const CustomersImporterPage = () =>
  import('@/modules/customers/components/customers-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'customers',
        path: '/customers',
        component: CustomersListPage,
        meta: {
          auth: true,
          permission: Permissions.values.customersView,
        },
      },
      {
        name: 'customersNew',
        path: '/customers/new',
        component: CustomersFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.customersCreate,
        },
      },
      {
        name: 'customersImporter',
        path: '/customers/import',
        component: CustomersImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.customersImport,
        },
      },
      {
        name: 'customersEdit',
        path: '/customers/:id/edit',
        component: CustomersFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.customersEdit,
        },
        props: true,
      },
      {
        name: 'customersView',
        path: '/customers/:id',
        component: CustomersViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.customersView,
        },
        props: true,
      },
    ],
  },
];
