const foodItems = (sequelize, DataTypes) => {
  const foodItem = sequelize.define(
    'food_items',
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
      category_id: {
        type: DataTypes.INTEGER,
        field: 'category_id',
      },
      price: {
        type: DataTypes.INTEGER,
        field: 'price',
      },
      description: {
        type: DataTypes.STRING,
        field: 'description',
      },
    },
    {
      timestamps: false,
    }
  );

  foodItem.associate = (models) => {
    foodItem.belongsTo(models.category, {
      foreignKey: 'category_id',
      as: 'categoryId',
    });
  };
  return foodItem;
};

module.exports = foodItems;
