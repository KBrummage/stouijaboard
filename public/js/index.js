$(document).ready(function() {
  $("#newSubmit").on("click", function(event) {
    event.preventDefault();

    var newTitle = $("#rndmPrmptFld")
      .val()
      .trim();
    var newEntry = $("#storyText")
      .val()
      .trim();
    var newAuthor = $("#emailInput")
      .val()
      .trim();

    if (newTitle !== "") {
      var newStory = {
        title: newTitle,
        entry: newEntry
      };

      $.ajax("/api/entries", {
        type: "POST",
        data: newStory
      }).then(function() {
        location.reload();
      });
    } else {
      $("#rndmPrmptFld").val("");
      $("#storyText").val("");
    }

    if (newAuthor !== "") {
      var storyTeller = {
        author: newAuthor
      };

      $.ajax("/api/users", {
        type: "POST",
        data: storyTeller
      }).then(function() {
        location.reload();
      });
    } else {
      $("##emailInput").val("");
    }
  });
});
