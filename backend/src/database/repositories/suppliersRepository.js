const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Suppliers = require('../models/suppliers');
const AuditLogRepository = require('./auditLogRepository');

class SuppliersRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Suppliers().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Suppliers().collectionName}/${record.id}`),
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
      ...new Suppliers().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Suppliers().collectionName}/${record.id}`),
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
        .doc(`${new Suppliers().collectionName}/${id}`),
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
      .collection(new Suppliers().collectionName);

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
      'purchases',
      'purchaseSupplier',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('suppliers', id);
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

      if (filter.supplierNames) {
        query.appendIlike('supplierNames', filter.supplierNames);
      }

      if (filter.supplierBusinessName) {
        query.appendIlike('supplierBusinessName', filter.supplierBusinessName);
      }

      if (filter.supplierPhoneNumber) {
        query.appendIlike('supplierPhoneNumber', filter.supplierPhoneNumber);
      }

      if (filter.supplierPayTerm) {
        query.appendEqual('supplierPayTerm', filter.supplierPayTerm);
      }

      if (filter.supplierStatus) {
        query.appendEqual('supplierStatus', filter.supplierStatus);
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
      .collection(`suppliers`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'supplierNames_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('supplierNames', search);
    }

    const collection = await admin
      .firestore()
      .collection(`suppliers`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['supplierNames'],
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

    record.userId = await this.findRelation(
      'user',
      record.userId,
    );

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Suppliers().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = SuppliersRepository;
