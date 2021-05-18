import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DamagesListPage = () =>
  import('@/modules/damages/components/damages-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'damages',
        path: '/damages',
        component: DamagesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.damagesView,
        },
      },
    ],
  },
];
