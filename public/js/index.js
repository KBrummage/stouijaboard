$(function() {
  // Function to create a new story in the "New Story" modal
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
        // user: getUsers,
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

// Function to sort entries in chronological order when "Most Recent" is selected
$("#recent").on("click", function(e) {
  e.preventDefault();
  url = "/loggedIn";
  window.location = url;
});

// Add new story line to the selected story
$(".updateStory").on("click", function(event) {
  event.preventDefault();

  var id = $(this).data("id");
  var origEntry = $(".entry").text();
  console.log(origEntry);
  var contEntry =
    origEntry +
    "  " +
    $("#contributeText")
      .val()
      .trim();
  console.log(contEntry);
  console.log(id);

  var storyStatus = {
    entry: contEntry
  };

  $.ajax("/api/contribution/" + id, {
    type: "PUT",
    data: storyStatus
  }).then(function() {
    console.log("Story has been updated");
    location.reload();
  });
});

// Return to the main loggedIn page
$(".return").on("click", function(event) {
  event.preventDefault();
  window.location.replace("/loggedIn");
});
