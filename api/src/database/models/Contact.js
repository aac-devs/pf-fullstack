const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {}
  Contact.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'contact',
    },
  );
  return Contact;
};
