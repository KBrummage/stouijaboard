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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
