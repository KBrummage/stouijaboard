module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      console.log(req.user);
    }
    res.render("index");
  });
  app.get("/loggedIn", function(req, res) {
    res.render("loggedIn");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
