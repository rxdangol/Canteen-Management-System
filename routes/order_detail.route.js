const express = require('express');
const orderDetailController = require('../controllers/order_detail.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const orderDetailRouter = express.Router();

orderDetailRouter
  .route('/')
  .get(authenticate, orderDetailController.getAll.bind());
// .post(orderDetailController.insert.bind());

orderDetailRouter
  .route('/:id')
  .get(authenticate, orderDetailController.getById.bind())
  .delete(authenticate, authorization, orderDetailController.delete.bind())
  .patch(authenticate, orderDetailController.update.bind());

module.exports = orderDetailRouter;
