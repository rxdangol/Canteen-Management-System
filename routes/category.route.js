const express = require('express');
const categoryController = require('../controllers/category.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const categoryRouter = express.Router();

categoryRouter
  .route('/')
  .get(authenticate, authorization, categoryController.getAll.bind())
  .post(authenticate, authorization, categoryController.insert.bind());

categoryRouter
  .route('/:id')
  .get(authenticate, authorization, categoryController.getById.bind())
  .delete(authenticate, authorization, categoryController.delete.bind())
  .patch(authenticate, authorization, categoryController.update.bind());

module.exports = categoryRouter;
