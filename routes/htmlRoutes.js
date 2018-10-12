var db = require("../models");

module.exports = function(app) {
  // Get most recent (default setting)
  app.get("/", function(req, res) {
    var query = {};
    if (req.query.email) {
      query.UserId = req.query.email;
    }
    db.Entries.findAll({
      include: [db.User],
      where: query
    }).then(function(data) {
      var hbsObject = {
        entries: data
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.get("/story/:id", function(req, res) {
    db.Entries.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      // console.log("Data: " + Array.from(data));
      var hbsObject = {
        entries: data
      };
      // console.log(hbsObject);
      res.render("newStory", hbsObject);
    });
  });
  app.get("/loggedIn", function(req, res) {
    res.render("loggedIn");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
