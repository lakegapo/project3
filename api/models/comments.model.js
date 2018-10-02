module.exports = function (sequelize, DataTypes) {
  var Comments = sequelize.define("Comment", {
    text: DataTypes.TEXT
  });

  Comments.associate = function(models) {
    Comments.belongsTo(models.User, {
    });
    Comments.belongsTo(models.Event, {
    });
  };
  return Comments;
};