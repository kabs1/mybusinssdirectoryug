import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DocumentTypesListPage = () =>
  import('@/modules/document-types/components/document-types-list-page.vue');
const DocumentTypesFormPage = () =>
  import('@/modules/document-types/components/document-types-form-page.vue');
const DocumentTypesViewPage = () =>
  import('@/modules/document-types/components/document-types-view-page.vue');
const DocumentTypesImporterPage = () =>
  import('@/modules/document-types/components/document-types-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'documentTypes',
        path: '/document-types',
        component: DocumentTypesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentTypesView,
        },
      },
      {
        name: 'documentTypesNew',
        path: '/document-types/new',
        component: DocumentTypesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentTypesCreate,
        },
      },
      {
        name: 'documentTypesImporter',
        path: '/document-types/import',
        component: DocumentTypesImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentTypesImport,
        },
      },
      {
        name: 'documentTypesEdit',
        path: '/document-types/:id/edit',
        component: DocumentTypesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentTypesEdit,
        },
        props: true,
      },
      {
        name: 'documentTypesView',
        path: '/document-types/:id',
        component: DocumentTypesViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.documentTypesView,
        },
        props: true,
      },
    ],
  },
];
