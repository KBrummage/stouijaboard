var db = require("../models");

module.exports = function(app) {
  // Get most recent (default setting)
  app.get("/api/entries", function(req, res) {
    db.Entries.findAll({}).then(function(data) {
      var hbsObject = {
        entries: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
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
};
