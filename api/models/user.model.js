module.exports = function (sequelize, DataTypes) {
    return sequelize.define("User", {
        email: DataTypes.TEXT,
        hash: DataTypes.BLOB,
        salt: DataTypes.BLOB
    });
}