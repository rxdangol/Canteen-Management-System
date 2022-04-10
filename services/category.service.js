const md = require('../models');
const db = md.sequelize.models;

class categoryService {
  async insert(body) {
    const data = await db.category.create(body);
    return data;
  }

  async getAll() {
    const data = await db.category.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.category.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.category.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.category.update(body, { where: { id: id } });
  }
}

module.exports = new categoryService();
