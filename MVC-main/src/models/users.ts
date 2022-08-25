import { Sequelize, Model, DataTypes, CreationOptional } from 'sequelize';

 const sequelize = new Sequelize('test', 'root', 'root',{
  dialect: "mysql",
  host: 'localhost',
});

class Users extends Model {
declare id: number;
declare nome: string;
declare email: string;
declare idade: number;
declare phone: string;
}

export default Users.init(
{
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: new DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(50),
    allowNull: false,
  },
  idade: {
    type: new DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  phone: {
    type: new DataTypes.STRING(20),
    allowNull: false,
  }
},
{
  timestamps: false,
  tableName: 'users',
  sequelize, // passing the `sequelize` instance is required
},
);