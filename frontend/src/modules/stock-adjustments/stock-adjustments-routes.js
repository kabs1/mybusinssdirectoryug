import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const StockAdjustmentsListPage = () =>
  import('@/modules/stock-adjustments/components/stock-adjustments-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'stockAdjustments',
        path: '/stock-adjustments',
        component: StockAdjustmentsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.stockAdjustmentsView,
        },
      },
    ],
  },
];
