module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('debit', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debit_value: {
        type: Sequelize.DOUBLE(250),
        allowNull: false
      },
      company: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      personId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'person',
          key: 'id'
        }
      },
      started_at: {
        type: Sequelize.DATE(3),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.addIndex(
        'debit',
        { fields: ['id'], unique: true }
      );
    }),
  down: queryInterface => queryInterface.dropTable('debit'),
};
