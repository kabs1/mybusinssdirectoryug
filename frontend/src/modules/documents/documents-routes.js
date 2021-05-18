import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DocumentsListPage = () =>
  import('@/modules/documents/components/documents-list-page.vue');
const DocumentsFormPage = () =>
  import('@/modules/documents/components/documents-form-page.vue');
const DocumentsViewPage = () =>
  import('@/modules/documents/components/documents-view-page.vue');
const DocumentsImporterPage = () =>
  import('@/modules/documents/components/documents-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'documents',
        path: '/documents',
        component: DocumentsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentsView,
        },
      },
      {
        name: 'documentsNew',
        path: '/documents/new',
        component: DocumentsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentsCreate,
        },
      },
      {
        name: 'documentsImporter',
        path: '/documents/import',
        component: DocumentsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentsImport,
        },
      },
      {
        name: 'documentsEdit',
        path: '/documents/:id/edit',
        component: DocumentsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentsEdit,
        },
        props: true,
      },
      {
        name: 'documentsView',
        path: '/documents/:id',
        component: DocumentsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentsView,
        },
        props: true,
      },
    ],
  },
];
