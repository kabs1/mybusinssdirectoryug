import Vue from 'vue';
import Vuex from 'vuex';
import ProgressBar from '@/shared/progress-bar/progress-bar';
import Router from 'vue-router';
import shared from '@/shared/shared-module';
import auth from '@/modules/auth/auth-module';
import layout from '@/modules/layout/layout-module';
import home from '@/modules/home/home-module';
import iam from '@/modules/iam/iam-module';
import settings from '@/modules/settings/settings-module';
import auditLog from '@/modules/audit-log/audit-log-module';
import customers from '@/modules/customers/customers-module';
import suppliers from '@/modules/suppliers/suppliers-module';
import staff from '@/modules/staff/staff-module';
import products from '@/modules/products/products-module';
import brands from '@/modules/brands/brands-module';
import categories from '@/modules/categories/categories-module';
import expenses from '@/modules/expenses/expenses-module';
import expenseCategory from '@/modules/expense-category/expense-category-module';
import assets from '@/modules/assets/assets-module';
import devices from '@/modules/devices/devices-module';
import notice from '@/modules/notice/notice-module';
import sales from '@/modules/sales/sales-module';
import purchases from '@/modules/purchases/purchases-module';
import returns from '@/modules/returns/returns-module';
import stockAdjustments from '@/modules/stock-adjustments/stock-adjustments-module';
import units from '@/modules/units/units-module';
import giftCard from '@/modules/gift-card/gift-card-module';
import coupon from '@/modules/coupon/coupon-module';
import damages from '@/modules/damages/damages-module';
import leave from '@/modules/leave/leave-module';
import leaveType from '@/modules/leave-type/leave-type-module';
import allowanceAndDeduction from '@/modules/allowance-and-deduction/allowance-and-deduction-module';
import payroll from '@/modules/payroll/payroll-module';
import attendance from '@/modules/attendance/attendance-module';
import taxClass from '@/modules/tax-class/tax-class-module';
import todo from '@/modules/todo/todo-module';
import documents from '@/modules/documents/documents-module';
import paymentMethods from '@/modules/payment-methods/payment-methods-module';
import documentTypes from '@/modules/document-types/document-types-module';
import memos from '@/modules/memos/memos-module';
import currency from '@/modules/currency/currency-module';
import holiday from '@/modules/holiday/holiday-module';
import stall from '@/modules/stall/stall-module';
import variation from '@/modules/variation/variation-module';
import productLogs from '@/modules/product-logs/product-logs-module';
import stockTransfer from '@/modules/stock-transfer/stock-transfer-module';
import deviceSessions from '@/modules/device-sessions/device-sessions-module';
import productCount from '@/modules/product-count/product-count-module';
import productValue from '@/modules/product-value/product-value-module';
import register from '@/modules/register/register-module';
import commissions from '@/modules/commissions/commissions-module';
import transactions from '@/modules/transactions/transactions-module';
import priceChange from '@/modules/price-change/price-change-module';

const modules = {
  shared,
  home,
  settings,
  auth,
  iam,
  auditLog,
  layout,
  customers,
  suppliers,
  staff,
  products,
  brands,
  categories,
  expenses,
  expenseCategory,
  assets,
  devices,
  notice,
  sales,
  purchases,
  returns,
  stockAdjustments,
  units,
  giftCard,
  coupon,
  damages,
  leave,
  leaveType,
  allowanceAndDeduction,
  payroll,
  attendance,
  taxClass,
  todo,
  documents,
  paymentMethods,
  documentTypes,
  memos,
  currency,
  holiday,
  stall,
  variation,
  productLogs,
  stockTransfer,
  deviceSessions,
  productCount,
  productValue,
  register,
  commissions,
  transactions,
  priceChange,
};

// start - boilerplate code

const exists = (el) => !!el;

function setupComponentsFiltersDirectivesAndMixins() {
  Object.keys(modules)
    .map((key) => modules[key].components)
    .filter(exists)
    .forEach((components) => {
      components.forEach((component) => {
        Vue.component(component.name, component);
      });
    });

  Object.keys(modules)
    .map((key) => modules[key].filters)
    .filter(exists)
    .forEach((components) => {
      components.forEach((filter) => {
        Vue.filter(filter.name, filter.implementation);
      });
    });

  Object.keys(modules)
    .map((key) => modules[key].directives)
    .filter(exists)
    .forEach((directives) => {
      directives.forEach((directive) => {
        Vue.directive(
          directive.name,
          directive.implementation,
        );
      });
    });

  Object.keys(modules)
    .map((key) => modules[key].mixins)
    .filter(exists)
    .forEach((mixins) => {
      mixins.forEach((mixin) => {
        Vue.mixin(mixin);
      });
    });
}

const routes = [
  ...Object.keys(modules)
    .filter((key) => !!modules[key].routes)
    .map((key) => modules[key].routes)
    .reduce((a, b) => a.concat(b), []),
  { path: '*', redirect: '/404' },
];

let router = null;

const routerAsync = () => {
  if (!router) {
    router = new Router({
      mode: 'history',
      routes,
      scrollBehavior() {
        return { x: 0, y: 0 };
      },
    });

    router.beforeEach((to, from, next) => {
      if (to.name) {
        ProgressBar.start();
      }

      next();
    });

    router.afterEach(() => {
      ProgressBar.done();
    });
  }

  return router;
};

const buildStores = () => {
  const output = {};

  Object.keys(modules)
    .filter((key) => !!modules[key].store)
    .forEach((key) => {
      output[key] = modules[key].store;
    });

  return output;
};

let store = null;

const storeAsync = () => {
  if (!store) {
    store = new Vuex.Store({ modules: buildStores() });
  }

  return store;
};

export {
  setupComponentsFiltersDirectivesAndMixins,
  routerAsync,
  storeAsync,
};

// end - boilerplate code
