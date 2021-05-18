const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Returns = require('../models/returns');
const AuditLogRepository = require('./auditLogRepository');

class ReturnsRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Returns().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Returns().collectionName}/${record.id}`),
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
      ...new Returns().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Returns().collectionName}/${record.id}`),
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
        .doc(`${new Returns().collectionName}/${id}`),
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
      .collection(new Returns().collectionName);

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
      'productLogReturnsRef',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'register',
      'registerReturnsRef',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('returns', id);
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

      if (filter.returnRefNo) {
        query.appendIlike('returnRefNo', filter.returnRefNo);
      }

      if (filter.returnProduct) {
        query.appendId('returnProduct', filter.returnProduct);
      }

      if (filter.returnsFrom) {
        query.appendEqual('returnsFrom', filter.returnsFrom);
      }

      if (filter.returnIdentifier) {
        query.appendIlike('returnIdentifier', filter.returnIdentifier);
      }

      if (filter.returnStall) {
        query.appendId('returnStall', filter.returnStall);
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
      .collection(`returns`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'returnRefNo_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('returnRefNo', search);
    }

    const collection = await admin
      .firestore()
      .collection(`returns`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['returnRefNo'],
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

    record.returnProduct = await this.findRelation(
      'products',
      record.returnProduct,
    );

    record.returnStall = await this.findRelation(
      'stall',
      record.returnStall,
    );

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Returns().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = ReturnsRepository;
