import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const PriceChangeListPage = () =>
  import('@/modules/price-change/components/price-change-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'priceChange',
        path: '/price-change',
        component: PriceChangeListPage,
        meta: {
          auth: true,
          permission: Permissions.values.priceChangeView,
        },
      },
    ],
  },
];
