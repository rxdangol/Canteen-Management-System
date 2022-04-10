const orderService = require('../services/order.service');
const orderDetailService = require('../services/order_detail.service');

class orderController {
  async insert(req, res, next) {
    try {
      const [order, orderDetails] = req.body;
      // console.log(a, b);
      const orderData = await orderService.insert(order);
      const orderDetailData = await orderDetailService.insert(orderDetails);
      res.status(201).json({
        status: 'Success',
        orderData,
        orderDetailData,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await orderService.getAll();
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
      const data = await orderService.getById(id);
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
      await orderService.delete(id);
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
      const data = await orderService.update(body, id);
      res.status(200).json({
        status: 'Success',
        message: 'Updated Successfully',
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = new orderController();
