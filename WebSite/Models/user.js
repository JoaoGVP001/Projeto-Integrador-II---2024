const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database-config');

// Definindo o modelo de Usuário
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "users",
  timestamps: false,
});

module.exports = User;