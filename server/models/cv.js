import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Cv = sequelize.define('Cv', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  cvPath: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Cv;
