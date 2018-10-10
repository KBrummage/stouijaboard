var db = require("../models");

module.exports = function(app) {
  // Create a new story
  app.post("/api/entries", function(req, res) {
    db.Entries.create({
      title: req.body.title,
      entry: req.body.entry
    }).then(function(dbStory) {
      res.json({ id: dbStory.insertId });
    });
  });
};
