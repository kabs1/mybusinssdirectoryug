const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Sales = require('../models/sales');
const AuditLogRepository = require('./auditLogRepository');

class SalesRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Sales().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Sales().collectionName}/${record.id}`),
      record,
      options,
    );

    await this._auditLogs(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    await this.refreshTwoWayRelations(record, options);

    return record;
  }

  async update(id, data, options) {
    const record = {
      id,
      ...new Sales().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Sales().collectionName}/${record.id}`),
      record,
      options,
    );

    await this._auditLogs(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    await this.refreshTwoWayRelations(record, options);
    return record;
  }

  async destroy(id, options) {
    await AbstractEntityRepository.executeOrAddToBatch(
      'delete',
      admin
        .firestore()
        .doc(`${new Sales().collectionName}/${id}`),
      null,
      options,
    );

    await this._auditLogs(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await this.destroyFromRelations(id, options);
  }

  async count(filter) {
    let chain = admin
      .firestore()
      .collection(new Sales().collectionName);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  async refreshTwoWayRelations(record, options) {

  }

  async destroyFromRelations(id, options) {
    await this.destroyRelationToMany(
      id,
      'coupon',
      'couponSalesUsed',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'productLogs',
      'productLogSaleRef',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'register',
      'registerSaleRef',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'commissions',
      'commSale',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('sales', id);
    return this.populate(record);
  }

  async findAndCountAll(
    {
      requestedAttributes,
      filter,
      limit,
      offset,
      orderBy,
    } = {
      requestedAttributes: null,
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
  ) {
    const query = FirebaseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.id) {
        query.appendId('id', filter.id);
      }

      if (filter.salesInvoiceNoRange) {
        query.appendRange(
          'salesInvoiceNo',
          filter.salesInvoiceNoRange,
        );
      }

      if (filter.salesCustomer) {
        query.appendId('salesCustomer', filter.salesCustomer);
      }

      if (filter.salesPaymentStatus) {
        query.appendEqual('salesPaymentStatus', filter.salesPaymentStatus);
      }

      if (filter.saleDevice) {
        query.appendId('saleDevice', filter.saleDevice);
      }

      if (filter.giftCard) {
        query.appendId('giftCard', filter.giftCard);
      }

      if (filter.salesStall) {
        query.appendId('salesStall', filter.salesStall);
      }

      if (filter.salesRegister) {
        query.appendId('salesRegister', filter.salesRegister);
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const collection = await admin
      .firestore()
      .collection(`sales`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'salesInvoiceNo_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendEqual('salesInvoiceNo', search);
    }

    const collection = await admin
      .firestore()
      .collection(`sales`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['salesInvoiceNo'],
    }));
  }

  async populateAll(records) {
    return await Promise.all(
      records.map((record) => this.populate(record)),
    );
  }

  async populate(record) {
    if (!record) {
      return record;
    }

    record.salesCustomer = await this.findRelation(
      'customers',
      record.salesCustomer,
    );

    record.saleDevice = await this.findRelation(
      'devices',
      record.saleDevice,
    );

    record.giftCard = await this.findRelation(
      'giftCard',
      record.giftCard,
    );

    record.salesCoupon = await this.findRelation(
      'coupon',
      record.salesCoupon,
    );

    record.salesStall = await this.findRelation(
      'stall',
      record.salesStall,
    );

    record.salesRegister = await this.findRelation(
      'register',
      record.salesRegister,
    );

    record.salesProducts =
      (await this.findRelation('products', record.salesProducts)) ||
      [];

    record.saleReturnsProducts =
      (await this.findRelation('products', record.saleReturnsProducts)) ||
      [];

    record.saleReturnsUnits =
      (await this.findRelation('productCount', record.saleReturnsUnits)) ||
      [];

    record.salesProductsCount =
      (await this.findRelation('productCount', record.salesProductsCount)) ||
      [];

    record.salesProductsValue =
      (await this.findRelation('productValue', record.salesProductsValue)) ||
      [];

    record.salesPaymentMethod =
      (await this.findRelation('paymentMethods', record.salesPaymentMethod)) ||
      [];

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Sales().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = SalesRepository;
