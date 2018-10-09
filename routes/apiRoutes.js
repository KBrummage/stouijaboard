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

  // // Get most popular

  // // Find a specific author

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
