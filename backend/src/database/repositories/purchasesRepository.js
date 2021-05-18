const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Purchases = require('../models/purchases');
const AuditLogRepository = require('./auditLogRepository');

class PurchasesRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Purchases().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Purchases().collectionName}/${record.id}`),
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
      ...new Purchases().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Purchases().collectionName}/${record.id}`),
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
        .doc(`${new Purchases().collectionName}/${id}`),
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
      .collection(new Purchases().collectionName);

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
      'productLogs',
      'productLogPurchaseRef',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('purchases', id);
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

      if (filter.purchasesRef) {
        query.appendIlike('purchasesRef', filter.purchasesRef);
      }

      if (filter.purchaseProduct) {
        query.appendId('purchaseProduct', filter.purchaseProduct);
      }

      if (filter.purchaseSupplier) {
        query.appendId('purchaseSupplier', filter.purchaseSupplier);
      }

      if (filter.purchasePaymentStatus) {
        query.appendEqual('purchasePaymentStatus', filter.purchasePaymentStatus);
      }

      if (filter.purchaseTotalAmountRange) {
        query.appendRange(
          'purchaseTotalAmount',
          filter.purchaseTotalAmountRange,
        );
      }

      if (filter.purchaseStall) {
        query.appendId('purchaseStall', filter.purchaseStall);
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
      .collection(`purchases`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'purchasesRef_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('purchasesRef', search);
    }

    const collection = await admin
      .firestore()
      .collection(`purchases`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['purchasesRef'],
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

    record.purchaseProduct = await this.findRelation(
      'products',
      record.purchaseProduct,
    );

    record.purchaseSupplier = await this.findRelation(
      'suppliers',
      record.purchaseSupplier,
    );

    record.purchaseStall = await this.findRelation(
      'stall',
      record.purchaseStall,
    );

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Purchases().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = PurchasesRepository;
