import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const NoticeListPage = () =>
  import('@/modules/notice/components/notice-list-page.vue');
const NoticeFormPage = () =>
  import('@/modules/notice/components/notice-form-page.vue');
const NoticeViewPage = () =>
  import('@/modules/notice/components/notice-view-page.vue');
const NoticeImporterPage = () =>
  import('@/modules/notice/components/notice-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'notice',
        path: '/notice',
        component: NoticeListPage,
        meta: {
          auth: true,
          permission: Permissions.values.noticeView,
        },
      },
      {
        name: 'noticeNew',
        path: '/notice/new',
        component: NoticeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.noticeCreate,
        },
      },
      {
        name: 'noticeImporter',
        path: '/notice/import',
        component: NoticeImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.noticeImport,
        },
      },
      {
        name: 'noticeEdit',
        path: '/notice/:id/edit',
        component: NoticeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.noticeEdit,
        },
        props: true,
      },
      {
        name: 'noticeView',
        path: '/notice/:id',
        component: NoticeViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.noticeView,
        },
        props: true,
      },
    ],
  },
];
