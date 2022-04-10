const users = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'users',
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
      password: {
        type: DataTypes.STRING,
        field: 'password',
      },
      contact: {
        type: DataTypes.INTEGER,
        field: 'contact',
      },
      address: {
        type: DataTypes.STRING,
        field: 'address',
      },
      role_id: {
        type: DataTypes.INTEGER,
        field: 'role_id',
      },
    },
    {
      timestamps: false,
    }
  );

  user.associate = (models) => {
    user.belongsTo(models.roles, {
      foreignKey: 'role_id',
      as: 'roleId',
    });
  };

  return user;
};

module.exports = users;
