import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const PayrollListPage = () =>
  import('@/modules/payroll/components/payroll-list-page.vue');
const PayrollFormPage = () =>
  import('@/modules/payroll/components/payroll-form-page.vue');
const PayrollViewPage = () =>
  import('@/modules/payroll/components/payroll-view-page.vue');
const PayrollImporterPage = () =>
  import('@/modules/payroll/components/payroll-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'payroll',
        path: '/payroll',
        component: PayrollListPage,
        meta: {
          auth: true,
          permission: Permissions.values.payrollView,
        },
      },
      {
        name: 'payrollNew',
        path: '/payroll/new',
        component: PayrollFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.payrollCreate,
        },
      },
      {
        name: 'payrollImporter',
        path: '/payroll/import',
        component: PayrollImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.payrollImport,
        },
      },
      {
        name: 'payrollEdit',
        path: '/payroll/:id/edit',
        component: PayrollFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.payrollEdit,
        },
        props: true,
      },
      {
        name: 'payrollView',
        path: '/payroll/:id',
        component: PayrollViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.payrollView,
        },
        props: true,
      },
    ],
  },
];
