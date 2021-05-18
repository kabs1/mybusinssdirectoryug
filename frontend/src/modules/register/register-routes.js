import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const RegisterListPage = () =>
  import('@/modules/register/components/register-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'register',
        path: '/register',
        component: RegisterListPage,
        meta: {
          auth: true,
          permission: Permissions.values.registerView,
        },
      },
    ],
  },
];
