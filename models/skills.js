import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Skill = sequelize.define('Skill', {
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

export default Skill;