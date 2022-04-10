const orders = (sequelize, DataTypes) => {
  const order = sequelize.define('orders', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      field: 'customer_id',
    },
    total_price: {
      type: DataTypes.INTEGER,
      field: 'total_price',
    },
    payment_id: {
      type: DataTypes.INTEGER,
      field: 'payment_id',
    },
  });

  order.associate = (models) => {
    order.belongsTo(models.customers, {
      foreignKey: 'customer_id',
      as: 'customerId',
    });
  };

  order.associate = (models) => {
    order.belongsTo(models.payment_methods, {
      foreignKey: 'payment_id',
      as: 'paymentId',
    });
  };

  return order;
};

module.exports = orders;
