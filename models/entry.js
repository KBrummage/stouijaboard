module.exports = function(sequelize, DataTypes) {
  var Entries = sequelize.define("Entries", {
    id: {
      // autoIncrement: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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
    Entries.hasMany(models.Story, {
      onDelete: "cascade"
    });
  };

  return Entries;
};
