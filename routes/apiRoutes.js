var db = require("../models");

module.exports = function(app) {
  // Get most recent (default setting)
  app.get("/api/stories/", function(req, res) {
    db.Story.findAll({
      include: [db.Entries],
      limit: 100,
      order: [["createdAt", "DESC"]]
    }).then(function(dbStory) {
      var hbsObject = {
        stories: dbStory
      };
      res.render("index", hbsObject);
    });
  });

  // // Get most popular
  // app.get("/api/stories", function(req, res) {
  //   db.Story.findOne({}).then(function() {

  //   });
  // });

  // // Find a specific author

  // // Find a specific genre
  // app.get("/api/stories/:genre", function(req, res) {
  //   db.Story.findAll({}).then(function() {

  //   });
  // });

  // Create a new story
  app.post("/api/stories", function(req, res) {
    db.Story.create({
      title: req.body.title,
      author: req.body.author,
      entry: req.body.entry
    }).then(function(dbStory) {
      res.json({ id: dbStory.insertId });
    });
  });

  // Delete a story (administrator access only)
  // app.delete("/api/stories/:id", function(req, res) {
  //   db.Story.destroy({ where: { id: req.params.id } }).then(function(dbStory) {
  //     res.json(dbStory);
  //   });
  // });
};
