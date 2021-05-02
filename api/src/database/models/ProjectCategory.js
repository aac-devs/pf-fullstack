const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProjectCategory extends Model {}
  ProjectCategory.init(
    {
      name_eng: DataTypes.STRING,
      name_esp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'project_category',
    },
  );
  return ProjectCategory;
};
