module.exports = function (sequelize, DataTypes) {
  var Comments = sequelize.define("Comment", {
    text: DataTypes.TEXT
  });

  Comments.associate = function(models) {
    Comments.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Comments.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comments;
};