const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    // static associate(models) {
    // this.belongsToMany(models.genre, { through: 'game_genre' });
    // this.belongsToMany(models.platform, { through: 'game_platform' });
    // }
  }
  Label.init(
    {
      profileName: DataTypes.STRING,
      profileService: DataTypes.STRING,
      profilePhrase: DataTypes.STRING,
      profileLocation: DataTypes.STRING,
      routesProjects: DataTypes.STRING,
      routesSkills: DataTypes.STRING,
      routesContact: DataTypes.STRING,
      contactName: DataTypes.STRING,
      contactEmail: DataTypes.STRING,
      contactMessage: DataTypes.STRING,
      contactResolve: DataTypes.STRING,
      contactButton: DataTypes.STRING,
      footer: DataTypes.ARRAY,
    },
    {
      sequelize,
      modelName: 'label',
    },
  );
  return Label;
};
