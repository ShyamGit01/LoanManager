var express = require('express');
var router = express.Router();
const invoiceModel = require('../models/invoices.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
