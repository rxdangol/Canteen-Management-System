const orderDetails = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define(
    'order_details',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        field: 'order_id',
      },
      food_item_name: {
        type: DataTypes.STRING,
        field: 'food_item_name',
      },
      price: {
        type: DataTypes.INTEGER,
        field: 'price',
      },
      quantity: {
        type: DataTypes.INTEGER,
        field: 'quantity',
      },
    },
    {
      timestamps: false,
    }
  );

  orderDetail.associate = (models) => {
    orderDetail.belongsTo(models.orders, {
      foreignKey: 'order_id',
      as: 'orderId',
    });
  };
  return orderDetail;
};

module.exports = orderDetails;
