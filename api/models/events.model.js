module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Event", {
    name: DataTypes.TEXT,
    address1: DataTypes.TEXT,
    address2: DataTypes.TEXT,
    citystate: DataTypes.TEXT,
    zip: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    date: DataTypes.TEXT
  });

  Events.associate = function(models) {
    Events.belongsTo(models.User, {
    });
    Events.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };
  return Events;
};