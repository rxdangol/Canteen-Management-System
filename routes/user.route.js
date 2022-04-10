const express = require('express');
const userController = require('../controllers/user.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(authenticate, authorization, userController.getAll.bind())
  .post(authenticate, authorization, userController.insert.bind());

userRouter
  .route('/:id')
  .get(authenticate, authorization, userController.getById.bind())
  .delete(authenticate, authorization, userController.delete.bind())
  .patch(authenticate, authorization, userController.update.bind());

module.exports = userRouter;
