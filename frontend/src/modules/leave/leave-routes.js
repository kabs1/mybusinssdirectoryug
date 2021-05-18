import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const LeaveListPage = () =>
  import('@/modules/leave/components/leave-list-page.vue');
const LeaveFormPage = () =>
  import('@/modules/leave/components/leave-form-page.vue');
const LeaveViewPage = () =>
  import('@/modules/leave/components/leave-view-page.vue');
const LeaveImporterPage = () =>
  import('@/modules/leave/components/leave-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'leave',
        path: '/leave',
        component: LeaveListPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveView,
        },
      },
      {
        name: 'leaveNew',
        path: '/leave/new',
        component: LeaveFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveCreate,
        },
      },
      {
        name: 'leaveImporter',
        path: '/leave/import',
        component: LeaveImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveImport,
        },
      },
      {
        name: 'leaveEdit',
        path: '/leave/:id/edit',
        component: LeaveFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveEdit,
        },
        props: true,
      },
      {
        name: 'leaveView',
        path: '/leave/:id',
        component: LeaveViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveView,
        },
        props: true,
      },
    ],
  },
];
