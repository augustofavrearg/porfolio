import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Skill = sequelize.define('DeveloperSkill', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  skillName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  skillDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  certification: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Skill;
