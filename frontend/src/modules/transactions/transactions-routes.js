import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const TransactionsListPage = () =>
  import('@/modules/transactions/components/transactions-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'transactions',
        path: '/transactions',
        component: TransactionsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.transactionsView,
        },
      },
    ],
  },
];
