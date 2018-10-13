$(document).ready(function() {
  $(".far.fa-heart").on("click", solid);
});

function solid() {
  var id = this.id;
  var heart = this;
  $.post("/api/fav/" + id)
    .then(function() {
      $(heart)
        .addClass("fas")
        .removeClass("far");
    })
    .catch(function() {
      console.log("unable to favorite");
    });
}
