const paymentMethods = (sequelize, DataTypes) => {
  return sequelize.define(
    'payment_methods',
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
    },
    {
      timestamps: false,
    }
  );
};

module.exports = paymentMethods;
