const category = (sequelize, DataTypes) => {
  return sequelize.define(
    'category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(),
        field: 'name',
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};

module.exports = category;
