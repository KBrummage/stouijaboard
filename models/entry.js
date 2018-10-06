module.exports = function(sequelize, DataTypes) {
    var Entries = sequelize.define("Entries", {
        entry: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            len: [1, 500]
          }
        }
    });

    return Entries;
};