import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DeviceSessionsListPage = () =>
  import('@/modules/device-sessions/components/device-sessions-list-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'deviceSessions',
        path: '/device-sessions',
        component: DeviceSessionsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.deviceSessionsView,
        },
      },
    ],
  },
];
