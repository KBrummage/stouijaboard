// bcrypt used to hide passwords that are entered.  Using the bcrypt-nodejs version as the regular bcrypt module
//sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

//Creating our user model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    // The email cannot be null, and must be a propper email befor creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  //Hooks are automatic methods thant run during carious phases of the User Model lifecycle
  //In this case, before a suer is created, we will automatically hash their passwords
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
