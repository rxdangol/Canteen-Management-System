const md = require('../models');
const db = md.sequelize.models;

class roleService {
  async insert(body) {
    const data = await db.roles.create(body);
    return data;
  }

  async getAll() {
    const data = await db.roles.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.roles.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.roles.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.roles.update(body, { where: { id: id } });
  }
}

module.exports = new roleService();
