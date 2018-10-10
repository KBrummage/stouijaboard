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

  // Get most popular

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
