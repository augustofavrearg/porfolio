import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  canonical_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  label: {
    type: DataTypes.JSONB, // Puedes cambiar el tipo de datos según tus necesidades
    allowNull: false
  },
  promo_items: {
    type: DataTypes.JSONB, // Puedes cambiar el tipo de datos según tus necesidades
    allowNull: false
  }
});

export default Post;
