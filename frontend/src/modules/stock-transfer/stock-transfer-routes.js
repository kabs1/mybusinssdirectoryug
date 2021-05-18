import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const StockTransferListPage = () =>
  import('@/modules/stock-transfer/components/stock-transfer-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'stockTransfer',
        path: '/stock-transfer',
        component: StockTransferListPage,
        meta: {
          auth: true,
          permission: Permissions.values.stockTransferView,
        },
      },
    ],
  },
];
