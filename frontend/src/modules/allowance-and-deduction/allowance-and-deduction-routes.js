import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const AllowanceAndDeductionListPage = () =>
  import('@/modules/allowance-and-deduction/components/allowance-and-deduction-list-page.vue');
const AllowanceAndDeductionFormPage = () =>
  import('@/modules/allowance-and-deduction/components/allowance-and-deduction-form-page.vue');
const AllowanceAndDeductionViewPage = () =>
  import('@/modules/allowance-and-deduction/components/allowance-and-deduction-view-page.vue');
const AllowanceAndDeductionImporterPage = () =>
  import('@/modules/allowance-and-deduction/components/allowance-and-deduction-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'allowanceAndDeduction',
        path: '/allowance-and-deduction',
        component: AllowanceAndDeductionListPage,
        meta: {
          auth: true,
          permission: Permissions.values.allowanceAndDeductionView,
        },
      },
      {
        name: 'allowanceAndDeductionNew',
        path: '/allowance-and-deduction/new',
        component: AllowanceAndDeductionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.allowanceAndDeductionCreate,
        },
      },
      {
        name: 'allowanceAndDeductionImporter',
        path: '/allowance-and-deduction/import',
        component: AllowanceAndDeductionImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.allowanceAndDeductionImport,
        },
      },
      {
        name: 'allowanceAndDeductionEdit',
        path: '/allowance-and-deduction/:id/edit',
        component: AllowanceAndDeductionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.allowanceAndDeductionEdit,
        },
        props: true,
      },
      {
        name: 'allowanceAndDeductionView',
        path: '/allowance-and-deduction/:id',
        component: AllowanceAndDeductionViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.allowanceAndDeductionView,
        },
        props: true,
      },
    ],
  },
];
