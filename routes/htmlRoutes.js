var db = require("../models");

module.exports = function(app) {
  // Get most recent (default setting)
  app.get("/", function(req, res) {
    db.Entries.findAll({}).then(function(data) {
      var hbsObject = {
        entries: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
