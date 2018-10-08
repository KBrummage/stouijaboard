module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }
  });

  Story.associate = function(models) {
    Story.belongsToMany(models.User, {
      through: "StoryUser",
      foreignKey: "entriesId",
      otherKey: "id"
    });
  };

  return Story;
};
