import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true // Podría calcularse a partir de startDate y endDate
  },
  client: {
    type: DataTypes.STRING,
    allowNull: true
  },
  participants: {
    type: DataTypes.JSONB, // Podría almacenar un array de objetos con información de los participantes
    allowNull: true
  },
  technologies: {
    type: DataTypes.JSONB, // Podría almacenar un array de objetos con información de las tecnologías utilizadas
    allowNull: true
  },
  requirements: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('Planning', 'In Progress', 'Completed', 'On Hold', 'Cancelled'),
    allowNull: false,
    defaultValue: 'Planning'
  }
});

export default Project;
