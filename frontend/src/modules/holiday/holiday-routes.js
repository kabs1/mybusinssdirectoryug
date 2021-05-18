import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const HolidayListPage = () =>
  import('@/modules/holiday/components/holiday-list-page.vue');
const HolidayFormPage = () =>
  import('@/modules/holiday/components/holiday-form-page.vue');
const HolidayViewPage = () =>
  import('@/modules/holiday/components/holiday-view-page.vue');
const HolidayImporterPage = () =>
  import('@/modules/holiday/components/holiday-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'holiday',
        path: '/holiday',
        component: HolidayListPage,
        meta: {
          auth: true,
          permission: Permissions.values.holidayView,
        },
      },
      {
        name: 'holidayNew',
        path: '/holiday/new',
        component: HolidayFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.holidayCreate,
        },
      },
      {
        name: 'holidayImporter',
        path: '/holiday/import',
        component: HolidayImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.holidayImport,
        },
      },
      {
        name: 'holidayEdit',
        path: '/holiday/:id/edit',
        component: HolidayFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.holidayEdit,
        },
        props: true,
      },
      {
        name: 'holidayView',
        path: '/holiday/:id',
        component: HolidayViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.holidayView,
        },
        props: true,
      },
    ],
  },
];
