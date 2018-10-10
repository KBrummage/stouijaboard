var db = require("../models");

module.exports = function(app) {
  // Get most recent (default setting)
  app.get("/", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Entries.findAll({
      include: [db.User],
      where: query
    }).then(function(data) {
      var hbsObject = {
        entries: data
      };
      res.render("index", hbsObject);
      // console.log(hbsObject);
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
