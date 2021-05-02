const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {}
  Project.init(
    {
      title_eng: DataTypes.STRING,
      title_esp: DataTypes.STRING,
      description_eng: DataTypes.TEXT,
      description_esp: DataTypes.TEXT,
      image: DataTypes.STRING,
      link: DataTypes.STRING,
      linkTooltip: DataTypes.STRING,
      repo: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'project',
    },
  );
  return Project;
};
