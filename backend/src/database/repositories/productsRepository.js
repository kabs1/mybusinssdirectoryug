const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Products = require('../models/products');
const AuditLogRepository = require('./auditLogRepository');

class ProductsRepository extends AbstractEntityRepository {
  async create(data, options) {
    const record = {
      id: this.newId(),
      ...new Products().cast(data),
      createdBy: this.getCurrentUser(options).id,
      createdAt: this.serverTimestamp(),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(`${new Products().collectionName}/${record.id}`),
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
      ...new Products().cast(data),
      updatedBy: this.getCurrentUser(options).id,
      updatedAt: this.serverTimestamp(),
    };

    await AbstractEntityRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Products().collectionName}/${record.id}`),
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
        .doc(`${new Products().collectionName}/${id}`),
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
      .collection(new Products().collectionName);

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
      'sales',
      'salesProducts',
      options,
    );

    await this.destroyRelationToMany(
      id,
      'sales',
      'saleReturnsProducts',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'purchases',
      'purchaseProduct',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'returns',
      'returnProduct',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockAdjustments',
      'stockAdjustmentProduct',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'damages',
      'damageProduct',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'productLogs',
      'productLogProduct',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'stockTransfer',
      'transferProduct',
      options,
    );

    await this.destroyRelationToOne(
      id,
      'priceChange',
      'priceChangeProduct',
      options,
    );
  }

  async findById(id) {
    const record = await this.findDocument('products', id);
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

      if (filter.productName) {
        query.appendIlike('productName', filter.productName);
      }

      if (filter.productUnit) {
        query.appendId('productUnit', filter.productUnit);
      }

      if (filter.productBrand) {
        query.appendId('productBrand', filter.productBrand);
      }

      if (filter.productCategory) {
        query.appendId('productCategory', filter.productCategory);
      }

      if (filter.productTax) {
        query.appendId('productTax', filter.productTax);
      }

      if (filter.productEnableStock) {
        query.appendEqual('productEnableStock', filter.productEnableStock);
      }

      if (filter.productStatus) {
        query.appendEqual('productStatus', filter.productStatus);
      }

      if (filter.productVariation) {
        query.appendId('productVariation', filter.productVariation);
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
      .collection(`products`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'productName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('productName', search);
    }

    const collection = await admin
      .firestore()
      .collection(`products`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['productName'],
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

    record.productUnit = await this.findRelation(
      'units',
      record.productUnit,
    );

    record.productBrand = await this.findRelation(
      'brands',
      record.productBrand,
    );

    record.productCategory = await this.findRelation(
      'categories',
      record.productCategory,
    );

    record.productTax = await this.findRelation(
      'taxClass',
      record.productTax,
    );

    record.productVariation = await this.findRelation(
      'variation',
      record.productVariation,
    );

    record.productStall =
      (await this.findRelation('stall', record.productStall)) ||
      [];

    return record;
  }

  async _auditLogs(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Products().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = ProductsRepository;
