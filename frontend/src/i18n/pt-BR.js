const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    confirm: 'Confirmar',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    customers: {
      name: 'Customer',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'Customer_exportados',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer salvo com sucesso',
      },
      update: {
        success: 'Customer salvo com sucesso',
      },
      destroy: {
        success: 'Customer deletado com sucesso',
      },
      destroyAll: {
        success: 'Customer(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Customer',
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
        'customerAccountBalance': 'Account Balance',
        'customerCustomField': 'Custom Field',
        'customerDocs': 'Customer Docs',
        'customerLoyaltyPointsRange': 'Loyalty Points',
        'customerLoyaltyPoints': 'Loyalty Points',
        'customerCreditBalanceRange': 'Account Credit Balance',
        'customerCreditBalance': 'Account Credit Balance',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'customerStatus': {
          'active': 'Active',
          'blocked': 'Blocked',
          'suspended': 'Suspended',
        },
      },
      new: {
        title: 'Novo Customer',
      },
      view: {
        title: 'Visualizar Customer',
      },
      importer: {
        title: 'Importar Customers',
        fileName: 'customers_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    suppliers: {
      name: 'Supplier',
      label: 'Suppliers',
      menu: 'Suppliers',
      exporterFileName: 'Supplier_exportados',
      list: {
        menu: 'Suppliers',
        title: 'Suppliers',
      },
      create: {
        success: 'Supplier salvo com sucesso',
      },
      update: {
        success: 'Supplier salvo com sucesso',
      },
      destroy: {
        success: 'Supplier deletado com sucesso',
      },
      destroyAll: {
        success: 'Supplier(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Supplier',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Supplier',
      },
      view: {
        title: 'Visualizar Supplier',
      },
      importer: {
        title: 'Importar Suppliers',
        fileName: 'suppliers_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    staff: {
      name: 'Staff',
      label: 'Staffs',
      menu: 'Staffs',
      exporterFileName: 'Staff_exportados',
      list: {
        menu: 'Staffs',
        title: 'Staffs',
      },
      create: {
        success: 'Staff salvo com sucesso',
      },
      update: {
        success: 'Staff salvo com sucesso',
      },
      destroy: {
        success: 'Staff deletado com sucesso',
      },
      destroyAll: {
        success: 'Staff(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Staff',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Staff',
      },
      view: {
        title: 'Visualizar Staff',
      },
      importer: {
        title: 'Importar Staffs',
        fileName: 'staff_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    products: {
      name: 'Product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'Product_exportados',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product salvo com sucesso',
      },
      update: {
        success: 'Product salvo com sucesso',
      },
      destroy: {
        success: 'Product deletado com sucesso',
      },
      destroyAll: {
        success: 'Product(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Product',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Product',
      },
      view: {
        title: 'Visualizar Product',
      },
      importer: {
        title: 'Importar Products',
        fileName: 'products_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    brands: {
      name: 'Brands',
      label: 'Brands',
      menu: 'Brands',
      exporterFileName: 'Brands_exportados',
      list: {
        menu: 'Brands',
        title: 'Brands',
      },
      create: {
        success: 'Brands salvo com sucesso',
      },
      update: {
        success: 'Brands salvo com sucesso',
      },
      destroy: {
        success: 'Brands deletado com sucesso',
      },
      destroyAll: {
        success: 'Brands(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Brands',
      },
      fields: {
        id: 'Id',
        'brandCover': 'Cover',
        'brandTitle': 'Title',
        'brandDetails': 'Details',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Brands',
      },
      view: {
        title: 'Visualizar Brands',
      },
      importer: {
        title: 'Importar Brands',
        fileName: 'brands_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    categories: {
      name: 'Category',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'Category_exportados',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category salvo com sucesso',
      },
      update: {
        success: 'Category salvo com sucesso',
      },
      destroy: {
        success: 'Category deletado com sucesso',
      },
      destroyAll: {
        success: 'Category(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Category',
      },
      fields: {
        id: 'Id',
        'categoryCover': 'Cover',
        'categoryTitle': 'Title',
        'categoryShortCode': 'Short Code',
        'categoryDetails': 'Details',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Category',
      },
      view: {
        title: 'Visualizar Category',
      },
      importer: {
        title: 'Importar Categories',
        fileName: 'categories_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    expenses: {
      name: 'Expense',
      label: 'Expenses',
      menu: 'Expenses',
      exporterFileName: 'Expense_exportados',
      list: {
        menu: 'Expenses',
        title: 'Expenses',
      },
      create: {
        success: 'Expense salvo com sucesso',
      },
      update: {
        success: 'Expense salvo com sucesso',
      },
      destroy: {
        success: 'Expense deletado com sucesso',
      },
      destroyAll: {
        success: 'Expense(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Expense',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'expensesStatus': {
          'completed': 'Completed',
          'pending': 'Pending',
        },
      },
      new: {
        title: 'Novo Expense',
      },
      view: {
        title: 'Visualizar Expense',
      },
      importer: {
        title: 'Importar Expenses',
        fileName: 'expenses_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    expenseCategory: {
      name: 'Expense Category',
      label: 'Expense Categories',
      menu: 'Expense Categories',
      exporterFileName: 'Expense Category_exportados',
      list: {
        menu: 'Expense Categories',
        title: 'Expense Categories',
      },
      create: {
        success: 'Expense Category salvo com sucesso',
      },
      update: {
        success: 'Expense Category salvo com sucesso',
      },
      destroy: {
        success: 'Expense Category deletado com sucesso',
      },
      destroyAll: {
        success: 'Expense Category(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Expense Category',
      },
      fields: {
        id: 'Id',
        'expCategoryTitle': 'Title',
        'expCategoryDetails': 'Details',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Expense Category',
      },
      view: {
        title: 'Visualizar Expense Category',
      },
      importer: {
        title: 'Importar Expense Categories',
        fileName: 'expenseCategory_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    assets: {
      name: 'Asset',
      label: 'Assets',
      menu: 'Assets',
      exporterFileName: 'Asset_exportados',
      list: {
        menu: 'Assets',
        title: 'Assets',
      },
      create: {
        success: 'Asset salvo com sucesso',
      },
      update: {
        success: 'Asset salvo com sucesso',
      },
      destroy: {
        success: 'Asset deletado com sucesso',
      },
      destroyAll: {
        success: 'Asset(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Asset',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Asset',
      },
      view: {
        title: 'Visualizar Asset',
      },
      importer: {
        title: 'Importar Assets',
        fileName: 'assets_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    devices: {
      name: 'Device',
      label: 'Devices',
      menu: 'Devices',
      exporterFileName: 'Device_exportados',
      list: {
        menu: 'Devices',
        title: 'Devices',
      },
      create: {
        success: 'Device salvo com sucesso',
      },
      update: {
        success: 'Device salvo com sucesso',
      },
      destroy: {
        success: 'Device deletado com sucesso',
      },
      destroyAll: {
        success: 'Device(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Device',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Device',
      },
      view: {
        title: 'Visualizar Device',
      },
      importer: {
        title: 'Importar Devices',
        fileName: 'devices_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    notice: {
      name: 'Notice',
      label: 'Notices',
      menu: 'Notices',
      exporterFileName: 'Notice_exportados',
      list: {
        menu: 'Notices',
        title: 'Notices',
      },
      create: {
        success: 'Notice salvo com sucesso',
      },
      update: {
        success: 'Notice salvo com sucesso',
      },
      destroy: {
        success: 'Notice deletado com sucesso',
      },
      destroyAll: {
        success: 'Notice(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Notice',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'noticeType': {
          'alert': 'Alert',
          'message': 'Message',
          'notification': 'Notification',
        },
      },
      new: {
        title: 'Novo Notice',
      },
      view: {
        title: 'Visualizar Notice',
      },
      importer: {
        title: 'Importar Notices',
        fileName: 'notice_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    sales: {
      name: 'Sale',
      label: 'Sales',
      menu: 'Sales',
      exporterFileName: 'Sale_exportados',
      list: {
        menu: 'Sales',
        title: 'Sales',
      },
      create: {
        success: 'Sale salvo com sucesso',
      },
      update: {
        success: 'Sale salvo com sucesso',
      },
      destroy: {
        success: 'Sale deletado com sucesso',
      },
      destroyAll: {
        success: 'Sale(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Sale',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'salesPaymentStatus': {
          'credit': 'Credit',
          'paid': 'Paid',
        },
      },
      new: {
        title: 'Novo Sale',
      },
      view: {
        title: 'Visualizar Sale',
      },
      importer: {
        title: 'Importar Sales',
        fileName: 'sales_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    purchases: {
      name: 'Purchase',
      label: 'Purchases',
      menu: 'Purchases',
      exporterFileName: 'Purchase_exportados',
      list: {
        menu: 'Purchases',
        title: 'Purchases',
      },
      create: {
        success: 'Purchase salvo com sucesso',
      },
      update: {
        success: 'Purchase salvo com sucesso',
      },
      destroy: {
        success: 'Purchase deletado com sucesso',
      },
      destroyAll: {
        success: 'Purchase(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Purchase',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'purchasePaymentStatus': {
          'paid': 'Paid',
          'pending': 'Pending',
        },
      },
      new: {
        title: 'Novo Purchase',
      },
      view: {
        title: 'Visualizar Purchase',
      },
      importer: {
        title: 'Importar Purchases',
        fileName: 'purchases_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    returns: {
      name: 'Return',
      label: 'Returns',
      menu: 'Returns',
      exporterFileName: 'Return_exportados',
      list: {
        menu: 'Returns',
        title: 'Returns',
      },
      create: {
        success: 'Return salvo com sucesso',
      },
      update: {
        success: 'Return salvo com sucesso',
      },
      destroy: {
        success: 'Return deletado com sucesso',
      },
      destroyAll: {
        success: 'Return(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Return',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'returnsFrom': {
          'purchase': 'Purchase',
          'sale': 'Sale',
        },
      },
      new: {
        title: 'Novo Return',
      },
      view: {
        title: 'Visualizar Return',
      },
      importer: {
        title: 'Importar Returns',
        fileName: 'returns_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    stockAdjustments: {
      name: 'Stock Adjustment',
      label: 'Stock Adjustments',
      menu: 'Stock Adjustments',
      exporterFileName: 'Stock Adjustment_exportados',
      list: {
        menu: 'Stock Adjustments',
        title: 'Stock Adjustments',
      },
      create: {
        success: 'Stock Adjustment salvo com sucesso',
      },
      update: {
        success: 'Stock Adjustment salvo com sucesso',
      },
      destroy: {
        success: 'Stock Adjustment deletado com sucesso',
      },
      destroyAll: {
        success: 'Stock Adjustment(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Stock Adjustment',
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
        'stockAdjustmentClass': 'Adjustment Class',
        'stockAdjustmentLossRange': 'Adjustment Loss',
        'stockAdjustmentLoss': 'Adjustment Loss',
        'stockAdjustmentRecorverdAmountRange': 'Recorverd Amount',
        'stockAdjustmentRecorverdAmount': 'Recorverd Amount',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Stock Adjustment',
      },
      view: {
        title: 'Visualizar Stock Adjustment',
      },
      importer: {
        title: 'Importar Stock Adjustments',
        fileName: 'stockAdjustments_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    units: {
      name: 'Unit',
      label: 'Units',
      menu: 'Units',
      exporterFileName: 'Unit_exportados',
      list: {
        menu: 'Units',
        title: 'Units',
      },
      create: {
        success: 'Unit salvo com sucesso',
      },
      update: {
        success: 'Unit salvo com sucesso',
      },
      destroy: {
        success: 'Unit deletado com sucesso',
      },
      destroyAll: {
        success: 'Unit(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Unit',
      },
      fields: {
        id: 'Id',
        'unitsTitle': 'Title',
        'unitsCode': 'Code',
        'unitsType': 'UnitsType',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'unitsType': {
          'decimal': 'Decimal',
          'integer': 'Integer',
          'none': 'None',
        },
      },
      new: {
        title: 'Novo Unit',
      },
      view: {
        title: 'Visualizar Unit',
      },
      importer: {
        title: 'Importar Units',
        fileName: 'units_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    giftCard: {
      name: 'Gift Card',
      label: 'Gift Cards',
      menu: 'Gift Cards',
      exporterFileName: 'Gift Card_exportados',
      list: {
        menu: 'Gift Cards',
        title: 'Gift Cards',
      },
      create: {
        success: 'Gift Card salvo com sucesso',
      },
      update: {
        success: 'Gift Card salvo com sucesso',
      },
      destroy: {
        success: 'Gift Card deletado com sucesso',
      },
      destroyAll: {
        success: 'Gift Card(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Gift Card',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'giftCardStatus': {
          'Pending': 'Pending',
          'Used': 'Used',
        },
      },
      new: {
        title: 'Novo Gift Card',
      },
      view: {
        title: 'Visualizar Gift Card',
      },
      importer: {
        title: 'Importar Gift Cards',
        fileName: 'giftCard_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    coupon: {
      name: 'Coupon',
      label: 'Coupons',
      menu: 'Coupons',
      exporterFileName: 'Coupon_exportados',
      list: {
        menu: 'Coupons',
        title: 'Coupons',
      },
      create: {
        success: 'Coupon salvo com sucesso',
      },
      update: {
        success: 'Coupon salvo com sucesso',
      },
      destroy: {
        success: 'Coupon deletado com sucesso',
      },
      destroyAll: {
        success: 'Coupon(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Coupon',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Coupon',
      },
      view: {
        title: 'Visualizar Coupon',
      },
      importer: {
        title: 'Importar Coupons',
        fileName: 'coupon_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    damages: {
      name: 'Damage',
      label: 'Damages',
      menu: 'Damages',
      exporterFileName: 'Damage_exportados',
      list: {
        menu: 'Damages',
        title: 'Damages',
      },
      create: {
        success: 'Damage salvo com sucesso',
      },
      update: {
        success: 'Damage salvo com sucesso',
      },
      destroy: {
        success: 'Damage deletado com sucesso',
      },
      destroyAll: {
        success: 'Damage(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Damage',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Damage',
      },
      view: {
        title: 'Visualizar Damage',
      },
      importer: {
        title: 'Importar Damages',
        fileName: 'damages_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    leave: {
      name: 'Leave',
      label: 'Leaves',
      menu: 'Leaves',
      exporterFileName: 'Leave_exportados',
      list: {
        menu: 'Leaves',
        title: 'Leaves',
      },
      create: {
        success: 'Leave salvo com sucesso',
      },
      update: {
        success: 'Leave salvo com sucesso',
      },
      destroy: {
        success: 'Leave deletado com sucesso',
      },
      destroyAll: {
        success: 'Leave(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Leave',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Leave',
      },
      view: {
        title: 'Visualizar Leave',
      },
      importer: {
        title: 'Importar Leaves',
        fileName: 'leave_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    leaveType: {
      name: 'Leave Type',
      label: 'Leave Types',
      menu: 'Leave Types',
      exporterFileName: 'Leave Type_exportados',
      list: {
        menu: 'Leave Types',
        title: 'Leave Types',
      },
      create: {
        success: 'Leave Type salvo com sucesso',
      },
      update: {
        success: 'Leave Type salvo com sucesso',
      },
      destroy: {
        success: 'Leave Type deletado com sucesso',
      },
      destroyAll: {
        success: 'Leave Type(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Leave Type',
      },
      fields: {
        id: 'Id',
        'leaveTypeTitle': 'Title',
        'leaveTypeDetails': 'Details',
        'leaveCategory': 'Category',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Leave Type',
      },
      view: {
        title: 'Visualizar Leave Type',
      },
      importer: {
        title: 'Importar Leave Types',
        fileName: 'leaveType_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    allowanceAndDeduction: {
      name: 'Allowance And Deduction',
      label: 'Allowances And Deductions',
      menu: 'Allowances And Deductions',
      exporterFileName: 'Allowance And Deduction_exportados',
      list: {
        menu: 'Allowances And Deductions',
        title: 'Allowances And Deductions',
      },
      create: {
        success: 'Allowance And Deduction salvo com sucesso',
      },
      update: {
        success: 'Allowance And Deduction salvo com sucesso',
      },
      destroy: {
        success: 'Allowance And Deduction deletado com sucesso',
      },
      destroyAll: {
        success: 'Allowance And Deduction(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Allowance And Deduction',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'adType': {
          'Allowance': 'Allowance',
          'Deduction': 'Deduction',
        },
      },
      new: {
        title: 'Novo Allowance And Deduction',
      },
      view: {
        title: 'Visualizar Allowance And Deduction',
      },
      importer: {
        title: 'Importar Allowances And Deductions',
        fileName: 'allowanceAndDeduction_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    payroll: {
      name: 'Payroll',
      label: 'Payrolls',
      menu: 'Payrolls',
      exporterFileName: 'Payroll_exportados',
      list: {
        menu: 'Payrolls',
        title: 'Payrolls',
      },
      create: {
        success: 'Payroll salvo com sucesso',
      },
      update: {
        success: 'Payroll salvo com sucesso',
      },
      destroy: {
        success: 'Payroll deletado com sucesso',
      },
      destroyAll: {
        success: 'Payroll(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Payroll',
      },
      fields: {
        id: 'Id',
        'payrollRef': 'Ref',
        'payrollStaff': 'Staff',
        'payrollSalaryRange': 'Salary',
        'payrollSalary': 'Salary',
        'payrollAd': 'Allowance and Deductions',
        'payrollDocs': 'Docs',
        'payrollWorkingType': 'Working Type',
        'payrollWorkingTimeRange': 'Working Time',
        'payrollWorkingTime': 'Working Time',
        'payrollStatus': 'Status',
        'payrollDateRange': 'Date',
        'payrollDate': 'Date',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Payroll',
      },
      view: {
        title: 'Visualizar Payroll',
      },
      importer: {
        title: 'Importar Payrolls',
        fileName: 'payroll_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    attendance: {
      name: 'Attendance',
      label: 'Attendances',
      menu: 'Attendances',
      exporterFileName: 'Attendance_exportados',
      list: {
        menu: 'Attendances',
        title: 'Attendances',
      },
      create: {
        success: 'Attendance salvo com sucesso',
      },
      update: {
        success: 'Attendance salvo com sucesso',
      },
      destroy: {
        success: 'Attendance deletado com sucesso',
      },
      destroyAll: {
        success: 'Attendance(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Attendance',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Attendance',
      },
      view: {
        title: 'Visualizar Attendance',
      },
      importer: {
        title: 'Importar Attendances',
        fileName: 'attendance_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    taxClass: {
      name: 'Tax Class',
      label: 'Tax Classes',
      menu: 'Tax Classes',
      exporterFileName: 'Tax Class_exportados',
      list: {
        menu: 'Tax Classes',
        title: 'Tax Classes',
      },
      create: {
        success: 'Tax Class salvo com sucesso',
      },
      update: {
        success: 'Tax Class salvo com sucesso',
      },
      destroy: {
        success: 'Tax Class deletado com sucesso',
      },
      destroyAll: {
        success: 'Tax Class(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Tax Class',
      },
      fields: {
        id: 'Id',
        'taxClassName': 'Class Name',
        'taxClassPercentageRange': 'Class Percentage',
        'taxClassPercentage': 'Class Percentage',
        'taxClassDetails': 'Class Details',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Tax Class',
      },
      view: {
        title: 'Visualizar Tax Class',
      },
      importer: {
        title: 'Importar Tax Classes',
        fileName: 'taxClass_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    todo: {
      name: 'Todo',
      label: 'Todos',
      menu: 'Todos',
      exporterFileName: 'Todo_exportados',
      list: {
        menu: 'Todos',
        title: 'Todos',
      },
      create: {
        success: 'Todo salvo com sucesso',
      },
      update: {
        success: 'Todo salvo com sucesso',
      },
      destroy: {
        success: 'Todo deletado com sucesso',
      },
      destroyAll: {
        success: 'Todo(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Todo',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'todoStatus': {
          'New': 'New',
          'Progress': 'Progress',
          'Done': 'Done',
        },
      },
      new: {
        title: 'Novo Todo',
      },
      view: {
        title: 'Visualizar Todo',
      },
      importer: {
        title: 'Importar Todos',
        fileName: 'todo_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    documents: {
      name: 'Document',
      label: 'Documents',
      menu: 'Documents',
      exporterFileName: 'Document_exportados',
      list: {
        menu: 'Documents',
        title: 'Documents',
      },
      create: {
        success: 'Document salvo com sucesso',
      },
      update: {
        success: 'Document salvo com sucesso',
      },
      destroy: {
        success: 'Document deletado com sucesso',
      },
      destroyAll: {
        success: 'Document(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Document',
      },
      fields: {
        id: 'Id',
        'documentTitle': 'Title',
        'documentDetails': 'Details',
        'documentType': 'Type',
        'docStall': 'Stall',
        'documentFile': 'File',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Document',
      },
      view: {
        title: 'Visualizar Document',
      },
      importer: {
        title: 'Importar Documents',
        fileName: 'documents_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    paymentMethods: {
      name: 'Payment Method',
      label: 'Payment Methods',
      menu: 'Payment Methods',
      exporterFileName: 'Payment Method_exportados',
      list: {
        menu: 'Payment Methods',
        title: 'Payment Methods',
      },
      create: {
        success: 'Payment Method salvo com sucesso',
      },
      update: {
        success: 'Payment Method salvo com sucesso',
      },
      destroy: {
        success: 'Payment Method deletado com sucesso',
      },
      destroyAll: {
        success: 'Payment Method(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Payment Method',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'paymentMethodType': {
          'Online': 'Online',
          'Offline': 'Offline',
        },
      },
      new: {
        title: 'Novo Payment Method',
      },
      view: {
        title: 'Visualizar Payment Method',
      },
      importer: {
        title: 'Importar Payment Methods',
        fileName: 'paymentMethods_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    documentTypes: {
      name: 'Document Type',
      label: 'Document Types',
      menu: 'Document Types',
      exporterFileName: 'Document Type_exportados',
      list: {
        menu: 'Document Types',
        title: 'Document Types',
      },
      create: {
        success: 'Document Type salvo com sucesso',
      },
      update: {
        success: 'Document Type salvo com sucesso',
      },
      destroy: {
        success: 'Document Type deletado com sucesso',
      },
      destroyAll: {
        success: 'Document Type(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Document Type',
      },
      fields: {
        id: 'Id',
        'documentTypeTitle': 'Title',
        'documentTypeNote': 'Note',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Document Type',
      },
      view: {
        title: 'Visualizar Document Type',
      },
      importer: {
        title: 'Importar Document Types',
        fileName: 'documentTypes_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    memos: {
      name: 'Memo',
      label: 'Memos',
      menu: 'Memos',
      exporterFileName: 'Memo_exportados',
      list: {
        menu: 'Memos',
        title: 'Memos',
      },
      create: {
        success: 'Memo salvo com sucesso',
      },
      update: {
        success: 'Memo salvo com sucesso',
      },
      destroy: {
        success: 'Memo deletado com sucesso',
      },
      destroyAll: {
        success: 'Memo(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Memo',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Memo',
      },
      view: {
        title: 'Visualizar Memo',
      },
      importer: {
        title: 'Importar Memos',
        fileName: 'memos_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    currency: {
      name: 'Currency',
      label: 'Currencies',
      menu: 'Currencies',
      exporterFileName: 'Currency_exportados',
      list: {
        menu: 'Currencies',
        title: 'Currencies',
      },
      create: {
        success: 'Currency salvo com sucesso',
      },
      update: {
        success: 'Currency salvo com sucesso',
      },
      destroy: {
        success: 'Currency deletado com sucesso',
      },
      destroyAll: {
        success: 'Currency(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Currency',
      },
      fields: {
        id: 'Id',
        'currencyTitle': 'CurrencyTitle',
        'currencyCode': 'Code',
        'currencySign': 'Sign',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Currency',
      },
      view: {
        title: 'Visualizar Currency',
      },
      importer: {
        title: 'Importar Currencies',
        fileName: 'currency_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    holiday: {
      name: 'Holiday',
      label: 'Holidays',
      menu: 'Holidays',
      exporterFileName: 'Holiday_exportados',
      list: {
        menu: 'Holidays',
        title: 'Holidays',
      },
      create: {
        success: 'Holiday salvo com sucesso',
      },
      update: {
        success: 'Holiday salvo com sucesso',
      },
      destroy: {
        success: 'Holiday deletado com sucesso',
      },
      destroyAll: {
        success: 'Holiday(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Holiday',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Holiday',
      },
      view: {
        title: 'Visualizar Holiday',
      },
      importer: {
        title: 'Importar Holidays',
        fileName: 'holiday_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    stall: {
      name: 'Stall',
      label: 'Stalls',
      menu: 'Stalls',
      exporterFileName: 'Stall_exportados',
      list: {
        menu: 'Stalls',
        title: 'Stalls',
      },
      create: {
        success: 'Stall salvo com sucesso',
      },
      update: {
        success: 'Stall salvo com sucesso',
      },
      destroy: {
        success: 'Stall deletado com sucesso',
      },
      destroyAll: {
        success: 'Stall(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Stall',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Stall',
      },
      view: {
        title: 'Visualizar Stall',
      },
      importer: {
        title: 'Importar Stalls',
        fileName: 'stall_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    variation: {
      name: 'Variation',
      label: 'Variations',
      menu: 'Variations',
      exporterFileName: 'Variation_exportados',
      list: {
        menu: 'Variations',
        title: 'Variations',
      },
      create: {
        success: 'Variation salvo com sucesso',
      },
      update: {
        success: 'Variation salvo com sucesso',
      },
      destroy: {
        success: 'Variation deletado com sucesso',
      },
      destroyAll: {
        success: 'Variation(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Variation',
      },
      fields: {
        id: 'Id',
        'variationName': 'Name',
        'variationValues': 'Values',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Variation',
      },
      view: {
        title: 'Visualizar Variation',
      },
      importer: {
        title: 'Importar Variations',
        fileName: 'variation_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    productLogs: {
      name: 'Product Log',
      label: 'Product Logs',
      menu: 'Product Logs',
      exporterFileName: 'Product Log_exportados',
      list: {
        menu: 'Product Logs',
        title: 'Product Logs',
      },
      create: {
        success: 'Product Log salvo com sucesso',
      },
      update: {
        success: 'Product Log salvo com sucesso',
      },
      destroy: {
        success: 'Product Log deletado com sucesso',
      },
      destroyAll: {
        success: 'Product Log(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Product Log',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Product Log',
      },
      view: {
        title: 'Visualizar Product Log',
      },
      importer: {
        title: 'Importar Product Logs',
        fileName: 'productLogs_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    stockTransfer: {
      name: 'Stock Transfer',
      label: 'StockTransfers',
      menu: 'StockTransfers',
      exporterFileName: 'Stock Transfer_exportados',
      list: {
        menu: 'StockTransfers',
        title: 'StockTransfers',
      },
      create: {
        success: 'Stock Transfer salvo com sucesso',
      },
      update: {
        success: 'Stock Transfer salvo com sucesso',
      },
      destroy: {
        success: 'Stock Transfer deletado com sucesso',
      },
      destroyAll: {
        success: 'Stock Transfer(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Stock Transfer',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'transferStatus': {
          'Done': 'Done',
          'Pending': 'Pending',
          'Active': 'Active',
        },
      },
      new: {
        title: 'Novo Stock Transfer',
      },
      view: {
        title: 'Visualizar Stock Transfer',
      },
      importer: {
        title: 'Importar StockTransfers',
        fileName: 'stockTransfer_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    deviceSessions: {
      name: 'Device Session',
      label: 'Device Sessions',
      menu: 'Device Sessions',
      exporterFileName: 'Device Session_exportados',
      list: {
        menu: 'Device Sessions',
        title: 'Device Sessions',
      },
      create: {
        success: 'Device Session salvo com sucesso',
      },
      update: {
        success: 'Device Session salvo com sucesso',
      },
      destroy: {
        success: 'Device Session deletado com sucesso',
      },
      destroyAll: {
        success: 'Device Session(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Device Session',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Device Session',
      },
      view: {
        title: 'Visualizar Device Session',
      },
      importer: {
        title: 'Importar Device Sessions',
        fileName: 'deviceSessions_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    productCount: {
      name: 'Product Count',
      label: 'Product Counts',
      menu: 'Product Counts',
      exporterFileName: 'Product Count_exportados',
      list: {
        menu: 'Product Counts',
        title: 'Product Counts',
      },
      create: {
        success: 'Product Count salvo com sucesso',
      },
      update: {
        success: 'Product Count salvo com sucesso',
      },
      destroy: {
        success: 'Product Count deletado com sucesso',
      },
      destroyAll: {
        success: 'Product Count(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Product Count',
      },
      fields: {
        id: 'Id',
        'countRange': 'Count',
        'count': 'Count',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Product Count',
      },
      view: {
        title: 'Visualizar Product Count',
      },
      importer: {
        title: 'Importar Product Counts',
        fileName: 'productCount_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    productValue: {
      name: 'Product Value',
      label: 'Product Values',
      menu: 'Product Values',
      exporterFileName: 'Product Value_exportados',
      list: {
        menu: 'Product Values',
        title: 'Product Values',
      },
      create: {
        success: 'Product Value salvo com sucesso',
      },
      update: {
        success: 'Product Value salvo com sucesso',
      },
      destroy: {
        success: 'Product Value deletado com sucesso',
      },
      destroyAll: {
        success: 'Product Value(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Product Value',
      },
      fields: {
        id: 'Id',
        'valueRange': 'Value',
        'value': 'Value',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Product Value',
      },
      view: {
        title: 'Visualizar Product Value',
      },
      importer: {
        title: 'Importar Product Values',
        fileName: 'productValue_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    register: {
      name: 'Register',
      label: 'Registers',
      menu: 'Registers',
      exporterFileName: 'Register_exportados',
      list: {
        menu: 'Registers',
        title: 'Registers',
      },
      create: {
        success: 'Register salvo com sucesso',
      },
      update: {
        success: 'Register salvo com sucesso',
      },
      destroy: {
        success: 'Register deletado com sucesso',
      },
      destroyAll: {
        success: 'Register(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Register',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Register',
      },
      view: {
        title: 'Visualizar Register',
      },
      importer: {
        title: 'Importar Registers',
        fileName: 'register_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    commissions: {
      name: 'Commission',
      label: 'Commissions',
      menu: 'Commissions',
      exporterFileName: 'Commission_exportados',
      list: {
        menu: 'Commissions',
        title: 'Commissions',
      },
      create: {
        success: 'Commission salvo com sucesso',
      },
      update: {
        success: 'Commission salvo com sucesso',
      },
      destroy: {
        success: 'Commission deletado com sucesso',
      },
      destroyAll: {
        success: 'Commission(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Commission',
      },
      fields: {
        id: 'Id',
        'commStaff': 'Staff',
        'commSale': 'Sales',
        'commStall': 'Stall',
        'commRegister': 'Register',
        'commAmountRange': 'Amount',
        'commAmount': 'Amount',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Commission',
      },
      view: {
        title: 'Visualizar Commission',
      },
      importer: {
        title: 'Importar Commissions',
        fileName: 'commissions_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    transactions: {
      name: 'Transaction',
      label: 'Transactions',
      menu: 'Transactions',
      exporterFileName: 'Transaction_exportados',
      list: {
        menu: 'Transactions',
        title: 'Transactions',
      },
      create: {
        success: 'Transaction salvo com sucesso',
      },
      update: {
        success: 'Transaction salvo com sucesso',
      },
      destroy: {
        success: 'Transaction deletado com sucesso',
      },
      destroyAll: {
        success: 'Transaction(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Transaction',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Transaction',
      },
      view: {
        title: 'Visualizar Transaction',
      },
      importer: {
        title: 'Importar Transactions',
        fileName: 'transactions_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    priceChange: {
      name: 'Price Change',
      label: 'PriceChanges',
      menu: 'PriceChanges',
      exporterFileName: 'Price Change_exportados',
      list: {
        menu: 'PriceChanges',
        title: 'PriceChanges',
      },
      create: {
        success: 'Price Change salvo com sucesso',
      },
      update: {
        success: 'Price Change salvo com sucesso',
      },
      destroy: {
        success: 'Price Change deletado com sucesso',
      },
      destroyAll: {
        success: 'Price Change(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Price Change',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Price Change',
      },
      view: {
        title: 'Visualizar Price Change',
      },
      importer: {
        title: 'Importar PriceChanges',
        fileName: 'priceChange_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    customersEditor: {
      label: 'Editor de Customers',
      description: 'Acesso de edição aos Customers',
    },
    customersViewer: {
      label: 'Visualizador de Customers',
      description: 'Acesso de visualização aos Customers',
    },
    suppliersEditor: {
      label: 'Editor de Suppliers',
      description: 'Acesso de edição aos Suppliers',
    },
    suppliersViewer: {
      label: 'Visualizador de Suppliers',
      description: 'Acesso de visualização aos Suppliers',
    },
    staffEditor: {
      label: 'Editor de Staffs',
      description: 'Acesso de edição aos Staffs',
    },
    staffViewer: {
      label: 'Visualizador de Staffs',
      description: 'Acesso de visualização aos Staffs',
    },
    productsEditor: {
      label: 'Editor de Products',
      description: 'Acesso de edição aos Products',
    },
    productsViewer: {
      label: 'Visualizador de Products',
      description: 'Acesso de visualização aos Products',
    },
    brandsEditor: {
      label: 'Editor de Brands',
      description: 'Acesso de edição aos Brands',
    },
    brandsViewer: {
      label: 'Visualizador de Brands',
      description: 'Acesso de visualização aos Brands',
    },
    categoriesEditor: {
      label: 'Editor de Categories',
      description: 'Acesso de edição aos Categories',
    },
    categoriesViewer: {
      label: 'Visualizador de Categories',
      description: 'Acesso de visualização aos Categories',
    },
    expensesEditor: {
      label: 'Editor de Expenses',
      description: 'Acesso de edição aos Expenses',
    },
    expensesViewer: {
      label: 'Visualizador de Expenses',
      description: 'Acesso de visualização aos Expenses',
    },
    expenseCategoryEditor: {
      label: 'Editor de Expense Categories',
      description: 'Acesso de edição aos Expense Categories',
    },
    expenseCategoryViewer: {
      label: 'Visualizador de Expense Categories',
      description: 'Acesso de visualização aos Expense Categories',
    },
    assetsEditor: {
      label: 'Editor de Assets',
      description: 'Acesso de edição aos Assets',
    },
    assetsViewer: {
      label: 'Visualizador de Assets',
      description: 'Acesso de visualização aos Assets',
    },
    devicesEditor: {
      label: 'Editor de Devices',
      description: 'Acesso de edição aos Devices',
    },
    devicesViewer: {
      label: 'Visualizador de Devices',
      description: 'Acesso de visualização aos Devices',
    },
    noticeEditor: {
      label: 'Editor de Notices',
      description: 'Acesso de edição aos Notices',
    },
    noticeViewer: {
      label: 'Visualizador de Notices',
      description: 'Acesso de visualização aos Notices',
    },
    salesEditor: {
      label: 'Editor de Sales',
      description: 'Acesso de edição aos Sales',
    },
    salesViewer: {
      label: 'Visualizador de Sales',
      description: 'Acesso de visualização aos Sales',
    },
    purchasesEditor: {
      label: 'Editor de Purchases',
      description: 'Acesso de edição aos Purchases',
    },
    purchasesViewer: {
      label: 'Visualizador de Purchases',
      description: 'Acesso de visualização aos Purchases',
    },
    returnsEditor: {
      label: 'Editor de Returns',
      description: 'Acesso de edição aos Returns',
    },
    returnsViewer: {
      label: 'Visualizador de Returns',
      description: 'Acesso de visualização aos Returns',
    },
    stockAdjustmentsEditor: {
      label: 'Editor de Stock Adjustments',
      description: 'Acesso de edição aos Stock Adjustments',
    },
    stockAdjustmentsViewer: {
      label: 'Visualizador de Stock Adjustments',
      description: 'Acesso de visualização aos Stock Adjustments',
    },
    unitsEditor: {
      label: 'Editor de Units',
      description: 'Acesso de edição aos Units',
    },
    unitsViewer: {
      label: 'Visualizador de Units',
      description: 'Acesso de visualização aos Units',
    },
    giftCardEditor: {
      label: 'Editor de Gift Cards',
      description: 'Acesso de edição aos Gift Cards',
    },
    giftCardViewer: {
      label: 'Visualizador de Gift Cards',
      description: 'Acesso de visualização aos Gift Cards',
    },
    couponEditor: {
      label: 'Editor de Coupons',
      description: 'Acesso de edição aos Coupons',
    },
    couponViewer: {
      label: 'Visualizador de Coupons',
      description: 'Acesso de visualização aos Coupons',
    },
    damagesEditor: {
      label: 'Editor de Damages',
      description: 'Acesso de edição aos Damages',
    },
    damagesViewer: {
      label: 'Visualizador de Damages',
      description: 'Acesso de visualização aos Damages',
    },
    leaveEditor: {
      label: 'Editor de Leaves',
      description: 'Acesso de edição aos Leaves',
    },
    leaveViewer: {
      label: 'Visualizador de Leaves',
      description: 'Acesso de visualização aos Leaves',
    },
    leaveTypeEditor: {
      label: 'Editor de Leave Types',
      description: 'Acesso de edição aos Leave Types',
    },
    leaveTypeViewer: {
      label: 'Visualizador de Leave Types',
      description: 'Acesso de visualização aos Leave Types',
    },
    allowanceAndDeductionEditor: {
      label: 'Editor de Allowances And Deductions',
      description: 'Acesso de edição aos Allowances And Deductions',
    },
    allowanceAndDeductionViewer: {
      label: 'Visualizador de Allowances And Deductions',
      description: 'Acesso de visualização aos Allowances And Deductions',
    },
    payrollEditor: {
      label: 'Editor de Payrolls',
      description: 'Acesso de edição aos Payrolls',
    },
    payrollViewer: {
      label: 'Visualizador de Payrolls',
      description: 'Acesso de visualização aos Payrolls',
    },
    attendanceEditor: {
      label: 'Editor de Attendances',
      description: 'Acesso de edição aos Attendances',
    },
    attendanceViewer: {
      label: 'Visualizador de Attendances',
      description: 'Acesso de visualização aos Attendances',
    },
    taxClassEditor: {
      label: 'Editor de Tax Classes',
      description: 'Acesso de edição aos Tax Classes',
    },
    taxClassViewer: {
      label: 'Visualizador de Tax Classes',
      description: 'Acesso de visualização aos Tax Classes',
    },
    todoEditor: {
      label: 'Editor de Todos',
      description: 'Acesso de edição aos Todos',
    },
    todoViewer: {
      label: 'Visualizador de Todos',
      description: 'Acesso de visualização aos Todos',
    },
    documentsEditor: {
      label: 'Editor de Documents',
      description: 'Acesso de edição aos Documents',
    },
    documentsViewer: {
      label: 'Visualizador de Documents',
      description: 'Acesso de visualização aos Documents',
    },
    paymentMethodsEditor: {
      label: 'Editor de Payment Methods',
      description: 'Acesso de edição aos Payment Methods',
    },
    paymentMethodsViewer: {
      label: 'Visualizador de Payment Methods',
      description: 'Acesso de visualização aos Payment Methods',
    },
    documentTypesEditor: {
      label: 'Editor de Document Types',
      description: 'Acesso de edição aos Document Types',
    },
    documentTypesViewer: {
      label: 'Visualizador de Document Types',
      description: 'Acesso de visualização aos Document Types',
    },
    memosEditor: {
      label: 'Editor de Memos',
      description: 'Acesso de edição aos Memos',
    },
    memosViewer: {
      label: 'Visualizador de Memos',
      description: 'Acesso de visualização aos Memos',
    },
    currencyEditor: {
      label: 'Editor de Currencies',
      description: 'Acesso de edição aos Currencies',
    },
    currencyViewer: {
      label: 'Visualizador de Currencies',
      description: 'Acesso de visualização aos Currencies',
    },
    holidayEditor: {
      label: 'Editor de Holidays',
      description: 'Acesso de edição aos Holidays',
    },
    holidayViewer: {
      label: 'Visualizador de Holidays',
      description: 'Acesso de visualização aos Holidays',
    },
    stallEditor: {
      label: 'Editor de Stalls',
      description: 'Acesso de edição aos Stalls',
    },
    stallViewer: {
      label: 'Visualizador de Stalls',
      description: 'Acesso de visualização aos Stalls',
    },
    variationEditor: {
      label: 'Editor de Variations',
      description: 'Acesso de edição aos Variations',
    },
    variationViewer: {
      label: 'Visualizador de Variations',
      description: 'Acesso de visualização aos Variations',
    },
    productLogsEditor: {
      label: 'Editor de Product Logs',
      description: 'Acesso de edição aos Product Logs',
    },
    productLogsViewer: {
      label: 'Visualizador de Product Logs',
      description: 'Acesso de visualização aos Product Logs',
    },
    stockTransferEditor: {
      label: 'Editor de StockTransfers',
      description: 'Acesso de edição aos StockTransfers',
    },
    stockTransferViewer: {
      label: 'Visualizador de StockTransfers',
      description: 'Acesso de visualização aos StockTransfers',
    },
    deviceSessionsEditor: {
      label: 'Editor de Device Sessions',
      description: 'Acesso de edição aos Device Sessions',
    },
    deviceSessionsViewer: {
      label: 'Visualizador de Device Sessions',
      description: 'Acesso de visualização aos Device Sessions',
    },
    productCountEditor: {
      label: 'Editor de Product Counts',
      description: 'Acesso de edição aos Product Counts',
    },
    productCountViewer: {
      label: 'Visualizador de Product Counts',
      description: 'Acesso de visualização aos Product Counts',
    },
    productValueEditor: {
      label: 'Editor de Product Values',
      description: 'Acesso de edição aos Product Values',
    },
    productValueViewer: {
      label: 'Visualizador de Product Values',
      description: 'Acesso de visualização aos Product Values',
    },
    registerEditor: {
      label: 'Editor de Registers',
      description: 'Acesso de edição aos Registers',
    },
    registerViewer: {
      label: 'Visualizador de Registers',
      description: 'Acesso de visualização aos Registers',
    },
    commissionsEditor: {
      label: 'Editor de Commissions',
      description: 'Acesso de edição aos Commissions',
    },
    commissionsViewer: {
      label: 'Visualizador de Commissions',
      description: 'Acesso de visualização aos Commissions',
    },
    transactionsEditor: {
      label: 'Editor de Transactions',
      description: 'Acesso de edição aos Transactions',
    },
    transactionsViewer: {
      label: 'Visualizador de Transactions',
      description: 'Acesso de visualização aos Transactions',
    },
    priceChangeEditor: {
      label: 'Editor de PriceChanges',
      description: 'Acesso de edição aos PriceChanges',
    },
    priceChangeViewer: {
      label: 'Visualizador de PriceChanges',
      description: 'Acesso de visualização aos PriceChanges',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/modules/home/components/home-page.vue.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      invalid: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Sua conta está desativada',
    'auth/user-not-found': `Desculpe, não reconhecemos suas credenciais`,
    'auth/wrong-password': `Desculpe, não reconhecemos suas credenciais`,
    'auth/weak-password': 'Esta senha é muito fraca',
    'auth/email-already-in-use':
      'O email já está sendo usado',
    'auth/invalid-email':
      'Por favor forneça um email válido',
    'auth/account-exists-with-different-credential':
      'O email já está em uso para um método de autenticação diferente.',
    'auth/credential-already-in-use':
      'Credenciais já estão em uso',
  },
};

export default ptBR;
