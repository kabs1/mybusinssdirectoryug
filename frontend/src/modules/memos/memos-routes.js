import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const MemosListPage = () =>
  import('@/modules/memos/components/memos-list-page.vue');
const MemosFormPage = () =>
  import('@/modules/memos/components/memos-form-page.vue');
const MemosViewPage = () =>
  import('@/modules/memos/components/memos-view-page.vue');
const MemosImporterPage = () =>
  import('@/modules/memos/components/memos-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'memos',
        path: '/memos',
        component: MemosListPage,
        meta: {
          auth: true,
          permission: Permissions.values.memosView,
        },
      },
      {
        name: 'memosNew',
        path: '/memos/new',
        component: MemosFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.memosCreate,
        },
      },
      {
        name: 'memosImporter',
        path: '/memos/import',
        component: MemosImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.memosImport,
        },
      },
      {
        name: 'memosEdit',
        path: '/memos/:id/edit',
        component: MemosFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.memosEdit,
        },
        props: true,
      },
      {
        name: 'memosView',
        path: '/memos/:id',
        component: MemosViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.memosView,
        },
        props: true,
      },
    ],
  },
];
