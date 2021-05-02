const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SkillCategory extends Model {}
  SkillCategory.init(
    {
      name_eng: DataTypes.STRING,
      name_esp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'skill_category',
    },
  );
  return SkillCategory;
};
