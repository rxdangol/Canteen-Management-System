const md = require('../models');
const db = md.sequelize.models;

class foodItemService {
  async insert(body) {
    const data = await db.food_items.create(body);
    return data;
  }

  async getAll() {
    const data = await db.food_items.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.food_items.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.food_items.destroy({ where: { id: id } });
    return data;
  }

  async update(body, id) {
    const data = await db.food_items.update(body, { where: { id: id } });
  }
}

module.exports = new foodItemService();
