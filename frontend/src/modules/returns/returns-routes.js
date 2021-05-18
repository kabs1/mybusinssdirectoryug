import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ReturnsListPage = () =>
  import('@/modules/returns/components/returns-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'returns',
        path: '/returns',
        component: ReturnsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.returnsView,
        },
      },
    ],
  },
];
