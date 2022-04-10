const md = require('../models');
const db = md.sequelize.models;

class orderService {
  async insert(input) {
    const data = await db.orders.create(input);
    return data;
  }

  async getAll() {
    const data = await db.orders.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.orders.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.orders.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.orders.update(body, { where: { id: id } });
  }
}

module.exports = new orderService();
