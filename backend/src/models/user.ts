const UserModel = (sequelize: any, DataTypes: any) => {
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
    });
  
    return User;
  };
  
  module.exports = UserModel;