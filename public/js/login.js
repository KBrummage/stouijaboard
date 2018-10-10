$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#emailInput");
  var passwordInput = $("input#passwordInput");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        //  window.location.replace(data);
        // Put this code after user first log in

        $(window).load(function() {
          sessionStorage.setItem("status", "loggedIn");
        });

        // When ever user clicks a link you can check like

        if (sessionStorage.getItem("status") !== null) {
          //redirect to page
          console.log("you are logged in");
        } else {
          //show validation message
          console.log("you are not logged in");
        }
        console.log("You are logged in");
        location.reload();
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
