const userFixture = require('./userFixture');
const customersFixture = require('./customersFixture');
const suppliersFixture = require('./suppliersFixture');
const staffFixture = require('./staffFixture');
const productsFixture = require('./productsFixture');
const brandsFixture = require('./brandsFixture');
const categoriesFixture = require('./categoriesFixture');
const expensesFixture = require('./expensesFixture');
const expenseCategoryFixture = require('./expenseCategoryFixture');
const assetsFixture = require('./assetsFixture');
const devicesFixture = require('./devicesFixture');
const noticeFixture = require('./noticeFixture');
const salesFixture = require('./salesFixture');
const purchasesFixture = require('./purchasesFixture');
const returnsFixture = require('./returnsFixture');
const stockAdjustmentsFixture = require('./stockAdjustmentsFixture');
const unitsFixture = require('./unitsFixture');
const giftCardFixture = require('./giftCardFixture');
const couponFixture = require('./couponFixture');
const damagesFixture = require('./damagesFixture');
const leaveFixture = require('./leaveFixture');
const leaveTypeFixture = require('./leaveTypeFixture');
const allowanceAndDeductionFixture = require('./allowanceAndDeductionFixture');
const payrollFixture = require('./payrollFixture');
const attendanceFixture = require('./attendanceFixture');
const taxClassFixture = require('./taxClassFixture');
const todoFixture = require('./todoFixture');
const documentsFixture = require('./documentsFixture');
const paymentMethodsFixture = require('./paymentMethodsFixture');
const documentTypesFixture = require('./documentTypesFixture');
const memosFixture = require('./memosFixture');
const currencyFixture = require('./currencyFixture');
const holidayFixture = require('./holidayFixture');
const stallFixture = require('./stallFixture');
const variationFixture = require('./variationFixture');
const productLogsFixture = require('./productLogsFixture');
const stockTransferFixture = require('./stockTransferFixture');
const deviceSessionsFixture = require('./deviceSessionsFixture');
const productCountFixture = require('./productCountFixture');
const productValueFixture = require('./productValueFixture');
const registerFixture = require('./registerFixture');
const commissionsFixture = require('./commissionsFixture');
const transactionsFixture = require('./transactionsFixture');
const priceChangeFixture = require('./priceChangeFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  customers: customersFixture,
  suppliers: suppliersFixture,
  staff: staffFixture,
  products: productsFixture,
  brands: brandsFixture,
  categories: categoriesFixture,
  expenses: expensesFixture,
  expenseCategory: expenseCategoryFixture,
  assets: assetsFixture,
  devices: devicesFixture,
  notice: noticeFixture,
  sales: salesFixture,
  purchases: purchasesFixture,
  returns: returnsFixture,
  stockAdjustments: stockAdjustmentsFixture,
  units: unitsFixture,
  giftCard: giftCardFixture,
  coupon: couponFixture,
  damages: damagesFixture,
  leave: leaveFixture,
  leaveType: leaveTypeFixture,
  allowanceAndDeduction: allowanceAndDeductionFixture,
  payroll: payrollFixture,
  attendance: attendanceFixture,
  taxClass: taxClassFixture,
  todo: todoFixture,
  documents: documentsFixture,
  paymentMethods: paymentMethodsFixture,
  documentTypes: documentTypesFixture,
  memos: memosFixture,
  currency: currencyFixture,
  holiday: holidayFixture,
  stall: stallFixture,
  variation: variationFixture,
  productLogs: productLogsFixture,
  stockTransfer: stockTransferFixture,
  deviceSessions: deviceSessionsFixture,
  productCount: productCountFixture,
  productValue: productValueFixture,
  register: registerFixture,
  commissions: commissionsFixture,
  transactions: transactionsFixture,
  priceChange: priceChangeFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
