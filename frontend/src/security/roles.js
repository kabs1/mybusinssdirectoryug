import { i18n } from '@/i18n';
import _values from 'lodash/values';

class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      customersEditor: 'customersEditor',
      customersViewer: 'customersViewer',
      suppliersEditor: 'suppliersEditor',
      suppliersViewer: 'suppliersViewer',
      staffEditor: 'staffEditor',
      staffViewer: 'staffViewer',
      productsEditor: 'productsEditor',
      productsViewer: 'productsViewer',
      brandsEditor: 'brandsEditor',
      brandsViewer: 'brandsViewer',
      categoriesEditor: 'categoriesEditor',
      categoriesViewer: 'categoriesViewer',
      expensesEditor: 'expensesEditor',
      expensesViewer: 'expensesViewer',
      expenseCategoryEditor: 'expenseCategoryEditor',
      expenseCategoryViewer: 'expenseCategoryViewer',
      assetsEditor: 'assetsEditor',
      assetsViewer: 'assetsViewer',
      devicesEditor: 'devicesEditor',
      devicesViewer: 'devicesViewer',
      noticeEditor: 'noticeEditor',
      noticeViewer: 'noticeViewer',
      salesEditor: 'salesEditor',
      salesViewer: 'salesViewer',
      purchasesEditor: 'purchasesEditor',
      purchasesViewer: 'purchasesViewer',
      returnsEditor: 'returnsEditor',
      returnsViewer: 'returnsViewer',
      stockAdjustmentsEditor: 'stockAdjustmentsEditor',
      stockAdjustmentsViewer: 'stockAdjustmentsViewer',
      unitsEditor: 'unitsEditor',
      unitsViewer: 'unitsViewer',
      giftCardEditor: 'giftCardEditor',
      giftCardViewer: 'giftCardViewer',
      couponEditor: 'couponEditor',
      couponViewer: 'couponViewer',
      damagesEditor: 'damagesEditor',
      damagesViewer: 'damagesViewer',
      leaveEditor: 'leaveEditor',
      leaveViewer: 'leaveViewer',
      leaveTypeEditor: 'leaveTypeEditor',
      leaveTypeViewer: 'leaveTypeViewer',
      allowanceAndDeductionEditor: 'allowanceAndDeductionEditor',
      allowanceAndDeductionViewer: 'allowanceAndDeductionViewer',
      payrollEditor: 'payrollEditor',
      payrollViewer: 'payrollViewer',
      attendanceEditor: 'attendanceEditor',
      attendanceViewer: 'attendanceViewer',
      taxClassEditor: 'taxClassEditor',
      taxClassViewer: 'taxClassViewer',
      todoEditor: 'todoEditor',
      todoViewer: 'todoViewer',
      documentsEditor: 'documentsEditor',
      documentsViewer: 'documentsViewer',
      paymentMethodsEditor: 'paymentMethodsEditor',
      paymentMethodsViewer: 'paymentMethodsViewer',
      documentTypesEditor: 'documentTypesEditor',
      documentTypesViewer: 'documentTypesViewer',
      memosEditor: 'memosEditor',
      memosViewer: 'memosViewer',
      currencyEditor: 'currencyEditor',
      currencyViewer: 'currencyViewer',
      holidayEditor: 'holidayEditor',
      holidayViewer: 'holidayViewer',
      stallEditor: 'stallEditor',
      stallViewer: 'stallViewer',
      variationEditor: 'variationEditor',
      variationViewer: 'variationViewer',
      productLogsEditor: 'productLogsEditor',
      productLogsViewer: 'productLogsViewer',
      stockTransferEditor: 'stockTransferEditor',
      stockTransferViewer: 'stockTransferViewer',
      deviceSessionsEditor: 'deviceSessionsEditor',
      deviceSessionsViewer: 'deviceSessionsViewer',
      productCountEditor: 'productCountEditor',
      productCountViewer: 'productCountViewer',
      productValueEditor: 'productValueEditor',
      productValueViewer: 'productValueViewer',
      registerEditor: 'registerEditor',
      registerViewer: 'registerViewer',
      commissionsEditor: 'commissionsEditor',
      commissionsViewer: 'commissionsViewer',
      transactionsEditor: 'transactionsEditor',
      transactionsViewer: 'transactionsViewer',
      priceChangeEditor: 'priceChangeEditor',
      priceChangeViewer: 'priceChangeViewer',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}

export default Roles;
