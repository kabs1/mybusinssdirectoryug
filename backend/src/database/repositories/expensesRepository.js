const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Expenses = require('../models/expenses');
const AuditLogRepository = require('./auditLogRepository');

class ExpensesRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Expenses().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Expenses().collectionName}/${record.id}`),
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
      ...new Expenses().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Expenses().collectionName}/${record.id}`),
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
        .doc(`${new Expenses().collectionName}/${id}`),
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
      .collection(new Expenses().collectionName);

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
      'allowanceAndDeduction',
      'adExpenses',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'stockTransfer',
      'transferExpenses',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('expenses', id);
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

      if (filter.expensesTitle) {
        query.appendIlike('expensesTitle', filter.expensesTitle);
      }

      if (filter.expensesMadeBy) {
        query.appendId('expensesMadeBy', filter.expensesMadeBy);
      }

      if (filter.expensesDateRange) {
        query.appendRange(
          'expensesDate',
          filter.expensesDateRange,
        );
      }

      if (filter.expensesStatus) {
        query.appendEqual('expensesStatus', filter.expensesStatus);
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
      .collection(`expenses`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'expensesTitle_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('expensesTitle', search);
    }

    const collection = await admin
      .firestore()
      .collection(`expenses`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['expensesTitle'],
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

    record.expensesMadeBy = await this.findRelation(
      'staff',
      record.expensesMadeBy,
    );

    record.expenseMadeTo =
      (await this.findRelation('staff', record.expenseMadeTo)) ||
      [];

    record.expenseStall =
      (await this.findRelation('stall', record.expenseStall)) ||
      [];

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Expenses().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = ExpensesRepository;
