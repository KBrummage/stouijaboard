const db = require("../models");

module.exports = function(app) {
  // Get all stories
  app.get("/api/stories", function(req, res) {
    db.Story.findAll({}).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  // Find a specific story
  app.get("/api/stories", function(req, res) {
    db.Story.findOne({}).then(function() {

    });
  });

  // Find a specific author

  // Find a specific genre
  app.get("/api/stories/:genre", function(req, res) {
    db.Story.findAll({}).then(function() {

    });
  });

  // Create a new story
  app.post("/api/stories", function(req, res) {
    db.Story.create({
      title: req.body.title,
      genre: req.body.genre,
      author: req.body.author,
    }).then(function(dbStory) {
      res.json({ id: dbStory.insertId });
    });
  });

  // Delete an example by id
  app.delete("/api/stories/:id", function(req, res) {
    db.Story.destroy({ where: { id: req.params.id } }).then(function(dbStory) {
      res.json(dbStory);
    });
  });
};
