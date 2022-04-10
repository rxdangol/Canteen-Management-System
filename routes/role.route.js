const express = require('express');
const roleController = require('../controllers/role.controller');
const authenticate = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

const roleRouter = express.Router();

roleRouter
  .route('/')
  .get(authenticate, authorization, roleController.getAll.bind())
  .post(authenticate, authorization, roleController.insert.bind());

roleRouter
  .route('/:id')
  .get(authenticate, authorization, roleController.getById.bind())
  .delete(authenticate, authorization, roleController.delete.bind())
  .patch(authenticate, authorization, roleController.update.bind());

module.exports = roleRouter;
