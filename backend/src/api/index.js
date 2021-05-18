const express = require('express');
const cors = require('cors');
const app = express();
const authFirebaseService = require('../auth/authFirebaseService');
const authMiddleware = require('../auth/authMiddleware');
const {
  init: databaseInit,
  middleware: databaseMiddleware,
} = require('../database/databaseInit');
const bodyParser = require('body-parser');

databaseInit().catch((error) => console.error(error));
authFirebaseService.init();

app.use(databaseMiddleware);
app.use(authMiddleware);
app.use(bodyParser.json());
app.use(cors({ origin: true }));

const routes = express.Router();
require('./auditLog')(routes);
require('./auth')(routes);
require('./iam')(routes);
require('./settings')(routes);
require('./customers')(routes);
require('./suppliers')(routes);
require('./staff')(routes);
require('./products')(routes);
require('./brands')(routes);
require('./categories')(routes);
require('./expenses')(routes);
require('./expenseCategory')(routes);
require('./assets')(routes);
require('./devices')(routes);
require('./notice')(routes);
require('./sales')(routes);
require('./purchases')(routes);
require('./returns')(routes);
require('./stockAdjustments')(routes);
require('./units')(routes);
require('./giftCard')(routes);
require('./coupon')(routes);
require('./damages')(routes);
require('./leave')(routes);
require('./leaveType')(routes);
require('./allowanceAndDeduction')(routes);
require('./payroll')(routes);
require('./attendance')(routes);
require('./taxClass')(routes);
require('./todo')(routes);
require('./documents')(routes);
require('./paymentMethods')(routes);
require('./documentTypes')(routes);
require('./memos')(routes);
require('./currency')(routes);
require('./holiday')(routes);
require('./stall')(routes);
require('./variation')(routes);
require('./productLogs')(routes);
require('./stockTransfer')(routes);
require('./deviceSessions')(routes);
require('./productCount')(routes);
require('./productValue')(routes);
require('./register')(routes);
require('./commissions')(routes);
require('./transactions')(routes);
require('./priceChange')(routes);
app.use('/api', routes);

module.exports = app;
