const md = require('../models');
const db = md.sequelize.models;

class paymentService {
  async insert(body) {
    const data = await db.payment_methods.create(body);
    return data;
  }

  async getAll() {
    const data = await db.payment_methods.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.payment_methods.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.payment_methods.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.payment_methods.update(body, { where: { id: id } });
  }
}

module.exports = new paymentService();
