import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const LeaveTypeListPage = () =>
  import('@/modules/leave-type/components/leave-type-list-page.vue');
const LeaveTypeFormPage = () =>
  import('@/modules/leave-type/components/leave-type-form-page.vue');
const LeaveTypeViewPage = () =>
  import('@/modules/leave-type/components/leave-type-view-page.vue');
const LeaveTypeImporterPage = () =>
  import('@/modules/leave-type/components/leave-type-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'leaveType',
        path: '/leave-type',
        component: LeaveTypeListPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveTypeView,
        },
      },
      {
        name: 'leaveTypeNew',
        path: '/leave-type/new',
        component: LeaveTypeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveTypeCreate,
        },
      },
      {
        name: 'leaveTypeImporter',
        path: '/leave-type/import',
        component: LeaveTypeImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveTypeImport,
        },
      },
      {
        name: 'leaveTypeEdit',
        path: '/leave-type/:id/edit',
        component: LeaveTypeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveTypeEdit,
        },
        props: true,
      },
      {
        name: 'leaveTypeView',
        path: '/leave-type/:id',
        component: LeaveTypeViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.leaveTypeView,
        },
        props: true,
      },
    ],
  },
];
