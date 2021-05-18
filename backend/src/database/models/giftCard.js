const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class GiftCard extends AbstractEntityModel {
  constructor() {
    super('giftCard', 'giftCard', {
      giftCardName: new types.String(null, null),
      giftCardNo: new types.Number(3, 15),
      giftCardAmmount: new types.Number(null, null),
      giftCardCustomer: new types.RelationToOne(),
      giftCardStartDate: new types.Date(),
      giftCardEndDate: new types.Date(),
      giftCardStall: new types.RelationToOne(),
      giftCardStatus: new types.Enumerator([
        "Pending",
        "Used"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
