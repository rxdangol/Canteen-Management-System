const foodItemService = require('../services/food_item.service');

class foodItemController {
  async insert(req, res, next) {
    try {
      const body = req.body;
      const data = await foodItemService.insert(body);
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
      const data = await foodItemService.getAll();
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
      const data = await foodItemService.getById(id);
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
      const data = await foodItemService.delete(id);
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
      const data = await foodItemService.update(body, id);
      res.status(200).json({
        status: 'Success',
        message: 'Updated Successfully',
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new foodItemController();
