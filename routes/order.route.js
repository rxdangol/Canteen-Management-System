const express = require('express');
const orderController = require('../controllers/order.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const orderRouter = express.Router();

orderRouter
  .route('/')
  .get(authenticate, orderController.getAll.bind())
  .post(authenticate, orderController.insert.bind());

orderRouter
  .route('/:id')
  .get(authenticate, orderController.getById.bind())
  .delete(authenticate, authorization, orderController.delete.bind())
  .patch(authenticate, orderController.update.bind());

module.exports = orderRouter;
