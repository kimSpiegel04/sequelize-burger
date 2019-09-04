module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        type: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burger;
};
