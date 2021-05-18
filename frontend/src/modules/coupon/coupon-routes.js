import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CouponListPage = () =>
  import('@/modules/coupon/components/coupon-list-page.vue');
const CouponFormPage = () =>
  import('@/modules/coupon/components/coupon-form-page.vue');
const CouponViewPage = () =>
  import('@/modules/coupon/components/coupon-view-page.vue');
const CouponImporterPage = () =>
  import('@/modules/coupon/components/coupon-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'coupon',
        path: '/coupon',
        component: CouponListPage,
        meta: {
          auth: true,
          permission: Permissions.values.couponView,
        },
      },
      {
        name: 'couponNew',
        path: '/coupon/new',
        component: CouponFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.couponCreate,
        },
      },
      {
        name: 'couponImporter',
        path: '/coupon/import',
        component: CouponImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.couponImport,
        },
      },
      {
        name: 'couponEdit',
        path: '/coupon/:id/edit',
        component: CouponFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.couponEdit,
        },
        props: true,
      },
      {
        name: 'couponView',
        path: '/coupon/:id',
        component: CouponViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.couponView,
        },
        props: true,
      },
    ],
  },
];
