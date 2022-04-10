const express = require('express');
const foodItemController = require('../controllers/food_item.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const foodItemRouter = express.Router();

foodItemRouter
  .route('/')
  .get(authenticate, foodItemController.getAll.bind())
  .post(authenticate, authorization, foodItemController.insert.bind());

foodItemRouter
  .route('/:id')
  .get(authenticate, foodItemController.getById.bind())
  .delete(authenticate, authorization, foodItemController.delete.bind())
  .patch(authenticate, authorization, foodItemController.update.bind());

module.exports = foodItemRouter;
