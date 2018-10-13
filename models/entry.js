module.exports = function(sequelize, DataTypes) {
  var Entries = sequelize.define("Entries", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entry: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    }
  });

  Entries.associate = function(models) {
    Entries.belongsTo(models.User, {
      targetKey: models.User.id,
      foreignKey: models.User.id
    });
  };

  return Entries;
};
