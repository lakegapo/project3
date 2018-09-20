module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("User", {
    googleId: DataTypes.STRING,
    email: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    firstName: DataTypes.TEXT

  });

  Users.associate = function(models) {
    Users.hasMany(models.Event, {});
    Users.hasMany(models.Comment, {});
  };
  return Users;
};