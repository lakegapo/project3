module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Event", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  });

  Events.associate = function(models) {
    Events.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Events.belongsTo(models.Categories, {
      foreignKey: {
        allowNull: false
      }
    });
    Events.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };
  return Events;
};