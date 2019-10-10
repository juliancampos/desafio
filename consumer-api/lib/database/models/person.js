module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    name: {
      type: DataTypes.STRING
    },
    document: {
      type: DataTypes.STRING
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
    tableName: 'person'
  });

  person.associate = (models) => {
    person.hasOne(models.address, { foreignKey: 'personId' });
    person.hasMany(models.debit, { foreignKey: 'personId' });
  };

  return person;
};
