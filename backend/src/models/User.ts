import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare nome: string;
  declare email: string;
  declare level: number;
  declare linkedin: string;
  declare github: string;
  declare telefone: number;
  declare portfolio: string;
  declare currículo: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init({
  nome: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  level: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  linkedin: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  github: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  portfolio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  currículo: {
    type: DataTypes.STRING,
    allowNull: true
  },

}, {
  tableName: 'users',
  sequelize: db,
  timestamps: false,
  underscored: true,
});

export default User;
