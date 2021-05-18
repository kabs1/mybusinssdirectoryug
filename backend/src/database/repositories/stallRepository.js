const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Stall = require('../models/stall');
const AuditLogRepository = require('./auditLogRepository');

class StallRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Stall().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Stall().collectionName}/${record.id}`),
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
      ...new Stall().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Stall().collectionName}/${record.id}`),
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
        .doc(`${new Stall().collectionName}/${id}`),
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
      .collection(new Stall().collectionName);

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
      'products',
      'productStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'expenses',
      'expenseStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'assets',
      'assetsStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'devices',
      'deviceStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'notice',
      'noticeStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'sales',
      'salesStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'purchases',
      'purchaseStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'returns',
      'returnStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockAdjustments',
      'adjustmentStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'giftCard',
      'giftCardStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'coupon',
      'couponStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'damages',
      'damageStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'allowanceAndDeduction',
      'adStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'attendance',
      'expenseStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'todo',
      'todoStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'documents',
      'docStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'memos',
      'memoStall',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'holiday',
      'holidayStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'productLogs',
      'productLogStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockTransfer',
      'transferStallFrom',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockTransfer',
      'transferStallTo',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'register',
      'registerStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'commissions',
      'commStall',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'priceChange',
      'priceChangeStall',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('stall', id);
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

      if (filter.stallName) {
        query.appendIlike('stallName', filter.stallName);
      }

      if (filter.stallType) {
        query.appendEqual('stallType', filter.stallType);
      }

      if (filter.stallLocation) {
        query.appendIlike('stallLocation', filter.stallLocation);
      }

      if (filter.stallPhoneNumber) {
        query.appendIlike('stallPhoneNumber', filter.stallPhoneNumber);
      }

      if (filter.stallIsStatus) {
        query.appendEqual('stallIsStatus', filter.stallIsStatus);
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
      .collection(`stall`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'stallName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('stallName', search);
    }

    const collection = await admin
      .firestore()
      .collection(`stall`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['stallName'],
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



    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Stall().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = StallRepository;
