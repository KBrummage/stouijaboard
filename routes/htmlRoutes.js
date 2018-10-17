var db = require("../models");

module.exports = function(app) {
  // Get most recent (default setting)
  app.get("/", function(req, res) {
    db.Entries.findAll({
      include: [db.User],
      where: db.UserId,
      order: [["updatedAt", "DESC"]]
    }).then(function(data) {
      var hbsObject = {
        entries: data,
        users: data.email
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Get story entries when logged in
  app.get("/loggedIn", function(req, res) {
    db.Entries.findAll({
      include: [db.User],
      where: db.User.id,
      order: [["updatedAt", "DESC"]]
    }).then(function(data) {
      var hbsObject = {
        entries: data,
        users: data
      };
      res.render("loggedIn", hbsObject);
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
      res.render("newstory", hbsObject);
    });
  });

  app.get("/user/:id", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      // console.log("Data: " + Array.from(data));
      var hbsObject = {
        email: data
      };
      // console.log(hbsObject);
      res.render("loggedIn", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
