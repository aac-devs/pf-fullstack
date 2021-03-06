const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {}
  Skill.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'skill',
    },
  );
  return Skill;
};
