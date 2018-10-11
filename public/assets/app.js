$(document).ready(function () {

    $("#questionOne").append(`<option class="limitChoice" value="1">1 word limit</option>`)
    for (var i = 5; i < 26; i = i + 5) {
        $("#questionOne").append(`<option class="limitChoice" value="${i}">${i} word limit</option>`);
    }
    for (var i = 30; i < 51; i = i + 10) {

        $("#questionOne").append(`<option class="limitChoice" value="${i}">${i} word limit</option>`);
    }
    for (var i = 75; i < 251; i = i + 25) {

        $("#questionOne").append(`<option class="limitChoice" value="${i}">${i} word limit</option>`);
    }

    const el = document.querySelector("#module");


    el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = -e.offsetX / 100 + "px";
        el.style.backgroundPositionY = -e.offsetY / 50 + "px";
    });

    var word = 0;

    //show word limit options
    $(document).on("change", "#questionOne", function (event) {
        event.preventDefault();
        word = $("#questionOne option:selected").attr("value");
        console.log(word);
        console.log("Hello World");


    })

    //random quote generator
    $(document).on("click", "#randomGen", function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://www.ineedaprompt.com/dictionary/default/prompt?q=adj+noun+verb",
            method: "GET"
        }).then(function (response) {
            console.log(response.english);
            $("#rndmPrmptFld").val("");
            $("#rndmPrmptFld").val(response.english);
        })



    })

   

})