module.exports = (sequelize, DataTypes) => {
  const debit = sequelize.define('debit', {
    debit_value: {
      type: DataTypes.DOUBLE
    },
    company: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    started_at: {
      type: DataTypes.DATE(3)
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
    tableName: 'debit'
  });
  
  debit.associate = (models) => {
    debit.belongsTo(models.person, { foreignKey: 'debit' });
  };

  return debit;
};
