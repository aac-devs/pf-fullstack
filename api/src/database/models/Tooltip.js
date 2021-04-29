const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tooltip extends Model {
    // static associate(models) {
    // this.belongsToMany(models.genre, { through: 'game_genre' });
    // this.belongsToMany(models.platform, { through: 'game_platform' });
    // }
  }
  Tooltip.init(
    {
      profileLinkedin: DataTypes.STRING,
      profileGithub: DataTypes.STRING,
      profileCV: DataTypes.STRING,
      navbarMode: DataTypes.STRING,
      navbarLangueage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'tooltip',
    },
  );
  return Tooltip;
};
