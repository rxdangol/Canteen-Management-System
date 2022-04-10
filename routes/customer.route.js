const express = require('express');
const customerController = require('../controllers/customer.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const customerRouter = express.Router();

customerRouter
  .route('/')
  .get(authenticate, customerController.getAll.bind())
  .post(authenticate, customerController.insert.bind());

customerRouter
  .route('/:id')
  .get(authenticate, customerController.getById.bind())
  .delete(authenticate, authorization, customerController.delete.bind())
  .patch(authenticate, customerController.update.bind());

module.exports = customerRouter;
