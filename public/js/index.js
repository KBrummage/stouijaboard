$(function() {
  $("#newSubmit").on("click", function(event) {
    event.preventDefault();

    var newTitle = $("#rndmPrmptFld")
      .val()
      .trim();
    var newEntry = $("#storyText")
      .val()
      .trim();

    if (newTitle !== "") {
      var newStory = {
        title: newTitle,
        // author: author,
        entry: newEntry
      };

      $.ajax("/api/entries", {
        type: "POST",
        data: newStory
      }).then(function() {
        console.log("New story logged");
        location.reload();
      });
    } else {
      $("#rndmPrmptFld").val("");
      $("#storyText").val("");
    }
  });
});
