const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        level: DataTypes.INTEGER,
        linkedin: DataTypes.STRING,
        gitHub: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
        portfolio: DataTypes.STRING, 
        currículo: DataTypes.STRING, 
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });
  
    return User;
  };
  
  module.exports = UserModel;