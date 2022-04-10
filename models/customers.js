const customers = (sequelize, DataTypes) => {
  return sequelize.define(
    'customers',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        field: 'name',
      },
      email: {
        type: DataTypes.STRING,
        field: 'email',
      },
      contact: {
        type: DataTypes.INTEGER,
        field: 'contact',
      },
      address: {
        type: DataTypes.STRING,
        field: 'address',
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = customers;
