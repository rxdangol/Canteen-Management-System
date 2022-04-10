const roles = (sequelize, DataTypes) => {
  return sequelize.define(
    'roles',
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
    }
  );
};

module.exports = roles;
