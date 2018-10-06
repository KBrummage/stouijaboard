const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});


$(document).on("click", "#randomGen", function(e){
    e.preventDefault();
    $.ajax({
        url: "https://www.ineedaprompt.com/dictionary/default/prompt?q=adj+noun+adv+verb+noun+location",
        method: "GET"
    }).then(function(response){
        console.log(response.english);
        $("#rndmPrmptFld").val("");
        $("#rndmPrmptFld").val(response.english);
    })
})