import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const PurchasesListPage = () =>
  import('@/modules/purchases/components/purchases-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'purchases',
        path: '/purchases',
        component: PurchasesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.purchasesView,
        },
      },
    ],
  },
];
