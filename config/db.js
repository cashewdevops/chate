const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();
    console.log('Conectado com sucesso');
  } catch (error) {
    console.error('erro ao se conectar', error);
  }

  module.exports = sequelize