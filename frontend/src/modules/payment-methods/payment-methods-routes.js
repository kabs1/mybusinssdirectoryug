import Layout from '@/modules/layout/components/layout.vue';
// import Permissions from '@/security/permissions';
//
// const PaymentMethodsListPage = () =>
//   import('@/modules/payment-methods/components/payment-methods-list-page.vue');
// const PaymentMethodsFormPage = () =>
//   import('@/modules/payment-methods/components/payment-methods-form-page.vue');
// const PaymentMethodsViewPage = () =>
//   import('@/modules/payment-methods/components/payment-methods-view-page.vue');
// const PaymentMethodsImporterPage = () =>
//   import('@/modules/payment-methods/components/payment-methods-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      // {
      //   name: 'paymentMethods',
      //   path: '/payment-methods',
      //   component: PaymentMethodsListPage,
      //   meta: {
      //     auth: true,
      //     permission: Permissions.values.paymentMethodsView,
      //   },
      // },
      // {
      //   name: 'paymentMethodsNew',
      //   path: '/payment-methods/new',
      //   component: PaymentMethodsFormPage,
      //   meta: {
      //     auth: true,
      //     permission: Permissions.values.paymentMethodsCreate,
      //   },
      // },
      // {
      //   name: 'paymentMethodsImporter',
      //   path: '/payment-methods/import',
      //   component: PaymentMethodsImporterPage,
      //   meta: {
      //     auth: true,
      //     permission: Permissions.values.paymentMethodsImport,
      //   },
      // },
      // {
      //   name: 'paymentMethodsEdit',
      //   path: '/payment-methods/:id/edit',
      //   component: PaymentMethodsFormPage,
      //   meta: {
      //     auth: true,
      //     permission: Permissions.values.paymentMethodsEdit,
      //   },
      //   props: true,
      // },
      // {
      //   name: 'paymentMethodsView',
      //   path: '/payment-methods/:id',
      //   component: PaymentMethodsViewPage,
      //   meta: {
      //     auth: true,
      //     permission: Permissions.values.paymentMethodsView,
      //   },
      //   props: true,
      // },
    ],
  },
];
