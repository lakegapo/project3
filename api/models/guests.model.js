module.exports = function(sequelize, DataTypes) {
  var Guests = sequelize.define("Guest", {
  });

  Guests.associate = function(models) {
    Guests.belongsTo(models.User, {
    });
    Guests.belongsTo(models.Event, {
    });
  };
  return Guests;
};