module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    street: {
      type: DataTypes.STRING
    },
    address_number: {
      type: DataTypes.STRING
    },
    cep: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    personId: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    }
  }, {
    freezeTableName: true,
    tableName: 'address'
  });

  address.associate = (models) => {
    address.belongsTo(models.person, { foreignKey: 'personId' });
  };

  return address;
};
