import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CommissionsListPage = () =>
  import('@/modules/commissions/components/commissions-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'commissions',
        path: '/commissions',
        component: CommissionsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.commissionsView,
        },
      },
    ],
  },
];
