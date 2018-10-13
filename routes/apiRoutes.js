var db = require("../models");
var passport = require("../config/passport");
require("express");

module.exports = function(app) {
  // Login User
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(_req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    //res.redirect("/loggedIn");
    res.sendStatus(204);
  });
  // Create a new user
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(dbStory) {
      res.json({ id: dbStory.insertId });
    });
  });
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Get most popular

  // Find a specific author

  // Create a new story
  app.post("/api/entries", function(req, res) {
    db.Entries.create({
      title: req.body.title,
      author: req.body.author,
      entry: req.body.entry
    }).then(function(dbStory) {
      res.json({ id: dbStory.insertId });
    });
  });

  // Add a line to an existing story
  app.put("/api/contribution/:id", function(req, res, err) {
    db.Entries.update(
      {
        entry: req.body.entry
      },
      {
        // isNewRecord: true,
        where: {
          id: req.params.id
        }
      }
    )
      .then(function(updatedStory) {
        console.log(updatedStory);
        res.json(updatedStory);
      })
      .catch(err);
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll({ include: [db.Entries] }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.User.findAll({
      include: [db.Entries],
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
