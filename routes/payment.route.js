const express = require('express');
const paymentController = require('../controllers/payment.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const paymentRouter = express.Router();

paymentRouter
  .route('/')
  .get(authenticate, paymentController.getAll.bind())
  .post(authenticate, authorization, paymentController.insert.bind());

paymentRouter
  .route('/:id')
  .get(authenticate, paymentController.getById.bind())
  .delete(authenticate, authorization, paymentController.delete.bind())
  .patch(authenticate, authorization, paymentController.update.bind());

module.exports = paymentRouter;
