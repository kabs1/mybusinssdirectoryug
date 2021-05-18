const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Documents = require('../models/documents');
const AuditLogRepository = require('./auditLogRepository');

class DocumentsRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Documents().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Documents().collectionName}/${record.id}`),
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
      ...new Documents().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Documents().collectionName}/${record.id}`),
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
        .doc(`${new Documents().collectionName}/${id}`),
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
      .collection(new Documents().collectionName);

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

  }

  async findById(id) {
    const record = await this.findDocument('documents', id);
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

      if (filter.documentTitle) {
        query.appendIlike('documentTitle', filter.documentTitle);
      }

      if (filter.documentType) {
        query.appendId('documentType', filter.documentType);
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
      .collection(`documents`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'documentTitle_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('documentTitle', search);
    }

    const collection = await admin
      .firestore()
      .collection(`documents`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['documentTitle'],
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

    record.documentType = await this.findRelation(
      'documentTypes',
      record.documentType,
    );

    record.docStall =
      (await this.findRelation('stall', record.docStall)) ||
      [];

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Documents().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = DocumentsRepository;
