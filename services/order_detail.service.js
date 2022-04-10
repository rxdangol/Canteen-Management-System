const md = require('../models');
const db = md.sequelize.models;

class orderDetailService {
  async insert(input) {
    const data = await db.order_details.bulkCreate(input);
    return data;
  }

  async getAll() {
    const data = await db.order_details.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.order_details.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.order_details.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.order_details.update(body, { where: { id: id } });
  }
}

module.exports = new orderDetailService();
