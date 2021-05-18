const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const StockAdjustments = require('../models/stockAdjustments');
const AuditLogRepository = require('./auditLogRepository');

class StockAdjustmentsRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new StockAdjustments().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new StockAdjustments().collectionName}/${record.id}`),
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
      ...new StockAdjustments().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new StockAdjustments().collectionName}/${record.id}`),
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
        .doc(`${new StockAdjustments().collectionName}/${id}`),
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
      .collection(new StockAdjustments().collectionName);

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
      'productLogAdjustRef',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('stockAdjustments', id);
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

      if (filter.stockAdjustmentRef) {
        query.appendIlike('stockAdjustmentRef', filter.stockAdjustmentRef);
      }

      if (filter.stockAdjustmentProduct) {
        query.appendId('stockAdjustmentProduct', filter.stockAdjustmentProduct);
      }

      if (filter.stockAdjustmentType) {
        query.appendEqual('stockAdjustmentType', filter.stockAdjustmentType);
      }

      if (filter.adjustmentStall) {
        query.appendId('adjustmentStall', filter.adjustmentStall);
      }

      if (filter.stockAdjustmentClass) {
        query.appendEqual('stockAdjustmentClass', filter.stockAdjustmentClass);
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
      .collection(`stockAdjustments`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'stockAdjustmentsReason_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('stockAdjustmentsReason', search);
    }

    const collection = await admin
      .firestore()
      .collection(`stockAdjustments`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['stockAdjustmentsReason'],
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

    record.stockAdjustmentProduct = await this.findRelation(
      'products',
      record.stockAdjustmentProduct,
    );

    record.adjustmentStall = await this.findRelation(
      'stall',
      record.adjustmentStall,
    );

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new StockAdjustments().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = StockAdjustmentsRepository;
