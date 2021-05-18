import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ProductLogsListPage = () =>
  import('@/modules/product-logs/components/product-logs-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'productLogs',
        path: '/product-logs',
        component: ProductLogsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.productLogsView,
        },
      },
    ],
  },
];
