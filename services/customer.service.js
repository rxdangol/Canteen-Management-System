const md = require('../models');
const db = md.sequelize.models;

class customerService {
  async insert(body) {
    const data = await db.customers.create(body);
    return data;
  }

  async getAll() {
    const data = await db.customers.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.customers.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.customers.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.customers.update(body, { where: { id: id } });
  }
}

module.exports = new customerService();
