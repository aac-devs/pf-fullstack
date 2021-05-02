const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {}
  Profile.init(
    {
      image: DataTypes.STRING,
      service_eng: DataTypes.STRING,
      service_esp: DataTypes.STRING,
      phrase_eng: DataTypes.TEXT,
      phrase_esp: DataTypes.TEXT,
      linkedIn: DataTypes.STRING,
      repoLink: DataTypes.STRING,
      cvLink: DataTypes.STRING,
      country: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'profile',
    },
  );
  return Profile;
};
