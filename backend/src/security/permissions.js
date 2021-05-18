const Roles = require('./roles');
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.customersEditor,
          roles.customersViewer,
          roles.suppliersEditor,
          roles.suppliersViewer,
          roles.staffEditor,
          roles.staffViewer,
          roles.noticeEditor,
          roles.noticeViewer,
          roles.giftCardEditor,
          roles.giftCardViewer,
          roles.damagesEditor,
          roles.damagesViewer,
          roles.leaveEditor,
          roles.leaveViewer,
          roles.deviceSessionsEditor,
          roles.deviceSessionsViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      customersImport: {
        id: 'customersImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customersEditor,
        ],
      },
      customersCreate: {
        id: 'customersCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customersEditor,
        ],
        allowedStorageFolders: ['customers'],
      },
      customersEdit: {
        id: 'customersEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customersEditor,
        ],
        allowedStorageFolders: ['customers'],
      },
      customersDestroy: {
        id: 'customersDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customersEditor,
        ],
        allowedStorageFolders: ['customers'],
      },
      customersRead: {
        id: 'customersRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customersEditor,
          roles.customersViewer,
        ],
      },
      customersAutocomplete: {
        id: 'customersAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customersEditor,
          roles.customersViewer,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },

      suppliersImport: {
        id: 'suppliersImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.suppliersEditor,
        ],
      },
      suppliersCreate: {
        id: 'suppliersCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.suppliersEditor,
        ],
        allowedStorageFolders: ['suppliers'],
      },
      suppliersEdit: {
        id: 'suppliersEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.suppliersEditor,
        ],
        allowedStorageFolders: ['suppliers'],
      },
      suppliersDestroy: {
        id: 'suppliersDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.suppliersEditor,
        ],
        allowedStorageFolders: ['suppliers'],
      },
      suppliersRead: {
        id: 'suppliersRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.suppliersEditor,
          roles.suppliersViewer,
        ],
      },
      suppliersAutocomplete: {
        id: 'suppliersAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.suppliersEditor,
          roles.suppliersViewer,
          roles.purchasesEditor,
          roles.purchasesViewer,
        ],
      },

      staffImport: {
        id: 'staffImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
      },
      staffCreate: {
        id: 'staffCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
        allowedStorageFolders: ['staff'],
      },
      staffEdit: {
        id: 'staffEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
        allowedStorageFolders: ['staff'],
      },
      staffDestroy: {
        id: 'staffDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.staffEditor,
        ],
        allowedStorageFolders: ['staff'],
      },
      staffRead: {
        id: 'staffRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.staffEditor,
          roles.staffViewer,
        ],
      },
      staffAutocomplete: {
        id: 'staffAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.staffEditor,
          roles.staffViewer,
          roles.expensesEditor,
          roles.expensesViewer,
          roles.leaveEditor,
          roles.leaveViewer,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
          roles.payrollEditor,
          roles.payrollViewer,
          roles.attendanceEditor,
          roles.attendanceViewer,
          roles.todoEditor,
          roles.todoViewer,
          roles.memosEditor,
          roles.memosViewer,
          roles.holidayEditor,
          roles.holidayViewer,
          roles.registerEditor,
          roles.registerViewer,
          roles.commissionsEditor,
          roles.commissionsViewer,
        ],
      },

      productsImport: {
        id: 'productsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productsEditor,
        ],
      },
      productsCreate: {
        id: 'productsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productsEditor,
        ],
        allowedStorageFolders: ['products'],
      },
      productsEdit: {
        id: 'productsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productsEditor,
        ],
        allowedStorageFolders: ['products'],
      },
      productsDestroy: {
        id: 'productsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productsEditor,
        ],
        allowedStorageFolders: ['products'],
      },
      productsRead: {
        id: 'productsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productsEditor,
          roles.productsViewer,
        ],
      },
      productsAutocomplete: {
        id: 'productsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productsEditor,
          roles.productsViewer,
          roles.salesEditor,
          roles.salesViewer,
          roles.purchasesEditor,
          roles.purchasesViewer,
          roles.returnsEditor,
          roles.returnsViewer,
          roles.stockAdjustmentsEditor,
          roles.stockAdjustmentsViewer,
          roles.damagesEditor,
          roles.damagesViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
          roles.stockTransferEditor,
          roles.stockTransferViewer,
          roles.priceChangeEditor,
          roles.priceChangeViewer,
        ],
      },

      brandsImport: {
        id: 'brandsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.brandsEditor,
        ],
      },
      brandsCreate: {
        id: 'brandsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.brandsEditor,
        ],
        allowedStorageFolders: ['brands'],
      },
      brandsEdit: {
        id: 'brandsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.brandsEditor,
        ],
        allowedStorageFolders: ['brands'],
      },
      brandsDestroy: {
        id: 'brandsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.brandsEditor,
        ],
        allowedStorageFolders: ['brands'],
      },
      brandsRead: {
        id: 'brandsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.brandsEditor,
          roles.brandsViewer,
        ],
      },
      brandsAutocomplete: {
        id: 'brandsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.brandsEditor,
          roles.brandsViewer,
          roles.productsEditor,
          roles.productsViewer,
        ],
      },

      categoriesImport: {
        id: 'categoriesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.categoriesEditor,
        ],
      },
      categoriesCreate: {
        id: 'categoriesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.categoriesEditor,
        ],
        allowedStorageFolders: ['categories'],
      },
      categoriesEdit: {
        id: 'categoriesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.categoriesEditor,
        ],
        allowedStorageFolders: ['categories'],
      },
      categoriesDestroy: {
        id: 'categoriesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.categoriesEditor,
        ],
        allowedStorageFolders: ['categories'],
      },
      categoriesRead: {
        id: 'categoriesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.categoriesEditor,
          roles.categoriesViewer,
        ],
      },
      categoriesAutocomplete: {
        id: 'categoriesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.categoriesEditor,
          roles.categoriesViewer,
          roles.productsEditor,
          roles.productsViewer,
        ],
      },

      expensesImport: {
        id: 'expensesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expensesEditor,
        ],
      },
      expensesCreate: {
        id: 'expensesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expensesEditor,
        ],
        allowedStorageFolders: ['expenses'],
      },
      expensesEdit: {
        id: 'expensesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expensesEditor,
        ],
        allowedStorageFolders: ['expenses'],
      },
      expensesDestroy: {
        id: 'expensesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expensesEditor,
        ],
        allowedStorageFolders: ['expenses'],
      },
      expensesRead: {
        id: 'expensesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.expensesEditor,
          roles.expensesViewer,
        ],
      },
      expensesAutocomplete: {
        id: 'expensesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.expensesEditor,
          roles.expensesViewer,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
          roles.stockTransferEditor,
          roles.stockTransferViewer,
        ],
      },

      expenseCategoryImport: {
        id: 'expenseCategoryImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expenseCategoryEditor,
        ],
      },
      expenseCategoryCreate: {
        id: 'expenseCategoryCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expenseCategoryEditor,
        ],
        allowedStorageFolders: ['expenseCategory'],
      },
      expenseCategoryEdit: {
        id: 'expenseCategoryEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expenseCategoryEditor,
        ],
        allowedStorageFolders: ['expenseCategory'],
      },
      expenseCategoryDestroy: {
        id: 'expenseCategoryDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.expenseCategoryEditor,
        ],
        allowedStorageFolders: ['expenseCategory'],
      },
      expenseCategoryRead: {
        id: 'expenseCategoryRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.expenseCategoryEditor,
          roles.expenseCategoryViewer,
        ],
      },
      expenseCategoryAutocomplete: {
        id: 'expenseCategoryAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.expenseCategoryEditor,
          roles.expenseCategoryViewer,

        ],
      },

      assetsImport: {
        id: 'assetsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.assetsEditor,
        ],
      },
      assetsCreate: {
        id: 'assetsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.assetsEditor,
        ],
        allowedStorageFolders: ['assets'],
      },
      assetsEdit: {
        id: 'assetsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.assetsEditor,
        ],
        allowedStorageFolders: ['assets'],
      },
      assetsDestroy: {
        id: 'assetsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.assetsEditor,
        ],
        allowedStorageFolders: ['assets'],
      },
      assetsRead: {
        id: 'assetsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.assetsEditor,
          roles.assetsViewer,
        ],
      },
      assetsAutocomplete: {
        id: 'assetsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.assetsEditor,
          roles.assetsViewer,

        ],
      },

      devicesImport: {
        id: 'devicesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.devicesEditor,
        ],
      },
      devicesCreate: {
        id: 'devicesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.devicesEditor,
        ],
        allowedStorageFolders: ['devices'],
      },
      devicesEdit: {
        id: 'devicesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.devicesEditor,
        ],
        allowedStorageFolders: ['devices'],
      },
      devicesDestroy: {
        id: 'devicesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.devicesEditor,
        ],
        allowedStorageFolders: ['devices'],
      },
      devicesRead: {
        id: 'devicesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.devicesEditor,
          roles.devicesViewer,
        ],
      },
      devicesAutocomplete: {
        id: 'devicesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.devicesEditor,
          roles.devicesViewer,
          roles.noticeEditor,
          roles.noticeViewer,
          roles.salesEditor,
          roles.salesViewer,
          roles.deviceSessionsEditor,
          roles.deviceSessionsViewer,
        ],
      },

      noticeImport: {
        id: 'noticeImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.noticeEditor,
        ],
      },
      noticeCreate: {
        id: 'noticeCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.noticeEditor,
        ],
        allowedStorageFolders: ['notice'],
      },
      noticeEdit: {
        id: 'noticeEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.noticeEditor,
        ],
        allowedStorageFolders: ['notice'],
      },
      noticeDestroy: {
        id: 'noticeDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.noticeEditor,
        ],
        allowedStorageFolders: ['notice'],
      },
      noticeRead: {
        id: 'noticeRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.noticeEditor,
          roles.noticeViewer,
        ],
      },
      noticeAutocomplete: {
        id: 'noticeAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.noticeEditor,
          roles.noticeViewer,

        ],
      },

      salesImport: {
        id: 'salesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.salesEditor,
        ],
      },
      salesCreate: {
        id: 'salesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.salesEditor,
        ],
        allowedStorageFolders: ['sales'],
      },
      salesEdit: {
        id: 'salesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.salesEditor,
        ],
        allowedStorageFolders: ['sales'],
      },
      salesDestroy: {
        id: 'salesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.salesEditor,
        ],
        allowedStorageFolders: ['sales'],
      },
      salesRead: {
        id: 'salesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },
      salesAutocomplete: {
        id: 'salesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.salesEditor,
          roles.salesViewer,
          roles.couponEditor,
          roles.couponViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
          roles.registerEditor,
          roles.registerViewer,
          roles.commissionsEditor,
          roles.commissionsViewer,
        ],
      },

      purchasesImport: {
        id: 'purchasesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.purchasesEditor,
        ],
      },
      purchasesCreate: {
        id: 'purchasesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.purchasesEditor,
        ],
        allowedStorageFolders: ['purchases'],
      },
      purchasesEdit: {
        id: 'purchasesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.purchasesEditor,
        ],
        allowedStorageFolders: ['purchases'],
      },
      purchasesDestroy: {
        id: 'purchasesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.purchasesEditor,
        ],
        allowedStorageFolders: ['purchases'],
      },
      purchasesRead: {
        id: 'purchasesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.purchasesEditor,
          roles.purchasesViewer,
        ],
      },
      purchasesAutocomplete: {
        id: 'purchasesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.purchasesEditor,
          roles.purchasesViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
        ],
      },

      returnsImport: {
        id: 'returnsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.returnsEditor,
        ],
      },
      returnsCreate: {
        id: 'returnsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.returnsEditor,
        ],
        allowedStorageFolders: ['returns'],
      },
      returnsEdit: {
        id: 'returnsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.returnsEditor,
        ],
        allowedStorageFolders: ['returns'],
      },
      returnsDestroy: {
        id: 'returnsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.returnsEditor,
        ],
        allowedStorageFolders: ['returns'],
      },
      returnsRead: {
        id: 'returnsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.returnsEditor,
          roles.returnsViewer,
        ],
      },
      returnsAutocomplete: {
        id: 'returnsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.returnsEditor,
          roles.returnsViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
          roles.registerEditor,
          roles.registerViewer,
        ],
      },

      stockAdjustmentsImport: {
        id: 'stockAdjustmentsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockAdjustmentsEditor,
        ],
      },
      stockAdjustmentsCreate: {
        id: 'stockAdjustmentsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockAdjustmentsEditor,
        ],
        allowedStorageFolders: ['stockAdjustments'],
      },
      stockAdjustmentsEdit: {
        id: 'stockAdjustmentsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockAdjustmentsEditor,
        ],
        allowedStorageFolders: ['stockAdjustments'],
      },
      stockAdjustmentsDestroy: {
        id: 'stockAdjustmentsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockAdjustmentsEditor,
        ],
        allowedStorageFolders: ['stockAdjustments'],
      },
      stockAdjustmentsRead: {
        id: 'stockAdjustmentsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.stockAdjustmentsEditor,
          roles.stockAdjustmentsViewer,
        ],
      },
      stockAdjustmentsAutocomplete: {
        id: 'stockAdjustmentsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.stockAdjustmentsEditor,
          roles.stockAdjustmentsViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
        ],
      },

      unitsImport: {
        id: 'unitsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.unitsEditor,
        ],
      },
      unitsCreate: {
        id: 'unitsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.unitsEditor,
        ],
        allowedStorageFolders: ['units'],
      },
      unitsEdit: {
        id: 'unitsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.unitsEditor,
        ],
        allowedStorageFolders: ['units'],
      },
      unitsDestroy: {
        id: 'unitsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.unitsEditor,
        ],
        allowedStorageFolders: ['units'],
      },
      unitsRead: {
        id: 'unitsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.unitsEditor,
          roles.unitsViewer,
        ],
      },
      unitsAutocomplete: {
        id: 'unitsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.unitsEditor,
          roles.unitsViewer,
          roles.productsEditor,
          roles.productsViewer,
        ],
      },

      giftCardImport: {
        id: 'giftCardImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.giftCardEditor,
        ],
      },
      giftCardCreate: {
        id: 'giftCardCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.giftCardEditor,
        ],
        allowedStorageFolders: ['giftCard'],
      },
      giftCardEdit: {
        id: 'giftCardEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.giftCardEditor,
        ],
        allowedStorageFolders: ['giftCard'],
      },
      giftCardDestroy: {
        id: 'giftCardDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.giftCardEditor,
        ],
        allowedStorageFolders: ['giftCard'],
      },
      giftCardRead: {
        id: 'giftCardRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.giftCardEditor,
          roles.giftCardViewer,
        ],
      },
      giftCardAutocomplete: {
        id: 'giftCardAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.giftCardEditor,
          roles.giftCardViewer,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },

      couponImport: {
        id: 'couponImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.couponEditor,
        ],
      },
      couponCreate: {
        id: 'couponCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.couponEditor,
        ],
        allowedStorageFolders: ['coupon'],
      },
      couponEdit: {
        id: 'couponEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.couponEditor,
        ],
        allowedStorageFolders: ['coupon'],
      },
      couponDestroy: {
        id: 'couponDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.couponEditor,
        ],
        allowedStorageFolders: ['coupon'],
      },
      couponRead: {
        id: 'couponRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.couponEditor,
          roles.couponViewer,
        ],
      },
      couponAutocomplete: {
        id: 'couponAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.couponEditor,
          roles.couponViewer,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },

      damagesImport: {
        id: 'damagesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.damagesEditor,
        ],
      },
      damagesCreate: {
        id: 'damagesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.damagesEditor,
        ],
        allowedStorageFolders: ['damages'],
      },
      damagesEdit: {
        id: 'damagesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.damagesEditor,
        ],
        allowedStorageFolders: ['damages'],
      },
      damagesDestroy: {
        id: 'damagesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.damagesEditor,
        ],
        allowedStorageFolders: ['damages'],
      },
      damagesRead: {
        id: 'damagesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.damagesEditor,
          roles.damagesViewer,
        ],
      },
      damagesAutocomplete: {
        id: 'damagesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.damagesEditor,
          roles.damagesViewer,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
        ],
      },

      leaveImport: {
        id: 'leaveImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveEditor,
        ],
      },
      leaveCreate: {
        id: 'leaveCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveEditor,
        ],
        allowedStorageFolders: ['leave'],
      },
      leaveEdit: {
        id: 'leaveEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveEditor,
        ],
        allowedStorageFolders: ['leave'],
      },
      leaveDestroy: {
        id: 'leaveDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveEditor,
        ],
        allowedStorageFolders: ['leave'],
      },
      leaveRead: {
        id: 'leaveRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.leaveEditor,
          roles.leaveViewer,
        ],
      },
      leaveAutocomplete: {
        id: 'leaveAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.leaveEditor,
          roles.leaveViewer,

        ],
      },

      leaveTypeImport: {
        id: 'leaveTypeImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveTypeEditor,
        ],
      },
      leaveTypeCreate: {
        id: 'leaveTypeCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveTypeEditor,
        ],
        allowedStorageFolders: ['leaveType'],
      },
      leaveTypeEdit: {
        id: 'leaveTypeEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveTypeEditor,
        ],
        allowedStorageFolders: ['leaveType'],
      },
      leaveTypeDestroy: {
        id: 'leaveTypeDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.leaveTypeEditor,
        ],
        allowedStorageFolders: ['leaveType'],
      },
      leaveTypeRead: {
        id: 'leaveTypeRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.leaveTypeEditor,
          roles.leaveTypeViewer,
        ],
      },
      leaveTypeAutocomplete: {
        id: 'leaveTypeAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.leaveTypeEditor,
          roles.leaveTypeViewer,
          roles.leaveEditor,
          roles.leaveViewer,
        ],
      },

      allowanceAndDeductionImport: {
        id: 'allowanceAndDeductionImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.allowanceAndDeductionEditor,
        ],
      },
      allowanceAndDeductionCreate: {
        id: 'allowanceAndDeductionCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.allowanceAndDeductionEditor,
        ],
        allowedStorageFolders: ['allowanceAndDeduction'],
      },
      allowanceAndDeductionEdit: {
        id: 'allowanceAndDeductionEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.allowanceAndDeductionEditor,
        ],
        allowedStorageFolders: ['allowanceAndDeduction'],
      },
      allowanceAndDeductionDestroy: {
        id: 'allowanceAndDeductionDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.allowanceAndDeductionEditor,
        ],
        allowedStorageFolders: ['allowanceAndDeduction'],
      },
      allowanceAndDeductionRead: {
        id: 'allowanceAndDeductionRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
        ],
      },
      allowanceAndDeductionAutocomplete: {
        id: 'allowanceAndDeductionAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
          roles.payrollEditor,
          roles.payrollViewer,
        ],
      },

      payrollImport: {
        id: 'payrollImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.payrollEditor,
        ],
      },
      payrollCreate: {
        id: 'payrollCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.payrollEditor,
        ],
        allowedStorageFolders: ['payroll'],
      },
      payrollEdit: {
        id: 'payrollEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.payrollEditor,
        ],
        allowedStorageFolders: ['payroll'],
      },
      payrollDestroy: {
        id: 'payrollDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.payrollEditor,
        ],
        allowedStorageFolders: ['payroll'],
      },
      payrollRead: {
        id: 'payrollRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.payrollEditor,
          roles.payrollViewer,
        ],
      },
      payrollAutocomplete: {
        id: 'payrollAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.payrollEditor,
          roles.payrollViewer,

        ],
      },

      attendanceImport: {
        id: 'attendanceImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
      },
      attendanceCreate: {
        id: 'attendanceCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
        allowedStorageFolders: ['attendance'],
      },
      attendanceEdit: {
        id: 'attendanceEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
        allowedStorageFolders: ['attendance'],
      },
      attendanceDestroy: {
        id: 'attendanceDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
        allowedStorageFolders: ['attendance'],
      },
      attendanceRead: {
        id: 'attendanceRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.attendanceEditor,
          roles.attendanceViewer,
        ],
      },
      attendanceAutocomplete: {
        id: 'attendanceAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.attendanceEditor,
          roles.attendanceViewer,

        ],
      },

      taxClassImport: {
        id: 'taxClassImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.taxClassEditor,
        ],
      },
      taxClassCreate: {
        id: 'taxClassCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.taxClassEditor,
        ],
        allowedStorageFolders: ['taxClass'],
      },
      taxClassEdit: {
        id: 'taxClassEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.taxClassEditor,
        ],
        allowedStorageFolders: ['taxClass'],
      },
      taxClassDestroy: {
        id: 'taxClassDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.taxClassEditor,
        ],
        allowedStorageFolders: ['taxClass'],
      },
      taxClassRead: {
        id: 'taxClassRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.taxClassEditor,
          roles.taxClassViewer,
        ],
      },
      taxClassAutocomplete: {
        id: 'taxClassAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.taxClassEditor,
          roles.taxClassViewer,
          roles.productsEditor,
          roles.productsViewer,
        ],
      },

      todoImport: {
        id: 'todoImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.todoEditor,
        ],
      },
      todoCreate: {
        id: 'todoCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.todoEditor,
        ],
        allowedStorageFolders: ['todo'],
      },
      todoEdit: {
        id: 'todoEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.todoEditor,
        ],
        allowedStorageFolders: ['todo'],
      },
      todoDestroy: {
        id: 'todoDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.todoEditor,
        ],
        allowedStorageFolders: ['todo'],
      },
      todoRead: {
        id: 'todoRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.todoEditor,
          roles.todoViewer,
        ],
      },
      todoAutocomplete: {
        id: 'todoAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.todoEditor,
          roles.todoViewer,

        ],
      },

      documentsImport: {
        id: 'documentsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentsEditor,
        ],
      },
      documentsCreate: {
        id: 'documentsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentsEditor,
        ],
        allowedStorageFolders: ['documents'],
      },
      documentsEdit: {
        id: 'documentsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentsEditor,
        ],
        allowedStorageFolders: ['documents'],
      },
      documentsDestroy: {
        id: 'documentsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentsEditor,
        ],
        allowedStorageFolders: ['documents'],
      },
      documentsRead: {
        id: 'documentsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.documentsEditor,
          roles.documentsViewer,
        ],
      },
      documentsAutocomplete: {
        id: 'documentsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.documentsEditor,
          roles.documentsViewer,

        ],
      },

      paymentMethodsImport: {
        id: 'paymentMethodsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.paymentMethodsEditor,
        ],
      },
      paymentMethodsCreate: {
        id: 'paymentMethodsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.paymentMethodsEditor,
        ],
        allowedStorageFolders: ['paymentMethods'],
      },
      paymentMethodsEdit: {
        id: 'paymentMethodsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.paymentMethodsEditor,
        ],
        allowedStorageFolders: ['paymentMethods'],
      },
      paymentMethodsDestroy: {
        id: 'paymentMethodsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.paymentMethodsEditor,
        ],
        allowedStorageFolders: ['paymentMethods'],
      },
      paymentMethodsRead: {
        id: 'paymentMethodsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.paymentMethodsEditor,
          roles.paymentMethodsViewer,
        ],
      },
      paymentMethodsAutocomplete: {
        id: 'paymentMethodsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.paymentMethodsEditor,
          roles.paymentMethodsViewer,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },

      documentTypesImport: {
        id: 'documentTypesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentTypesEditor,
        ],
      },
      documentTypesCreate: {
        id: 'documentTypesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentTypesEditor,
        ],
        allowedStorageFolders: ['documentTypes'],
      },
      documentTypesEdit: {
        id: 'documentTypesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentTypesEditor,
        ],
        allowedStorageFolders: ['documentTypes'],
      },
      documentTypesDestroy: {
        id: 'documentTypesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.documentTypesEditor,
        ],
        allowedStorageFolders: ['documentTypes'],
      },
      documentTypesRead: {
        id: 'documentTypesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.documentTypesEditor,
          roles.documentTypesViewer,
        ],
      },
      documentTypesAutocomplete: {
        id: 'documentTypesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.documentTypesEditor,
          roles.documentTypesViewer,
          roles.documentsEditor,
          roles.documentsViewer,
        ],
      },

      memosImport: {
        id: 'memosImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.memosEditor,
        ],
      },
      memosCreate: {
        id: 'memosCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.memosEditor,
        ],
        allowedStorageFolders: ['memos'],
      },
      memosEdit: {
        id: 'memosEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.memosEditor,
        ],
        allowedStorageFolders: ['memos'],
      },
      memosDestroy: {
        id: 'memosDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.memosEditor,
        ],
        allowedStorageFolders: ['memos'],
      },
      memosRead: {
        id: 'memosRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.memosEditor,
          roles.memosViewer,
        ],
      },
      memosAutocomplete: {
        id: 'memosAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.memosEditor,
          roles.memosViewer,

        ],
      },

      currencyImport: {
        id: 'currencyImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.currencyEditor,
        ],
      },
      currencyCreate: {
        id: 'currencyCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.currencyEditor,
        ],
        allowedStorageFolders: ['currency'],
      },
      currencyEdit: {
        id: 'currencyEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.currencyEditor,
        ],
        allowedStorageFolders: ['currency'],
      },
      currencyDestroy: {
        id: 'currencyDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.currencyEditor,
        ],
        allowedStorageFolders: ['currency'],
      },
      currencyRead: {
        id: 'currencyRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.currencyEditor,
          roles.currencyViewer,
        ],
      },
      currencyAutocomplete: {
        id: 'currencyAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.currencyEditor,
          roles.currencyViewer,
          roles.devicesEditor,
          roles.devicesViewer,
        ],
      },

      holidayImport: {
        id: 'holidayImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.holidayEditor,
        ],
      },
      holidayCreate: {
        id: 'holidayCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.holidayEditor,
        ],
        allowedStorageFolders: ['holiday'],
      },
      holidayEdit: {
        id: 'holidayEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.holidayEditor,
        ],
        allowedStorageFolders: ['holiday'],
      },
      holidayDestroy: {
        id: 'holidayDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.holidayEditor,
        ],
        allowedStorageFolders: ['holiday'],
      },
      holidayRead: {
        id: 'holidayRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.holidayEditor,
          roles.holidayViewer,
        ],
      },
      holidayAutocomplete: {
        id: 'holidayAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.holidayEditor,
          roles.holidayViewer,

        ],
      },

      stallImport: {
        id: 'stallImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stallEditor,
        ],
      },
      stallCreate: {
        id: 'stallCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stallEditor,
        ],
        allowedStorageFolders: ['stall'],
      },
      stallEdit: {
        id: 'stallEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stallEditor,
        ],
        allowedStorageFolders: ['stall'],
      },
      stallDestroy: {
        id: 'stallDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stallEditor,
        ],
        allowedStorageFolders: ['stall'],
      },
      stallRead: {
        id: 'stallRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.stallEditor,
          roles.stallViewer,
        ],
      },
      stallAutocomplete: {
        id: 'stallAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.stallEditor,
          roles.stallViewer,
          roles.productsEditor,
          roles.productsViewer,
          roles.expensesEditor,
          roles.expensesViewer,
          roles.assetsEditor,
          roles.assetsViewer,
          roles.devicesEditor,
          roles.devicesViewer,
          roles.noticeEditor,
          roles.noticeViewer,
          roles.salesEditor,
          roles.salesViewer,
          roles.purchasesEditor,
          roles.purchasesViewer,
          roles.returnsEditor,
          roles.returnsViewer,
          roles.stockAdjustmentsEditor,
          roles.stockAdjustmentsViewer,
          roles.giftCardEditor,
          roles.giftCardViewer,
          roles.couponEditor,
          roles.couponViewer,
          roles.damagesEditor,
          roles.damagesViewer,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
          roles.attendanceEditor,
          roles.attendanceViewer,
          roles.todoEditor,
          roles.todoViewer,
          roles.documentsEditor,
          roles.documentsViewer,
          roles.memosEditor,
          roles.memosViewer,
          roles.holidayEditor,
          roles.holidayViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
          roles.stockTransferEditor,
          roles.stockTransferViewer,
          roles.registerEditor,
          roles.registerViewer,
          roles.commissionsEditor,
          roles.commissionsViewer,
          roles.priceChangeEditor,
          roles.priceChangeViewer,
        ],
      },

      variationImport: {
        id: 'variationImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.variationEditor,
        ],
      },
      variationCreate: {
        id: 'variationCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.variationEditor,
        ],
        allowedStorageFolders: ['variation'],
      },
      variationEdit: {
        id: 'variationEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.variationEditor,
        ],
        allowedStorageFolders: ['variation'],
      },
      variationDestroy: {
        id: 'variationDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.variationEditor,
        ],
        allowedStorageFolders: ['variation'],
      },
      variationRead: {
        id: 'variationRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.variationEditor,
          roles.variationViewer,
        ],
      },
      variationAutocomplete: {
        id: 'variationAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.variationEditor,
          roles.variationViewer,
          roles.productsEditor,
          roles.productsViewer,
        ],
      },

      productLogsImport: {
        id: 'productLogsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productLogsEditor,
        ],
      },
      productLogsCreate: {
        id: 'productLogsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productLogsEditor,
        ],
        allowedStorageFolders: ['productLogs'],
      },
      productLogsEdit: {
        id: 'productLogsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productLogsEditor,
        ],
        allowedStorageFolders: ['productLogs'],
      },
      productLogsDestroy: {
        id: 'productLogsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productLogsEditor,
        ],
        allowedStorageFolders: ['productLogs'],
      },
      productLogsRead: {
        id: 'productLogsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productLogsEditor,
          roles.productLogsViewer,
        ],
      },
      productLogsAutocomplete: {
        id: 'productLogsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productLogsEditor,
          roles.productLogsViewer,

        ],
      },

      stockTransferImport: {
        id: 'stockTransferImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockTransferEditor,
        ],
      },
      stockTransferCreate: {
        id: 'stockTransferCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockTransferEditor,
        ],
        allowedStorageFolders: ['stockTransfer'],
      },
      stockTransferEdit: {
        id: 'stockTransferEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockTransferEditor,
        ],
        allowedStorageFolders: ['stockTransfer'],
      },
      stockTransferDestroy: {
        id: 'stockTransferDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.stockTransferEditor,
        ],
        allowedStorageFolders: ['stockTransfer'],
      },
      stockTransferRead: {
        id: 'stockTransferRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.stockTransferEditor,
          roles.stockTransferViewer,
        ],
      },
      stockTransferAutocomplete: {
        id: 'stockTransferAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.stockTransferEditor,
          roles.stockTransferViewer,
          roles.productLogsEditor,
          roles.productLogsViewer,
        ],
      },

      deviceSessionsImport: {
        id: 'deviceSessionsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceSessionsEditor,
        ],
      },
      deviceSessionsCreate: {
        id: 'deviceSessionsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceSessionsEditor,
        ],
        allowedStorageFolders: ['deviceSessions'],
      },
      deviceSessionsEdit: {
        id: 'deviceSessionsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceSessionsEditor,
        ],
        allowedStorageFolders: ['deviceSessions'],
      },
      deviceSessionsDestroy: {
        id: 'deviceSessionsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deviceSessionsEditor,
        ],
        allowedStorageFolders: ['deviceSessions'],
      },
      deviceSessionsRead: {
        id: 'deviceSessionsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.deviceSessionsEditor,
          roles.deviceSessionsViewer,
        ],
      },
      deviceSessionsAutocomplete: {
        id: 'deviceSessionsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.deviceSessionsEditor,
          roles.deviceSessionsViewer,
          roles.transactionsEditor,
          roles.transactionsViewer,
          roles.priceChangeEditor,
          roles.priceChangeViewer,
        ],
      },

      productCountImport: {
        id: 'productCountImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productCountEditor,
        ],
      },
      productCountCreate: {
        id: 'productCountCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productCountEditor,
        ],
        allowedStorageFolders: ['productCount'],
      },
      productCountEdit: {
        id: 'productCountEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productCountEditor,
        ],
        allowedStorageFolders: ['productCount'],
      },
      productCountDestroy: {
        id: 'productCountDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productCountEditor,
        ],
        allowedStorageFolders: ['productCount'],
      },
      productCountRead: {
        id: 'productCountRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productCountEditor,
          roles.productCountViewer,
        ],
      },
      productCountAutocomplete: {
        id: 'productCountAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productCountEditor,
          roles.productCountViewer,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },

      productValueImport: {
        id: 'productValueImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productValueEditor,
        ],
      },
      productValueCreate: {
        id: 'productValueCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productValueEditor,
        ],
        allowedStorageFolders: ['productValue'],
      },
      productValueEdit: {
        id: 'productValueEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productValueEditor,
        ],
        allowedStorageFolders: ['productValue'],
      },
      productValueDestroy: {
        id: 'productValueDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productValueEditor,
        ],
        allowedStorageFolders: ['productValue'],
      },
      productValueRead: {
        id: 'productValueRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productValueEditor,
          roles.productValueViewer,
        ],
      },
      productValueAutocomplete: {
        id: 'productValueAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productValueEditor,
          roles.productValueViewer,
          roles.salesEditor,
          roles.salesViewer,
        ],
      },

      registerImport: {
        id: 'registerImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.registerEditor,
        ],
      },
      registerCreate: {
        id: 'registerCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.registerEditor,
        ],
        allowedStorageFolders: ['register'],
      },
      registerEdit: {
        id: 'registerEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.registerEditor,
        ],
        allowedStorageFolders: ['register'],
      },
      registerDestroy: {
        id: 'registerDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.registerEditor,
        ],
        allowedStorageFolders: ['register'],
      },
      registerRead: {
        id: 'registerRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.registerEditor,
          roles.registerViewer,
        ],
      },
      registerAutocomplete: {
        id: 'registerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.registerEditor,
          roles.registerViewer,
          roles.salesEditor,
          roles.salesViewer,
          roles.commissionsEditor,
          roles.commissionsViewer,
        ],
      },

      commissionsImport: {
        id: 'commissionsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commissionsEditor,
        ],
      },
      commissionsCreate: {
        id: 'commissionsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commissionsEditor,
        ],
        allowedStorageFolders: ['commissions'],
      },
      commissionsEdit: {
        id: 'commissionsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commissionsEditor,
        ],
        allowedStorageFolders: ['commissions'],
      },
      commissionsDestroy: {
        id: 'commissionsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.commissionsEditor,
        ],
        allowedStorageFolders: ['commissions'],
      },
      commissionsRead: {
        id: 'commissionsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.commissionsEditor,
          roles.commissionsViewer,
        ],
      },
      commissionsAutocomplete: {
        id: 'commissionsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.commissionsEditor,
          roles.commissionsViewer,
          roles.allowanceAndDeductionEditor,
          roles.allowanceAndDeductionViewer,
        ],
      },

      transactionsImport: {
        id: 'transactionsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.transactionsEditor,
        ],
      },
      transactionsCreate: {
        id: 'transactionsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.transactionsEditor,
        ],
        allowedStorageFolders: ['transactions'],
      },
      transactionsEdit: {
        id: 'transactionsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.transactionsEditor,
        ],
        allowedStorageFolders: ['transactions'],
      },
      transactionsDestroy: {
        id: 'transactionsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.transactionsEditor,
        ],
        allowedStorageFolders: ['transactions'],
      },
      transactionsRead: {
        id: 'transactionsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.transactionsEditor,
          roles.transactionsViewer,
        ],
      },
      transactionsAutocomplete: {
        id: 'transactionsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.transactionsEditor,
          roles.transactionsViewer,

        ],
      },

      priceChangeImport: {
        id: 'priceChangeImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.priceChangeEditor,
        ],
      },
      priceChangeCreate: {
        id: 'priceChangeCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.priceChangeEditor,
        ],
        allowedStorageFolders: ['priceChange'],
      },
      priceChangeEdit: {
        id: 'priceChangeEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.priceChangeEditor,
        ],
        allowedStorageFolders: ['priceChange'],
      },
      priceChangeDestroy: {
        id: 'priceChangeDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.priceChangeEditor,
        ],
        allowedStorageFolders: ['priceChange'],
      },
      priceChangeRead: {
        id: 'priceChangeRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.priceChangeEditor,
          roles.priceChangeViewer,
        ],
      },
      priceChangeAutocomplete: {
        id: 'priceChangeAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.priceChangeEditor,
          roles.priceChangeViewer,

        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
