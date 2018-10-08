var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Story.findAll({}).then(function(dbStory) {
      var hbsObject = {
        stories: dbStory
      };
      res.render("index", hbsObject);
    });
  });
  
  // Load New Story modal
  app.get("/modal", function(req, res) {
      res.render("modal");
  });

  // Load example page and pass in an example by id
  // app.get("/stories/:storyId?", function(req, res) {
  //   db.Story.findOne({}).then(function(dbStory) {
  //     res.json(dbStory);
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
