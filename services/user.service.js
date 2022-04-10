const md = require('../models');
const db = md.sequelize.models;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class userService {
  async insert(body) {
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = await bcrypt.hashSync(body.password, salt);
    const userData = {
      name: body.name,
      email: body.email,
      password: hashedPassword,
      contact: body.contact,
      address: body.address,
      role_id: body.role_id,
    };
    const data = await db.users.create(userData);
    return data;
  }

  async getAll() {
    const data = await db.users.findAll();
    return data;
  }

  async getById(id) {
    const data = await db.users.findOne({ where: { id } });
    return data;
  }

  async delete(id) {
    const data = await db.users.destroy({ where: { id } });
  }

  async update(body, id) {
    const data = await db.users.update(body, { where: { id } });
  }

  async login(body) {
    console.log(body);
    const data = await db.users.findOne({ where: { name: body.name } });
    console.log(data.dataValues, body.password);
    const match = await bcrypt.compare(body.password, data.dataValues.password);
    console.log(match);
    if (match) {
      const token = jwt.sign(data.dataValues, 'secretKey', { expiresIn: '1h' });
      return token;
    } else {
      throw new Error('User Password Incorrect');
    }
  }
}

module.exports = new userService();
