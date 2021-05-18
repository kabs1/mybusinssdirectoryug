const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
  },

  app: {
    title: 'My Business Directory',
  },

  entities: {
    customers: {
      name: 'customers',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'customers_export',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer saved successfully',
      },
      update: {
        success: 'Customer saved successfully',
      },
      destroy: {
        success: 'Customer deleted successfully',
      },
      destroyAll: {
        success: 'Customer(s) deleted successfully',
      },
      edit: {
        title: 'Edit Customer',
      },
      fields: {
        id: 'Id',
        'customerProfile': 'Profile',
        'customerNames': 'Names',
        'customerEmail': 'Email',
        'customerUserId': 'User',
        'customerPhoneNumber': 'Phone Number ',
        'customerLocation': 'Location',
        'customerDiscountRange': 'Discount',
        'customerDiscount': 'Discount',
        'customerStatus': 'Status',
        'customerCodeRange': 'Customer Code',
        'customerCode': 'Customer Code',
        'customerAccountBalanceRange': 'Account Balance',
        'customerAccountBalance': 'Balance',
        'customerCustomField': 'Custom Field',
        'customerDocs': 'Customer Docs',
        'customerLoyaltyPointsRange': 'Loyalty Points',
        'customerLoyaltyPoints': 'Loyalty Points',
        'customerCreditBalanceRange': 'Account Credit Balance',
        'customerCreditBalance': 'Credit',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'customerStatus': {
          'active': 'Active',
          'blocked': 'Blocked',
          'suspended': 'Suspended',
        },
      },
      new: {
        title: 'New Customer',
      },
      view: {
        title: 'View Customer',
      },
      importer: {
        title: 'Import Customers',
        fileName: 'customers_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    suppliers: {
      name: 'suppliers',
      label: 'Suppliers',
      menu: 'Suppliers',
      exporterFileName: 'suppliers_export',
      list: {
        menu: 'Suppliers',
        title: 'Suppliers',
      },
      create: {
        success: 'Supplier saved successfully',
      },
      update: {
        success: 'Supplier saved successfully',
      },
      destroy: {
        success: 'Supplier deleted successfully',
      },
      destroyAll: {
        success: 'Supplier(s) deleted successfully',
      },
      edit: {
        title: 'Edit Supplier',
      },
      fields: {
        id: 'Id',
        'supplierProfile': 'Profile',
        'supplierNames': 'Names',
        'supplierBusinessName': 'Business Name',
        'supplierEmail': 'Email',
        'supplierLocation': 'Location',
        'supplierPhoneNumber': 'Phone Number',
        'supplierPayTerm': 'Pay Term',
        'supplierPayType': 'Pay Type',
        'supplierStatus': 'Status',
        'supplierCreditBalanceRange': 'Credit',
        'supplierCreditBalance': 'Credit',
        'supplierDocs': 'SupplierDocs',
        'userId': 'User',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'supplierPayTerm': {
          'daily': 'Daily',
          'monthly': 'Monthly',
          'yearly': 'Yearly',
        },
        'supplierPayType': {
          'offline': 'Offline',
          'online': 'Online',
        },
        'supplierStatus': {
          'active': 'Active',
          'blocked': 'Blocked',
          'pending': 'Pending',
          'suspended': 'Suspended',
        },
      },
      new: {
        title: 'New Supplier',
      },
      view: {
        title: 'View Supplier',
      },
      importer: {
        title: 'Import Suppliers',
        fileName: 'suppliers_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    staff: {
      name: 'staff',
      label: 'Staffs',
      menu: 'Staffs',
      exporterFileName: 'staff_export',
      list: {
        menu: 'Staffs',
        title: 'Staffs',
      },
      create: {
        success: 'Staff saved successfully',
      },
      update: {
        success: 'Staff saved successfully',
      },
      destroy: {
        success: 'Staff deleted successfully',
      },
      destroyAll: {
        success: 'Staff(s) deleted successfully',
      },
      edit: {
        title: 'Edit Staff',
      },
      fields: {
        id: 'Id',
        'staffProfile': 'Profile',
        'staffNames': 'Names',
        'staffUserId': 'User',
        'staffPhoneNumber': 'Phone Number',
        'staffAbout': 'Bio',
        'staffCustomInfo': 'Custom Info',
        'staffCv': 'CV',
        'staffDocuments': 'Documents',
        'staffIsAServiceWorker': 'Service Worker',
        'staffCommisionRange': 'Commision',
        'staffCommision': 'Commision',
        'staffDateOfBirthRange': 'DOB',
        'staffDateOfBirth': 'DOB',
        'staffMaritalStatus': 'Marital Status',
        'staffIdentityCard': 'ID',
        'staffAccessApps': 'Access Apps',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'staffIsAServiceWorker': {
          'yes': 'Yes',
          'no': 'No',
        },
        'staffMaritalStatus': {
          'Married': 'Married',
          'Single': 'Single',
          'Divorced': 'Divorced',
        },
        'staffAccessApps': {
          'Enabled': 'Enabled',
          'Disabled': 'Disabled',
        },
      },
      new: {
        title: 'New Staff',
      },
      view: {
        title: 'View Staff',
      },
      importer: {
        title: 'Import Staffs',
        fileName: 'staff_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    products: {
      name: 'products',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'products_export',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product saved successfully',
      },
      update: {
        success: 'Product saved successfully',
      },
      destroy: {
        success: 'Product deleted successfully',
      },
      destroyAll: {
        success: 'Product(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product',
      },
      fields: {
        id: 'Id',
        'productImage': 'Image',
        'productName': 'Name',
        'productUnit': 'Unit',
        'productBrand': 'Brand',
        'productCategory': 'Category',
        'productTax': 'Tax',
        'productEnableStock': 'Enable Stock',
        'productAlertQuantityRange': 'Alert Quantity',
        'productAlertQuantity': 'Alert Quantity',
        'productSkuRange': 'Sku',
        'productSku': 'Sku',
        'productCodeType': 'Code Type',
        'productExpiryRange': 'Expiry',
        'productExpiry': 'Expiry',
        'productCustomField': 'Custom Field',
        'productDesc': 'ProductDesc',
        'productStatus': 'Status',
        'productVariation': 'Variation',
        'productAttribute': 'Attribute',
        'productColor': 'Color',
        'productStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'productEnableStock': {
          'enabled': 'Enabled',
          'disabled': 'Disabled',
        },
        'productCodeType': {
          'barcode': 'Barcode',
          'qr': 'Qr',
          'other': 'Other',
        },
        'productStatus': {
          'public': 'Public',
          'private': 'Private',
        },
      },
      new: {
        title: 'New Product',
      },
      view: {
        title: 'View Product',
      },
      importer: {
        title: 'Import Products',
        fileName: 'products_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    brands: {
      name: 'brands',
      label: 'Brands',
      menu: 'Brands',
      exporterFileName: 'brands_export',
      list: {
        menu: 'Brands',
        title: 'Brands',
      },
      create: {
        success: 'Brands saved successfully',
      },
      update: {
        success: 'Brands saved successfully',
      },
      destroy: {
        success: 'Brands deleted successfully',
      },
      destroyAll: {
        success: 'Brands(s) deleted successfully',
      },
      edit: {
        title: 'Edit Brands',
      },
      fields: {
        id: 'Id',
        'brandCover': 'Cover',
        'brandTitle': 'Title',
        'brandDetails': 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Brands',
      },
      view: {
        title: 'View Brands',
      },
      importer: {
        title: 'Import Brands',
        fileName: 'brands_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    categories: {
      name: 'categories',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'categories_export',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category saved successfully',
      },
      update: {
        success: 'Category saved successfully',
      },
      destroy: {
        success: 'Category deleted successfully',
      },
      destroyAll: {
        success: 'Category(s) deleted successfully',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        'categoryCover': 'Cover',
        'categoryTitle': 'Title',
        'categoryShortCode': 'Short Code',
        'categoryDetails': 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Categories',
        fileName: 'categories_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    expenses: {
      name: 'expenses',
      label: 'Expenses',
      menu: 'Expenses',
      exporterFileName: 'expenses_export',
      list: {
        menu: 'Expenses',
        title: 'Expenses',
      },
      create: {
        success: 'Expense saved successfully',
      },
      update: {
        success: 'Expense saved successfully',
      },
      destroy: {
        success: 'Expense deleted successfully',
      },
      destroyAll: {
        success: 'Expense(s) deleted successfully',
      },
      edit: {
        title: 'Edit Expense',
      },
      fields: {
        id: 'Id',
        'expenseCover': 'Cover',
        'expensesTitle': 'Title',
        'expensesCostRange': 'Cost',
        'expensesCost': 'Cost',
        'expenseMadeTo': 'Made To',
        'expensesMadeBy': 'Made By',
        'expensesDateRange': 'Date',
        'expensesDate': 'Date',
        'expensesStatus': 'Status',
        'expenseStall': 'Stall',
        'expenseNote': 'Note',
        'expenseDocs': 'Docs',
        'expenseDoc': 'Doc',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'expensesStatus': {
          'completed': 'Completed',
          'pending': 'Pending',
        },
      },
      new: {
        title: 'New Expense',
      },
      view: {
        title: 'View Expense',
      },
      importer: {
        title: 'Import Expenses',
        fileName: 'expenses_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    expenseCategory: {
      name: 'expenseCategory',
      label: 'Expense Categories',
      menu: 'Expense Categories',
      exporterFileName: 'expenseCategory_export',
      list: {
        menu: 'Expense Categories',
        title: 'Expense Categories',
      },
      create: {
        success: 'Expense Category saved successfully',
      },
      update: {
        success: 'Expense Category saved successfully',
      },
      destroy: {
        success: 'Expense Category deleted successfully',
      },
      destroyAll: {
        success: 'Expense Category(s) deleted successfully',
      },
      edit: {
        title: 'Edit Expense Category',
      },
      fields: {
        id: 'Id',
        'expCategoryTitle': 'Title',
        'expCategoryDetails': 'Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Expense Category',
      },
      view: {
        title: 'View Expense Category',
      },
      importer: {
        title: 'Import Expense Categories',
        fileName: 'expenseCategory_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    assets: {
      name: 'assets',
      label: 'Assets',
      menu: 'Assets',
      exporterFileName: 'assets_export',
      list: {
        menu: 'Assets',
        title: 'Assets',
      },
      create: {
        success: 'Asset saved successfully',
      },
      update: {
        success: 'Asset saved successfully',
      },
      destroy: {
        success: 'Asset deleted successfully',
      },
      destroyAll: {
        success: 'Asset(s) deleted successfully',
      },
      edit: {
        title: 'Edit Asset',
      },
      fields: {
        id: 'Id',
        'assetImage': 'Image',
        'assetName': 'Name',
        'assetDetails': 'Details',
        'assetValueRange': 'Cost Value',
        'assetValue': 'Cost Value',
        'assetDocs': 'Docs',
        'assetsStall': 'Stall',
        'assetPurchaseDateRange': 'Date',
        'assetPurchaseDate': 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Asset',
      },
      view: {
        title: 'View Asset',
      },
      importer: {
        title: 'Import Assets',
        fileName: 'assets_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    devices: {
      name: 'devices',
      label: 'Devices',
      menu: 'Devices',
      exporterFileName: 'devices_export',
      list: {
        menu: 'Devices',
        title: 'Devices',
      },
      create: {
        success: 'Device saved successfully',
      },
      update: {
        success: 'Device saved successfully',
      },
      destroy: {
        success: 'Device deleted successfully',
      },
      destroyAll: {
        success: 'Device(s) deleted successfully',
      },
      edit: {
        title: 'Edit Device',
      },
      fields: {
        id: 'Id',
        'deviceImage': 'Image',
        'deviceName': 'Name',
        'deviceSerial': 'Serial',
        'deviceType': 'Device Type',
        'deviceCurrency': 'Currency',
        'deviceNote': 'Note',
        'deviceDocs': 'Docs',
        'deviceStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'deviceType': {
          'android': 'Android',
          'ios': 'Ios',
          'windows': 'Windows',
          'mac': 'Mac',
          'linux': 'Linux',
        },
      },
      new: {
        title: 'New Device',
      },
      view: {
        title: 'View Device',
      },
      importer: {
        title: 'Import Devices',
        fileName: 'devices_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    notice: {
      name: 'notice',
      label: 'Notices',
      menu: 'Notices',
      exporterFileName: 'notice_export',
      list: {
        menu: 'Notices',
        title: 'Notices',
      },
      create: {
        success: 'Notice saved successfully',
      },
      update: {
        success: 'Notice saved successfully',
      },
      destroy: {
        success: 'Notice deleted successfully',
      },
      destroyAll: {
        success: 'Notice(s) deleted successfully',
      },
      edit: {
        title: 'Edit Notice',
      },
      fields: {
        id: 'Id',
        'noticeCover': 'Cover',
        'noticeTitle': 'Title',
        'noticeDetails': 'Details',
        'noticeType': 'Notice Type',
        'userIds': 'Users',
        'noticeDevice': 'Devices',
        'noticeStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'noticeType': {
          'alert': 'Alert',
          'message': 'Message',
          'notification': 'Notification',
        },
      },
      new: {
        title: 'New Notice',
      },
      view: {
        title: 'View Notice',
      },
      importer: {
        title: 'Import Notices',
        fileName: 'notice_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    sales: {
      name: 'sales',
      label: 'Sales',
      menu: 'Sales',
      exporterFileName: 'sales_export',
      list: {
        menu: 'Sales',
        title: 'Sales',
      },
      create: {
        success: 'Sale saved successfully',
      },
      update: {
        success: 'Sale saved successfully',
      },
      destroy: {
        success: 'Sale deleted successfully',
      },
      destroyAll: {
        success: 'Sale(s) deleted successfully',
      },
      edit: {
        title: 'Edit Sale',
      },
      fields: {
        id: 'Id',
        'salesInvoiceNoRange': 'Invoice No',
        'salesInvoiceNo': 'Invoice No',
        'salesCustomer': 'Customer',
        'salesPaymentStatus': 'Payment Status',
        'salesTotalAmountRange': 'Total Amount',
        'salesTotalAmount': 'Total Amount',
        'salesSubTotalAmountRange': 'Sub Total Amount',
        'salesSubTotalAmount': 'Sub Total Amount',
        'salesTotalTaxRange': 'Total Tax',
        'salesTotalTax': 'Total Tax',
        'salesProducts': 'Products',
        'salesTotalIUnitsRange': 'Units',
        'salesTotalIUnits': 'Units',
        'saleNote': 'Note',
        'salesDiscountRange': 'Discount',
        'salesDiscount': 'Discount',
        'salesPayload': 'Payload',
        'saleReturnsProducts': 'Returns Products',
        'saleReturnsUnits': 'Returns Units',
        'salesReturnReason': 'Return Reason',
        'salePaymentDetails': 'Payment Details',
        'salePaymentType': 'Payment Type',
        'saleCreditBalanceRange': 'Credit Balance',
        'saleCreditBalance': 'Credit Balance',
        'saleDevice': 'Device',
        'giftCard': 'Gift Card',
        'salesCoupon': 'Coupon',
        'salesStall': 'Stall',
        'salesRegister': 'Register',
        'salesProductsCount': 'Products Count',
        'salesProductsValue': 'Products Values',
        'salesPaymentMethod': 'Payment Method',
        'salesItemLoad': 'Item Load',
        'salesReceipt': 'Receipt',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'salesPaymentStatus': {
          'credit': 'Credit',
          'paid': 'Paid',
        },
      },
      new: {
        title: 'New Sale',
      },
      view: {
        title: 'View Sale',
      },
      importer: {
        title: 'Import Sales',
        fileName: 'sales_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    purchases: {
      name: 'purchases',
      label: 'Purchases',
      menu: 'Purchases',
      exporterFileName: 'purchases_export',
      list: {
        menu: 'Purchases',
        title: 'Purchases',
      },
      create: {
        success: 'Purchase saved successfully',
      },
      update: {
        success: 'Purchase saved successfully',
      },
      destroy: {
        success: 'Purchase deleted successfully',
      },
      destroyAll: {
        success: 'Purchase(s) deleted successfully',
      },
      edit: {
        title: 'Edit Purchase',
      },
      fields: {
        id: 'Id',
        'purchasesRef': 'Ref',
        'purchaseProduct': 'Product',
        'purchaseSupplier': 'Supplier',
        'purchasePaymentStatus': 'Payment Status',
        'purchaseUnitsRange': 'Units',
        'purchaseUnits': 'Units',
        'purchaseTotalAmountRange': 'Total Amount',
        'purchaseTotalAmount': 'Total Amount',
        'purchaseReturnsUnitsRange': 'Returns Units',
        'purchaseReturnsUnits': 'Returns Units',
        'purchaseNote': 'Purchase Note',
        'purchaseStall': 'Stall',
        'purchaseReturnsReason': 'Return Reason',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'purchasePaymentStatus': {
          'paid': 'Paid',
          'pending': 'Pending',
        },
      },
      new: {
        title: 'New Purchase',
      },
      view: {
        title: 'View Purchase',
      },
      importer: {
        title: 'Import Purchases',
        fileName: 'purchases_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    returns: {
      name: 'returns',
      label: 'Returns',
      menu: 'Returns',
      exporterFileName: 'returns_export',
      list: {
        menu: 'Returns',
        title: 'Returns',
      },
      create: {
        success: 'Return saved successfully',
      },
      update: {
        success: 'Return saved successfully',
      },
      destroy: {
        success: 'Return deleted successfully',
      },
      destroyAll: {
        success: 'Return(s) deleted successfully',
      },
      edit: {
        title: 'Edit Return',
      },
      fields: {
        id: 'Id',
        'returnRefNo': 'Ref No',
        'returnProduct': 'Product',
        'returnUnitsRange': 'Units',
        'returnUnits': 'Units',
        'returnReason': 'Reason',
        'returnsFrom': 'From',
        'returnIdentifier': 'Identifier',
        'returnStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'returnsFrom': {
          'purchase': 'Purchase',
          'sale': 'Sale',
        },
      },
      new: {
        title: 'New Return',
      },
      view: {
        title: 'View Return',
      },
      importer: {
        title: 'Import Returns',
        fileName: 'returns_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stockAdjustments: {
      name: 'stockAdjustments',
      label: 'Stock Adjustments',
      menu: 'Stock Adjustments',
      exporterFileName: 'stockAdjustments_export',
      list: {
        menu: 'Stock Adjustments',
        title: 'Stock Adjustments',
      },
      create: {
        success: 'Stock Adjustment saved successfully',
      },
      update: {
        success: 'Stock Adjustment saved successfully',
      },
      destroy: {
        success: 'Stock Adjustment deleted successfully',
      },
      destroyAll: {
        success: 'Stock Adjustment(s) deleted successfully',
      },
      edit: {
        title: 'Edit Stock Adjustment',
      },
      fields: {
        id: 'Id',
        'stockAdjustmentRef': 'Ref',
        'stockAdjustmentProduct': 'Product',
        'stockAdjustmentType': 'Type',
        'stockAdjustmentUnitsRange': 'Units',
        'stockAdjustmentUnits': 'Units',
        'adjustmentStall': 'Stall',
        'stockAdjustmentsReason': 'Reason',
        'stockAdjustmentClass': 'Class',
        'stockAdjustmentLossRange': 'Loss',
        'stockAdjustmentLoss': 'Loss',
        'stockAdjustmentRecorverdAmountRange': 'Recovered',
        'stockAdjustmentRecorverdAmount': 'Recovered',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'stockAdjustmentType': {
          'increase': 'Increase',
          'decrease': 'Decrease',
        },
        'stockAdjustmentClass': {
          'Normal': 'Normal',
          'Abnomal': 'Abnomal',
        },
      },
      new: {
        title: 'New Stock Adjustment',
      },
      view: {
        title: 'View Stock Adjustment',
      },
      importer: {
        title: 'Import Stock Adjustments',
        fileName: 'stockAdjustments_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    units: {
      name: 'units',
      label: 'Units',
      menu: 'Units',
      exporterFileName: 'units_export',
      list: {
        menu: 'Units',
        title: 'Units',
      },
      create: {
        success: 'Unit saved successfully',
      },
      update: {
        success: 'Unit saved successfully',
      },
      destroy: {
        success: 'Unit deleted successfully',
      },
      destroyAll: {
        success: 'Unit(s) deleted successfully',
      },
      edit: {
        title: 'Edit Unit',
      },
      fields: {
        id: 'Id',
        'unitsTitle': 'Title',
        'unitsCode': 'Code',
        'unitsType': 'UnitsType',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'unitsType': {
          'decimal': 'Decimal',
          'integer': 'Integer',
          'none': 'None',
        },
      },
      new: {
        title: 'New Unit',
      },
      view: {
        title: 'View Unit',
      },
      importer: {
        title: 'Import Units',
        fileName: 'units_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    giftCard: {
      name: 'giftCard',
      label: 'Gift Cards',
      menu: 'Gift Cards',
      exporterFileName: 'giftCard_export',
      list: {
        menu: 'Gift Cards',
        title: 'Gift Cards',
      },
      create: {
        success: 'Gift Card saved successfully',
      },
      update: {
        success: 'Gift Card saved successfully',
      },
      destroy: {
        success: 'Gift Card deleted successfully',
      },
      destroyAll: {
        success: 'Gift Card(s) deleted successfully',
      },
      edit: {
        title: 'Edit Gift Card',
      },
      fields: {
        id: 'Id',
        'giftCardName': 'Name',
        'giftCardNoRange': 'Card No',
        'giftCardNo': 'Card No',
        'giftCardAmmountRange': 'Ammount',
        'giftCardAmmount': 'Ammount',
        'giftCardCustomer': 'Customer',
        'giftCardStartDateRange': 'Start Date',
        'giftCardStartDate': 'Start Date',
        'giftCardEndDateRange': 'End Date',
        'giftCardEndDate': 'End Date',
        'giftCardStall': 'Stalls',
        'giftCardStatus': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'giftCardStatus': {
          'Pending': 'Pending',
          'Used': 'Used',
        },
      },
      new: {
        title: 'New Gift Card',
      },
      view: {
        title: 'View Gift Card',
      },
      importer: {
        title: 'Import Gift Cards',
        fileName: 'giftCard_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    coupon: {
      name: 'coupon',
      label: 'Coupons',
      menu: 'Coupons',
      exporterFileName: 'coupon_export',
      list: {
        menu: 'Coupons',
        title: 'Coupons',
      },
      create: {
        success: 'Coupon saved successfully',
      },
      update: {
        success: 'Coupon saved successfully',
      },
      destroy: {
        success: 'Coupon deleted successfully',
      },
      destroyAll: {
        success: 'Coupon(s) deleted successfully',
      },
      edit: {
        title: 'Edit Coupon',
      },
      fields: {
        id: 'Id',
        'couponCode': 'Coupon Code',
        'couponType': 'Type',
        'couponValueRange': 'Value',
        'couponValue': 'Value',
        'couponMinAmountRange': 'Min Amount',
        'couponMinAmount': 'Min Amount',
        'couponStartDateRange': 'Start Date',
        'couponStartDate': 'Start Date',
        'couponEndDateRange': 'End Date',
        'couponEndDate': 'End Date',
        'couponStall': 'Stall',
        'couponStatus': 'Status',
        'couponMaxUseRange': 'Max Use',
        'couponMaxUse': 'Max Use',
        'couponUsageCountRange': 'Count',
        'couponUsageCount': 'Count',
        'couponSalesUsed': 'Sales',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'couponType': {
          'Percentage': 'Percentage',
          'Fixed': 'Fixed',
        },
        'couponStatus': {
          'Active': 'Active',
          'Inactive': 'Inactive',
        },
      },
      new: {
        title: 'New Coupon',
      },
      view: {
        title: 'View Coupon',
      },
      importer: {
        title: 'Import Coupons',
        fileName: 'coupon_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    damages: {
      name: 'damages',
      label: 'Damages',
      menu: 'Damages',
      exporterFileName: 'damages_export',
      list: {
        menu: 'Damages',
        title: 'Damages',
      },
      create: {
        success: 'Damage saved successfully',
      },
      update: {
        success: 'Damage saved successfully',
      },
      destroy: {
        success: 'Damage deleted successfully',
      },
      destroyAll: {
        success: 'Damage(s) deleted successfully',
      },
      edit: {
        title: 'Edit Damage',
      },
      fields: {
        id: 'Id',
        'damageCover': 'Cover',
        'damageRef': 'Ref',
        'damageProduct': 'Product',
        'damageDateRange': 'Date',
        'damageDate': 'Date',
        'damageCausedBy': 'Caused By',
        'damageAmmountRange': 'Cost',
        'damageAmmount': 'Cost',
        'damageNote': 'Note',
        'damageDocs': 'Docs',
        'damageStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Damage',
      },
      view: {
        title: 'View Damage',
      },
      importer: {
        title: 'Import Damages',
        fileName: 'damages_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    leave: {
      name: 'leave',
      label: 'Leaves',
      menu: 'Leaves',
      exporterFileName: 'leave_export',
      list: {
        menu: 'Leaves',
        title: 'Leaves',
      },
      create: {
        success: 'Leave saved successfully',
      },
      update: {
        success: 'Leave saved successfully',
      },
      destroy: {
        success: 'Leave deleted successfully',
      },
      destroyAll: {
        success: 'Leave(s) deleted successfully',
      },
      edit: {
        title: 'Edit Leave',
      },
      fields: {
        id: 'Id',
        'leaveRef': 'Ref',
        'leaveUserId': 'User',
        'leaveType': 'Type',
        'leaveStartDateRange': 'Start Date',
        'leaveStartDate': 'Start Date',
        'leaveEndDateRange': 'End Date',
        'leaveEndDate': 'End Date',
        'leaveNote': 'Note',
        'leaveDocs': 'Docs',
        'leaveAssignedStaff': 'Assigned Staff',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Leave',
      },
      view: {
        title: 'View Leave',
      },
      importer: {
        title: 'Import Leaves',
        fileName: 'leave_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    leaveType: {
      name: 'leaveType',
      label: 'Leave Types',
      menu: 'Leave Types',
      exporterFileName: 'leaveType_export',
      list: {
        menu: 'Leave Types',
        title: 'Leave Types',
      },
      create: {
        success: 'Leave Type saved successfully',
      },
      update: {
        success: 'Leave Type saved successfully',
      },
      destroy: {
        success: 'Leave Type deleted successfully',
      },
      destroyAll: {
        success: 'Leave Type(s) deleted successfully',
      },
      edit: {
        title: 'Edit Leave Type',
      },
      fields: {
        id: 'Id',
        'leaveTypeTitle': 'Title',
        'leaveTypeDetails': 'Details',
        'leaveCategory': 'Category',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'leaveCategory': {
          'monthly': 'Monthly',
          'yearly': 'Yearly',
          'None': 'None',
          'Sick': 'Sick',
          'Study': 'Study',
          'Special': 'Special',
          'Maternity': 'Maternity',
          'Paternity': 'Paternity',
          'Unauthorised': 'Unauthorised',
        },
      },
      new: {
        title: 'New Leave Type',
      },
      view: {
        title: 'View Leave Type',
      },
      importer: {
        title: 'Import Leave Types',
        fileName: 'leaveType_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    allowanceAndDeduction: {
      name: 'allowanceAndDeduction',
      label: 'Allowances And Deductions',
      menu: 'Allowances And Deductions',
      exporterFileName: 'allowanceAndDeduction_export',
      list: {
        menu: 'Allowances And Deductions',
        title: 'Allowances And Deductions',
      },
      create: {
        success: 'Allowance And Deduction saved successfully',
      },
      update: {
        success: 'Allowance And Deduction saved successfully',
      },
      destroy: {
        success: 'Allowance And Deduction deleted successfully',
      },
      destroyAll: {
        success: 'Allowance And Deduction(s) deleted successfully',
      },
      edit: {
        title: 'Edit Allowance And Deduction',
      },
      fields: {
        id: 'Id',
        'adRef': 'Ref',
        'adType': 'Type',
        'adStaff': 'Staff',
        'adAmmountRange': 'Ammount',
        'adAmmount': 'Ammount',
        'adStall': 'Stall',
        'adDateRange': 'Date',
        'adDate': 'Date',
        'adNote': 'Note',
        'adDamages': 'Damages',
        'adCommissions': 'Commissions',
        'adExpenses': 'Expenses',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'adType': {
          'Allowance': 'Allowance',
          'Deduction': 'Deduction',
        },
      },
      new: {
        title: 'New Allowance And Deduction',
      },
      view: {
        title: 'View Allowance And Deduction',
      },
      importer: {
        title: 'Import Allowances And Deductions',
        fileName: 'allowanceAndDeduction_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    payroll: {
      name: 'payroll',
      label: 'Payrolls',
      menu: 'Payrolls',
      exporterFileName: 'payroll_export',
      list: {
        menu: 'Payrolls',
        title: 'Payrolls',
      },
      create: {
        success: 'Payroll saved successfully',
      },
      update: {
        success: 'Payroll saved successfully',
      },
      destroy: {
        success: 'Payroll deleted successfully',
      },
      destroyAll: {
        success: 'Payroll(s) deleted successfully',
      },
      edit: {
        title: 'Edit Payroll',
      },
      fields: {
        id: 'Id',
        'payrollRef': 'Ref',
        'payrollStaff': 'Staff',
        'payrollSalaryRange': 'Salary',
        'payrollSalary': 'Salary',
        'payrollAd': 'Allowance and Deductions',
        'payrollDocs': 'Docs',
        'payrollWorkingType': 'Type',
        'payrollWorkingTimeRange': 'Time',
        'payrollWorkingTime': 'Time',
        'payrollStatus': 'Status',
        'payrollDateRange': 'Date',
        'payrollDate': 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'payrollWorkingType': {
          'Days': 'Days',
          'Hours': 'Hours',
          'Weeks': 'Weeks',
          'Months': 'Months',
        },
        'payrollStatus': {
          'Pending': 'Pending',
          'Completed': 'Completed',
        },
      },
      new: {
        title: 'New Payroll',
      },
      view: {
        title: 'View Payroll',
      },
      importer: {
        title: 'Import Payrolls',
        fileName: 'payroll_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    attendance: {
      name: 'attendance',
      label: 'Attendances',
      menu: 'Attendances',
      exporterFileName: 'attendance_export',
      list: {
        menu: 'Attendances',
        title: 'Attendances',
      },
      create: {
        success: 'Attendance saved successfully',
      },
      update: {
        success: 'Attendance saved successfully',
      },
      destroy: {
        success: 'Attendance deleted successfully',
      },
      destroyAll: {
        success: 'Attendance(s) deleted successfully',
      },
      edit: {
        title: 'Edit Attendance',
      },
      fields: {
        id: 'Id',
        'attendanceRef': 'Ref',
        'attendanceStaff': 'Staff',
        'attendanceClockInRange': 'Clock In',
        'attendanceClockIn': 'Clock In',
        'attendanceClockOutRange': 'Clock Out',
        'attendanceClockOut': 'Clock Out',
        'attendanceNote': 'Note',
        'expenseStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Attendance',
      },
      view: {
        title: 'View Attendance',
      },
      importer: {
        title: 'Import Attendances',
        fileName: 'attendance_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    taxClass: {
      name: 'taxClass',
      label: 'Tax Classes',
      menu: 'Tax Classes',
      exporterFileName: 'taxClass_export',
      list: {
        menu: 'Tax Classes',
        title: 'Tax Classes',
      },
      create: {
        success: 'Tax Class saved successfully',
      },
      update: {
        success: 'Tax Class saved successfully',
      },
      destroy: {
        success: 'Tax Class deleted successfully',
      },
      destroyAll: {
        success: 'Tax Class(s) deleted successfully',
      },
      edit: {
        title: 'Edit Tax Class',
      },
      fields: {
        id: 'Id',
        'taxClassName': 'Class Name',
        'taxClassPercentageRange': 'Class Percentage',
        'taxClassPercentage': 'Class Percentage',
        'taxClassDetails': 'Class Details',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Tax Class',
      },
      view: {
        title: 'View Tax Class',
      },
      importer: {
        title: 'Import Tax Classes',
        fileName: 'taxClass_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    todo: {
      name: 'todo',
      label: 'Todos',
      menu: 'Todos',
      exporterFileName: 'todo_export',
      list: {
        menu: 'Todos',
        title: 'Todos',
      },
      create: {
        success: 'Todo saved successfully',
      },
      update: {
        success: 'Todo saved successfully',
      },
      destroy: {
        success: 'Todo deleted successfully',
      },
      destroyAll: {
        success: 'Todo(s) deleted successfully',
      },
      edit: {
        title: 'Edit Todo',
      },
      fields: {
        id: 'Id',
        'todoTitle': 'Title',
        'todoNote': 'Note',
        'todoStaff': 'Staff',
        'todoStatus': 'Status',
        'todoStartDateRange': 'Start Date',
        'todoStartDate': 'Start Date',
        'todoEndDateRange': 'End Date',
        'todoEndDate': 'End Date',
        'todoRatingRange': 'Rating',
        'todoRating': 'Rating',
        'todoStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'todoStatus': {
          'New': 'New',
          'Progress': 'Progress',
          'Done': 'Done',
        },
      },
      new: {
        title: 'New Todo',
      },
      view: {
        title: 'View Todo',
      },
      importer: {
        title: 'Import Todos',
        fileName: 'todo_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    documents: {
      name: 'documents',
      label: 'Documents',
      menu: 'Documents',
      exporterFileName: 'documents_export',
      list: {
        menu: 'Documents',
        title: 'Documents',
      },
      create: {
        success: 'Document saved successfully',
      },
      update: {
        success: 'Document saved successfully',
      },
      destroy: {
        success: 'Document deleted successfully',
      },
      destroyAll: {
        success: 'Document(s) deleted successfully',
      },
      edit: {
        title: 'Edit Document',
      },
      fields: {
        id: 'Id',
        'documentTitle': 'Title',
        'documentDetails': 'Details',
        'documentType': 'Type',
        'docStall': 'Stall',
        'documentFile': 'File',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Document',
      },
      view: {
        title: 'View Document',
      },
      importer: {
        title: 'Import Documents',
        fileName: 'documents_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    paymentMethods: {
      name: 'paymentMethods',
      label: 'Payment Methods',
      menu: 'Payment Methods',
      exporterFileName: 'paymentMethods_export',
      list: {
        menu: 'Payment Methods',
        title: 'Payment Methods',
      },
      create: {
        success: 'Payment Method saved successfully',
      },
      update: {
        success: 'Payment Method saved successfully',
      },
      destroy: {
        success: 'Payment Method deleted successfully',
      },
      destroyAll: {
        success: 'Payment Method(s) deleted successfully',
      },
      edit: {
        title: 'Edit Payment Method',
      },
      fields: {
        id: 'Id',
        'paymentMethodLogo': 'Logo',
        'paymentMethodTitle': 'Title',
        'paymentMethodType': 'Type',
        'paymentMethodParams': 'Params',
        'paymentMethodResponse': 'Response',
        'paymentMethodStatus': 'Status',
        'paymentMethodHeader': 'Header',
        'paymentMethodApi': 'Api',
        'paymentMethodCustom1': 'Custom1',
        'paymentMethodCustom2': 'Custom2',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'paymentMethodType': {
          'Online': 'Online',
          'Offline': 'Offline',
        },
      },
      new: {
        title: 'New Payment Method',
      },
      view: {
        title: 'View Payment Method',
      },
      importer: {
        title: 'Import Payment Methods',
        fileName: 'paymentMethods_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    documentTypes: {
      name: 'documentTypes',
      label: 'Document Types',
      menu: 'Document Types',
      exporterFileName: 'documentTypes_export',
      list: {
        menu: 'Document Types',
        title: 'Document Types',
      },
      create: {
        success: 'Document Type saved successfully',
      },
      update: {
        success: 'Document Type saved successfully',
      },
      destroy: {
        success: 'Document Type deleted successfully',
      },
      destroyAll: {
        success: 'Document Type(s) deleted successfully',
      },
      edit: {
        title: 'Edit Document Type',
      },
      fields: {
        id: 'Id',
        'documentTypeTitle': 'Title',
        'documentTypeNote': 'Note',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Document Type',
      },
      view: {
        title: 'View Document Type',
      },
      importer: {
        title: 'Import Document Types',
        fileName: 'documentTypes_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    memos: {
      name: 'memos',
      label: 'Memos',
      menu: 'Memos',
      exporterFileName: 'memos_export',
      list: {
        menu: 'Memos',
        title: 'Memos',
      },
      create: {
        success: 'Memo saved successfully',
      },
      update: {
        success: 'Memo saved successfully',
      },
      destroy: {
        success: 'Memo deleted successfully',
      },
      destroyAll: {
        success: 'Memo(s) deleted successfully',
      },
      edit: {
        title: 'Edit Memo',
      },
      fields: {
        id: 'Id',
        'memosCover': 'Cover',
        'memosTitle': 'Title',
        'memosDetails': 'Details',
        'memosFrom': 'From',
        'memosStartDateRange': 'Start Date',
        'memosStartDate': 'Start Date',
        'memosEndDateRange': 'End Date',
        'memosEndDate': 'End Date',
        'memosTo': 'Memo To',
        'memoStall': 'Stall',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Memo',
      },
      view: {
        title: 'View Memo',
      },
      importer: {
        title: 'Import Memos',
        fileName: 'memos_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    currency: {
      name: 'currency',
      label: 'Currencies',
      menu: 'Currencies',
      exporterFileName: 'currency_export',
      list: {
        menu: 'Currencies',
        title: 'Currencies',
      },
      create: {
        success: 'Currency saved successfully',
      },
      update: {
        success: 'Currency saved successfully',
      },
      destroy: {
        success: 'Currency deleted successfully',
      },
      destroyAll: {
        success: 'Currency(s) deleted successfully',
      },
      edit: {
        title: 'Edit Currency',
      },
      fields: {
        id: 'Id',
        'currencyTitle': 'CurrencyTitle',
        'currencyCode': 'Code',
        'currencySign': 'Sign',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Currency',
      },
      view: {
        title: 'View Currency',
      },
      importer: {
        title: 'Import Currencies',
        fileName: 'currency_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    holiday: {
      name: 'holiday',
      label: 'Holidays',
      menu: 'Holidays',
      exporterFileName: 'holiday_export',
      list: {
        menu: 'Holidays',
        title: 'Holidays',
      },
      create: {
        success: 'Holiday saved successfully',
      },
      update: {
        success: 'Holiday saved successfully',
      },
      destroy: {
        success: 'Holiday deleted successfully',
      },
      destroyAll: {
        success: 'Holiday(s) deleted successfully',
      },
      edit: {
        title: 'Edit Holiday',
      },
      fields: {
        id: 'Id',
        'holidayCover': 'Cover',
        'holidayTitle': 'Title',
        'holidayDetails': 'Details',
        'holidayStartDateRange': 'Start Date',
        'holidayStartDate': 'Start Date',
        'holidayEndDateRange': 'End Date',
        'holidayEndDate': 'End Date',
        'holidayStall': 'Stall',
        'holidayStaff': 'Staff',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Holiday',
      },
      view: {
        title: 'View Holiday',
      },
      importer: {
        title: 'Import Holidays',
        fileName: 'holiday_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stall: {
      name: 'stall',
      label: 'Stalls',
      menu: 'Stalls',
      exporterFileName: 'stall_export',
      list: {
        menu: 'Stalls',
        title: 'Stalls',
      },
      create: {
        success: 'Stall saved successfully',
      },
      update: {
        success: 'Stall saved successfully',
      },
      destroy: {
        success: 'Stall deleted successfully',
      },
      destroyAll: {
        success: 'Stall(s) deleted successfully',
      },
      edit: {
        title: 'Edit Stall',
      },
      fields: {
        id: 'Id',
        'stallCover': 'Cover',
        'stallName': 'Name',
        'stallType': 'Type',
        'stallInfo': 'Info',
        'stallLocation': 'Location',
        'stallPhoneNumber': 'Phone Number',
        'stallEmail': 'Email',
        'stallIsStatus': 'Status',
        'stallPos': 'Pos',
        'stallLoyaltyPointValueRange': 'Loyalty Point Value',
        'stallLoyaltyPointValue': 'Loyalty Point Value',
        'stallCustom1': 'Custom 1',
        'stallCustom2': 'Custom 2',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'stallType': {
          'warehouse': 'Warehouse',
          'outlet': 'Outlet',
          'store': 'Store',
          'counter': 'Counter',
        },
        'stallIsStatus': {
          'public': 'Public',
          'private': 'Private',
        },
        'stallPos': {
          'enabled': 'Enabled',
          'disabled': 'Disabled',
        },
      },
      new: {
        title: 'New Stall',
      },
      view: {
        title: 'View Stall',
      },
      importer: {
        title: 'Import Stalls',
        fileName: 'stall_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    variation: {
      name: 'variation',
      label: 'Variations',
      menu: 'Variations',
      exporterFileName: 'variation_export',
      list: {
        menu: 'Variations',
        title: 'Variations',
      },
      create: {
        success: 'Variation saved successfully',
      },
      update: {
        success: 'Variation saved successfully',
      },
      destroy: {
        success: 'Variation deleted successfully',
      },
      destroyAll: {
        success: 'Variation(s) deleted successfully',
      },
      edit: {
        title: 'Edit Variation',
      },
      fields: {
        id: 'Id',
        'variationName': 'Name',
        'variationValues': 'Values',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Variation',
      },
      view: {
        title: 'View Variation',
      },
      importer: {
        title: 'Import Variations',
        fileName: 'variation_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    productLogs: {
      name: 'productLogs',
      label: 'Product Logs',
      menu: 'Product Logs',
      exporterFileName: 'productLogs_export',
      list: {
        menu: 'Product Logs',
        title: 'Product Logs',
      },
      create: {
        success: 'Product Log saved successfully',
      },
      update: {
        success: 'Product Log saved successfully',
      },
      destroy: {
        success: 'Product Log deleted successfully',
      },
      destroyAll: {
        success: 'Product Log(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product Log',
      },
      fields: {
        id: 'Id',
        'productLogRef': 'Ref',
        'productLogProduct': 'Product',
        'productLogStall': 'Stall',
        'productLogSellingPriceRange': 'Selling Price',
        'productLogSellingPrice': 'Selling Price',
        'productLogMarginRange': 'Margin',
        'productLogMargin': 'Margin',
        'productLogBuyingPriceRange': 'Buying Price',
        'productLogBuyingPrice': 'Buying Price',
        'productLogCurrentStockRange': 'Current Stock',
        'productLogCurrentStock': 'Current Stock',
        'productLogSoldUnitsRange': 'Sold',
        'productLogSoldUnits': 'Sold',
        'productLogAdjustedUnitsRange': 'Adjusted Units',
        'productLogAdjustedUnits': 'Adjusted Units',
        'productLogDamagedUnitsRange': 'Damaged',
        'productLogDamagedUnits': 'Damaged',
        'productLogReturnedUnitsRange': 'Returned',
        'productLogReturnedUnits': 'Returned',
        'productLogPurchasedUnitsRange': 'Purchased',
        'productLogPurchasedUnits': 'Purchased',
        'productLogTransferredUnitsRange': 'Transferred Units',
        'productLogTransferredUnits': 'Transferred Units',
        'productLogPurchaseRef': 'Purchase Ref',
        'productLogSaleRef': 'Sale Ref',
        'productLogReturnsRef': 'Returns Ref',
        'productLogAdjustRef': 'Adjust',
        'productLogTransferredRef': 'Transferred Ref',
        'productLogDamageRef': 'Damage Ref',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product Log',
      },
      view: {
        title: 'View Product Log',
      },
      importer: {
        title: 'Import Product Logs',
        fileName: 'productLogs_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    stockTransfer: {
      name: 'stockTransfer',
      label: 'StockTransfers',
      menu: 'StockTransfers',
      exporterFileName: 'stockTransfer_export',
      list: {
        menu: 'StockTransfers',
        title: 'StockTransfers',
      },
      create: {
        success: 'Stock Transfer saved successfully',
      },
      update: {
        success: 'Stock Transfer saved successfully',
      },
      destroy: {
        success: 'Stock Transfer deleted successfully',
      },
      destroyAll: {
        success: 'Stock Transfer(s) deleted successfully',
      },
      edit: {
        title: 'Edit Stock Transfer',
      },
      fields: {
        id: 'Id',
        'transferRef': 'Transfer Ref',
        'transferProduct': 'Product',
        'transferStallFrom': 'From',
        'transferStallTo': 'To',
        'transferUnitsRange': 'Units',
        'transferUnits': 'Units',
        'transferNote': 'Note',
        'transferStatus': 'Status',
        'transferExpenses': 'Expenses',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'transferStatus': {
          'Done': 'Done',
          'Pending': 'Pending',
          'Active': 'Active',
        },
      },
      new: {
        title: 'New Stock Transfer',
      },
      view: {
        title: 'View Stock Transfer',
      },
      importer: {
        title: 'Import StockTransfers',
        fileName: 'stockTransfer_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    deviceSessions: {
      name: 'deviceSessions',
      label: 'Device Sessions',
      menu: 'Device Sessions',
      exporterFileName: 'deviceSessions_export',
      list: {
        menu: 'Device Sessions',
        title: 'Device Sessions',
      },
      create: {
        success: 'Device Session saved successfully',
      },
      update: {
        success: 'Device Session saved successfully',
      },
      destroy: {
        success: 'Device Session deleted successfully',
      },
      destroyAll: {
        success: 'Device Session(s) deleted successfully',
      },
      edit: {
        title: 'Edit Device Session',
      },
      fields: {
        id: 'Id',
        'sessionDevice': 'Device',
        'sessionLoginDateRange': 'Date',
        'sessionLoginDate': 'Date',
        'sessionLogoutDateRange': 'Logout',
        'sessionLogoutDate': 'Logout',
        'sessionUser': 'User',
        'sessionDeviceType': 'Device Type',
        'sessionIp': 'Ip',
        'sessionNetwork': 'Network',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'sessionDeviceType': {
          'POS': 'POS',
          'Stock': 'Stock',
          'Customer': 'Customer',
          'HR': 'HR',
        },
      },
      new: {
        title: 'New Device Session',
      },
      view: {
        title: 'View Device Session',
      },
      importer: {
        title: 'Import Device Sessions',
        fileName: 'deviceSessions_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    productCount: {
      name: 'productCount',
      label: 'Product Counts',
      menu: 'Product Counts',
      exporterFileName: 'productCount_export',
      list: {
        menu: 'Product Counts',
        title: 'Product Counts',
      },
      create: {
        success: 'Product Count saved successfully',
      },
      update: {
        success: 'Product Count saved successfully',
      },
      destroy: {
        success: 'Product Count deleted successfully',
      },
      destroyAll: {
        success: 'Product Count(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product Count',
      },
      fields: {
        id: 'Id',
        'countRange': 'Count',
        'count': 'Count',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product Count',
      },
      view: {
        title: 'View Product Count',
      },
      importer: {
        title: 'Import Product Counts',
        fileName: 'productCount_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    productValue: {
      name: 'productValue',
      label: 'Product Values',
      menu: 'Product Values',
      exporterFileName: 'productValue_export',
      list: {
        menu: 'Product Values',
        title: 'Product Values',
      },
      create: {
        success: 'Product Value saved successfully',
      },
      update: {
        success: 'Product Value saved successfully',
      },
      destroy: {
        success: 'Product Value deleted successfully',
      },
      destroyAll: {
        success: 'Product Value(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product Value',
      },
      fields: {
        id: 'Id',
        'valueRange': 'Value',
        'value': 'Value',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Product Value',
      },
      view: {
        title: 'View Product Value',
      },
      importer: {
        title: 'Import Product Values',
        fileName: 'productValue_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    register: {
      name: 'register',
      label: 'Registers',
      menu: 'Registers',
      exporterFileName: 'register_export',
      list: {
        menu: 'Registers',
        title: 'Registers',
      },
      create: {
        success: 'Register saved successfully',
      },
      update: {
        success: 'Register saved successfully',
      },
      destroy: {
        success: 'Register deleted successfully',
      },
      destroyAll: {
        success: 'Register(s) deleted successfully',
      },
      edit: {
        title: 'Edit Register',
      },
      fields: {
        id: 'Id',
        'registerRef': 'Ref',
        'registerStall': 'Stall',
        'registerStaff': 'Staff',
        'registerOpeningValueRange': 'Opening Value',
        'registerOpeningValue': 'Opening Value',
        'registerClosingValueRange': 'Closing Value',
        'registerClosingValue': 'Closing Value',
        'registerSaleValueRange': 'Sale Value',
        'registerSaleValue': 'Sale Value',
        'registerSaleItemsRange': 'Sold Items',
        'registerSaleItems': 'Sold Items',
        'registerSaleRef': 'Sale Ref',
        'registerReturnsRef': 'Returns Ref',
        'registerOpenTimeRange': 'Open Time',
        'registerOpenTime': 'Open Time',
        'registerCloseTimeRange': 'Close Time',
        'registerCloseTime': 'Close Time',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Register',
      },
      view: {
        title: 'View Register',
      },
      importer: {
        title: 'Import Registers',
        fileName: 'register_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    commissions: {
      name: 'commissions',
      label: 'Commissions',
      menu: 'Commissions',
      exporterFileName: 'commissions_export',
      list: {
        menu: 'Commissions',
        title: 'Commissions',
      },
      create: {
        success: 'Commission saved successfully',
      },
      update: {
        success: 'Commission saved successfully',
      },
      destroy: {
        success: 'Commission deleted successfully',
      },
      destroyAll: {
        success: 'Commission(s) deleted successfully',
      },
      edit: {
        title: 'Edit Commission',
      },
      fields: {
        id: 'Id',
        'commStaff': 'Staff',
        'commSale': 'Sales',
        'commStall': 'Stall',
        'commRegister': 'Register',
        'commAmountRange': 'Amount',
        'commAmount': 'Amount',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Commission',
      },
      view: {
        title: 'View Commission',
      },
      importer: {
        title: 'Import Commissions',
        fileName: 'commissions_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    transactions: {
      name: 'transactions',
      label: 'Transactions',
      menu: 'Transactions',
      exporterFileName: 'transactions_export',
      list: {
        menu: 'Transactions',
        title: 'Transactions',
      },
      create: {
        success: 'Transaction saved successfully',
      },
      update: {
        success: 'Transaction saved successfully',
      },
      destroy: {
        success: 'Transaction deleted successfully',
      },
      destroyAll: {
        success: 'Transaction(s) deleted successfully',
      },
      edit: {
        title: 'Edit Transaction',
      },
      fields: {
        id: 'Id',
        'transactionRef': 'Ref',
        'transactionClass': 'Class',
        'transactionType': 'Type',
        'transactionValueRange': 'Value',
        'transactionValue': 'Value',
        'transactionIdentifier': 'Identifier',
        'transactionSession': 'Session',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'transactionClass': {
          'Purchase': 'Purchase',
          'Sales': 'Sales',
          'Customer': 'Customer',
          'Assets': 'Assets',
          'Expenses': 'Expenses',
          'Salary': 'Salary',
          'AD': 'AD',
        },
        'transactionType': {
          'Debit': 'Debit',
          'Credit': 'Credit',
        },
      },
      new: {
        title: 'New Transaction',
      },
      view: {
        title: 'View Transaction',
      },
      importer: {
        title: 'Import Transactions',
        fileName: 'transactions_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    priceChange: {
      name: 'priceChange',
      label: 'PriceChanges',
      menu: 'PriceChanges',
      exporterFileName: 'priceChange_export',
      list: {
        menu: 'PriceChanges',
        title: 'PriceChanges',
      },
      create: {
        success: 'Price Change saved successfully',
      },
      update: {
        success: 'Price Change saved successfully',
      },
      destroy: {
        success: 'Price Change deleted successfully',
      },
      destroyAll: {
        success: 'Price Change(s) deleted successfully',
      },
      edit: {
        title: 'Edit Price Change',
      },
      fields: {
        id: 'Id',
        'priceChangeRef': 'Ref',
        'priceChangeType': 'Type',
        'priceChangeBeforeRange': 'Before',
        'priceChangeBefore': 'Before',
        'priceChangeAfterRange': 'After',
        'priceChangeAfter': 'After',
        'priceChangeProduct': 'Product',
        'priceChangeStall': 'Stall',
        'priceChangeSession': 'Session',
        'priceChangeStatus': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'priceChangeType': {
          'Buying': 'Buying',
          'Margin': 'Margin',
        },
        'priceChangeStatus': {
          'Completed': 'Completed',
          'Pending': 'Pending',
        },
      },
      new: {
        title: 'New Price Change',
      },
      view: {
        title: 'View Price Change',
      },
      importer: {
        title: 'Import PriceChanges',
        fileName: 'priceChange_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    customersEditor: {
      label: 'Customer Editor',
      description: 'Edit access to Customers',
    },
    customersViewer: {
      label: 'Customer Viewer',
      description: 'View access to Customers',
    },
    suppliersEditor: {
      label: 'Supplier Editor',
      description: 'Edit access to Suppliers',
    },
    suppliersViewer: {
      label: 'Supplier Viewer',
      description: 'View access to Suppliers',
    },
    staffEditor: {
      label: 'Staff Editor',
      description: 'Edit access to Staffs',
    },
    staffViewer: {
      label: 'Staff Viewer',
      description: 'View access to Staffs',
    },
    productsEditor: {
      label: 'Product Editor',
      description: 'Edit access to Products',
    },
    productsViewer: {
      label: 'Product Viewer',
      description: 'View access to Products',
    },
    brandsEditor: {
      label: 'Brands Editor',
      description: 'Edit access to Brands',
    },
    brandsViewer: {
      label: 'Brands Viewer',
      description: 'View access to Brands',
    },
    categoriesEditor: {
      label: 'Category Editor',
      description: 'Edit access to Categories',
    },
    categoriesViewer: {
      label: 'Category Viewer',
      description: 'View access to Categories',
    },
    expensesEditor: {
      label: 'Expense Editor',
      description: 'Edit access to Expenses',
    },
    expensesViewer: {
      label: 'Expense Viewer',
      description: 'View access to Expenses',
    },
    expenseCategoryEditor: {
      label: 'Expense Category Editor',
      description: 'Edit access to Expense Categories',
    },
    expenseCategoryViewer: {
      label: 'Expense Category Viewer',
      description: 'View access to Expense Categories',
    },
    assetsEditor: {
      label: 'Asset Editor',
      description: 'Edit access to Assets',
    },
    assetsViewer: {
      label: 'Asset Viewer',
      description: 'View access to Assets',
    },
    devicesEditor: {
      label: 'Device Editor',
      description: 'Edit access to Devices',
    },
    devicesViewer: {
      label: 'Device Viewer',
      description: 'View access to Devices',
    },
    noticeEditor: {
      label: 'Notice Editor',
      description: 'Edit access to Notices',
    },
    noticeViewer: {
      label: 'Notice Viewer',
      description: 'View access to Notices',
    },
    salesEditor: {
      label: 'Sale Editor',
      description: 'Edit access to Sales',
    },
    salesViewer: {
      label: 'Sale Viewer',
      description: 'View access to Sales',
    },
    purchasesEditor: {
      label: 'Purchase Editor',
      description: 'Edit access to Purchases',
    },
    purchasesViewer: {
      label: 'Purchase Viewer',
      description: 'View access to Purchases',
    },
    returnsEditor: {
      label: 'Return Editor',
      description: 'Edit access to Returns',
    },
    returnsViewer: {
      label: 'Return Viewer',
      description: 'View access to Returns',
    },
    stockAdjustmentsEditor: {
      label: 'Stock Adjustment Editor',
      description: 'Edit access to Stock Adjustments',
    },
    stockAdjustmentsViewer: {
      label: 'Stock Adjustment Viewer',
      description: 'View access to Stock Adjustments',
    },
    unitsEditor: {
      label: 'Unit Editor',
      description: 'Edit access to Units',
    },
    unitsViewer: {
      label: 'Unit Viewer',
      description: 'View access to Units',
    },
    giftCardEditor: {
      label: 'Gift Card Editor',
      description: 'Edit access to Gift Cards',
    },
    giftCardViewer: {
      label: 'Gift Card Viewer',
      description: 'View access to Gift Cards',
    },
    couponEditor: {
      label: 'Coupon Editor',
      description: 'Edit access to Coupons',
    },
    couponViewer: {
      label: 'Coupon Viewer',
      description: 'View access to Coupons',
    },
    damagesEditor: {
      label: 'Damage Editor',
      description: 'Edit access to Damages',
    },
    damagesViewer: {
      label: 'Damage Viewer',
      description: 'View access to Damages',
    },
    leaveEditor: {
      label: 'Leave Editor',
      description: 'Edit access to Leaves',
    },
    leaveViewer: {
      label: 'Leave Viewer',
      description: 'View access to Leaves',
    },
    leaveTypeEditor: {
      label: 'Leave Type Editor',
      description: 'Edit access to Leave Types',
    },
    leaveTypeViewer: {
      label: 'Leave Type Viewer',
      description: 'View access to Leave Types',
    },
    allowanceAndDeductionEditor: {
      label: 'Allowance And Deduction Editor',
      description: 'Edit access to Allowances And Deductions',
    },
    allowanceAndDeductionViewer: {
      label: 'Allowance And Deduction Viewer',
      description: 'View access to Allowances And Deductions',
    },
    payrollEditor: {
      label: 'Payroll Editor',
      description: 'Edit access to Payrolls',
    },
    payrollViewer: {
      label: 'Payroll Viewer',
      description: 'View access to Payrolls',
    },
    attendanceEditor: {
      label: 'Attendance Editor',
      description: 'Edit access to Attendances',
    },
    attendanceViewer: {
      label: 'Attendance Viewer',
      description: 'View access to Attendances',
    },
    taxClassEditor: {
      label: 'Tax Class Editor',
      description: 'Edit access to Tax Classes',
    },
    taxClassViewer: {
      label: 'Tax Class Viewer',
      description: 'View access to Tax Classes',
    },
    todoEditor: {
      label: 'Todo Editor',
      description: 'Edit access to Todos',
    },
    todoViewer: {
      label: 'Todo Viewer',
      description: 'View access to Todos',
    },
    documentsEditor: {
      label: 'Document Editor',
      description: 'Edit access to Documents',
    },
    documentsViewer: {
      label: 'Document Viewer',
      description: 'View access to Documents',
    },
    paymentMethodsEditor: {
      label: 'Payment Method Editor',
      description: 'Edit access to Payment Methods',
    },
    paymentMethodsViewer: {
      label: 'Payment Method Viewer',
      description: 'View access to Payment Methods',
    },
    documentTypesEditor: {
      label: 'Document Type Editor',
      description: 'Edit access to Document Types',
    },
    documentTypesViewer: {
      label: 'Document Type Viewer',
      description: 'View access to Document Types',
    },
    memosEditor: {
      label: 'Memo Editor',
      description: 'Edit access to Memos',
    },
    memosViewer: {
      label: 'Memo Viewer',
      description: 'View access to Memos',
    },
    currencyEditor: {
      label: 'Currency Editor',
      description: 'Edit access to Currencies',
    },
    currencyViewer: {
      label: 'Currency Viewer',
      description: 'View access to Currencies',
    },
    holidayEditor: {
      label: 'Holiday Editor',
      description: 'Edit access to Holidays',
    },
    holidayViewer: {
      label: 'Holiday Viewer',
      description: 'View access to Holidays',
    },
    stallEditor: {
      label: 'Stall Editor',
      description: 'Edit access to Stalls',
    },
    stallViewer: {
      label: 'Stall Viewer',
      description: 'View access to Stalls',
    },
    variationEditor: {
      label: 'Variation Editor',
      description: 'Edit access to Variations',
    },
    variationViewer: {
      label: 'Variation Viewer',
      description: 'View access to Variations',
    },
    productLogsEditor: {
      label: 'Product Log Editor',
      description: 'Edit access to Product Logs',
    },
    productLogsViewer: {
      label: 'Product Log Viewer',
      description: 'View access to Product Logs',
    },
    stockTransferEditor: {
      label: 'Stock Transfer Editor',
      description: 'Edit access to StockTransfers',
    },
    stockTransferViewer: {
      label: 'Stock Transfer Viewer',
      description: 'View access to StockTransfers',
    },
    deviceSessionsEditor: {
      label: 'Device Session Editor',
      description: 'Edit access to Device Sessions',
    },
    deviceSessionsViewer: {
      label: 'Device Session Viewer',
      description: 'View access to Device Sessions',
    },
    productCountEditor: {
      label: 'Product Count Editor',
      description: 'Edit access to Product Counts',
    },
    productCountViewer: {
      label: 'Product Count Viewer',
      description: 'View access to Product Counts',
    },
    productValueEditor: {
      label: 'Product Value Editor',
      description: 'Edit access to Product Values',
    },
    productValueViewer: {
      label: 'Product Value Viewer',
      description: 'View access to Product Values',
    },
    registerEditor: {
      label: 'Register Editor',
      description: 'Edit access to Registers',
    },
    registerViewer: {
      label: 'Register Viewer',
      description: 'View access to Registers',
    },
    commissionsEditor: {
      label: 'Commission Editor',
      description: 'Edit access to Commissions',
    },
    commissionsViewer: {
      label: 'Commission Viewer',
      description: 'View access to Commissions',
    },
    transactionsEditor: {
      label: 'Transaction Editor',
      description: 'Edit access to Transactions',
    },
    transactionsViewer: {
      label: 'Transaction Viewer',
      description: 'View access to Transactions',
    },
    priceChangeEditor: {
      label: 'Price Change Editor',
      description: 'Edit access to PriceChanges',
    },
    priceChangeViewer: {
      label: 'Price Change Viewer',
      description: 'View access to PriceChanges',
    },
  },

  iam: {
    title: 'System User Management',
    menu: 'Users',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/modules/home/components/home-page.vue.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default en;
