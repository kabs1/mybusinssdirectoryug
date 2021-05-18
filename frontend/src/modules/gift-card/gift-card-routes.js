import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const GiftCardListPage = () =>
  import('@/modules/gift-card/components/gift-card-list-page.vue');
const GiftCardFormPage = () =>
  import('@/modules/gift-card/components/gift-card-form-page.vue');
const GiftCardViewPage = () =>
  import('@/modules/gift-card/components/gift-card-view-page.vue');
const GiftCardImporterPage = () =>
  import('@/modules/gift-card/components/gift-card-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'giftCard',
        path: '/gift-card',
        component: GiftCardListPage,
        meta: {
          auth: true,
          permission: Permissions.values.giftCardView,
        },
      },
      {
        name: 'giftCardNew',
        path: '/gift-card/new',
        component: GiftCardFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.giftCardCreate,
        },
      },
      {
        name: 'giftCardImporter',
        path: '/gift-card/import',
        component: GiftCardImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.giftCardImport,
        },
      },
      {
        name: 'giftCardEdit',
        path: '/gift-card/:id/edit',
        component: GiftCardFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.giftCardEdit,
        },
        props: true,
      },
      {
        name: 'giftCardView',
        path: '/gift-card/:id',
        component: GiftCardViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.giftCardView,
        },
        props: true,
      },
    ],
  },
];
