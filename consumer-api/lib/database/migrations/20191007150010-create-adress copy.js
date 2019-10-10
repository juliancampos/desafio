module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      street: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      address_number: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      country: {
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
        'address',
        { fields: ['id'], unique: true }
      );
    }),
  down: queryInterface => queryInterface.dropTable('address'),
};
