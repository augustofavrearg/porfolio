import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Cv = sequelize.define('Cv', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  }
});

export default Cv;