import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const SalesListPage = () =>
  import('@/modules/sales/components/sales-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'sales',
        path: '/sales',
        component: SalesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.salesView,
        },
      },
    ],
  },
];
