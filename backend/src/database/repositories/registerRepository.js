const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Register = require('../models/register');
const AuditLogRepository = require('./auditLogRepository');

class RegisterRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Register().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Register().collectionName}/${record.id}`),
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
      ...new Register().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Register().collectionName}/${record.id}`),
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
        .doc(`${new Register().collectionName}/${id}`),
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
      .collection(new Register().collectionName);

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
    await this.destroyRelationToOne(
      id,
      'sales',
      'salesRegister',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'commissions',
      'commRegister',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('register', id);
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

      if (filter.registerRef) {
        query.appendIlike('registerRef', filter.registerRef);
      }

      if (filter.registerStall) {
        query.appendId('registerStall', filter.registerStall);
      }

      if (filter.registerStaff) {
        query.appendId('registerStaff', filter.registerStaff);
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
      .collection(`register`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'registerRef_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('registerRef', search);
    }

    const collection = await admin
      .firestore()
      .collection(`register`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['registerRef'],
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

    record.registerStall = await this.findRelation(
      'stall',
      record.registerStall,
    );

    record.registerStaff = await this.findRelation(
      'staff',
      record.registerStaff,
    );

    record.registerSaleRef =
      (await this.findRelation('sales', record.registerSaleRef)) ||
      [];

    record.registerReturnsRef =
      (await this.findRelation('returns', record.registerReturnsRef)) ||
      [];

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Register().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = RegisterRepository;
