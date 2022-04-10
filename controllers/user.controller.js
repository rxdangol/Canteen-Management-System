const userService = require('../services/user.service');

class userController {
  async insert(req, res, next) {
    try {
      const body = req.body;
      const data = await userService.insert(body);
      res.status(201).json({
        status: 'Success',
        data,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await userService.getAll();
      res.status(200).json({
        status: 'Success',
        length: data.length,
        data,
      });
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const data = await userService.getById(id);
      res.status(200).json({
        status: 'Success',
        data,
      });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      console.log(id);
      const data = await userService.delete(id);
      res.status(200).json({
        status: 'Success',
        message: 'Deleted Successfully',
      });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const body = req.body;
      const data = await userService.update(body, id);
      res.status(200).json({
        status: 'Success',
        message: 'Updated Successfully',
      });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const body = req.body;
      const data = await userService.login(body);
      res.status(200).json({
        status: 'Success',
        token: data,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new userController();
