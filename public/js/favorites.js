$(document).on("click", ".fa-heart", function() {
  var id = this.id;
  var heart = this;
  if ($(heart).hasClass("far")) {
    $.post("/api/fav/" + id)
      .then(function() {
        $(heart)
          .addClass("fas")
          .removeClass("far");
      })
      .catch(function() {
        console.log("unable to favorite");
      });
  } else {
    $(heart)
      .addClass("far")
      .removeClass("fas");
  }
});
