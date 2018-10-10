$(document).ready(function () {
    var el = document.querySelector("#module");

    el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = -e.offsetX / 10 + "px";
        el.style.backgroundPositionY = -e.offsetY / 50 + "px";
    });

    var word = 0;

    //show word limit options
    $(document).on("click", "#questionOne", function (event) {
        event.preventDefault();
        $(".limitChoice").detach();
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
    })

    //select word limit
    $("#questionOne").on('change', function (e) {
        e.preventDefault();

        word = $("#questionOne option:selected").val();
        console.log(word);
        console.log("Hello World");
    })

    //random quote generator
    $(document).on("click", "#randomGen", function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://www.ineedaprompt.com/dictionary/default/prompt?q=adj+noun+adv+verb+noun+location",
            method: "GET"
        }).then(function (response) {
            console.log(response.english);
            $("#rndmPrmptFld").val("");
            $("#rndmPrmptFld").val(response.english);
        })
    })


    $("#storyText").on('keyup', function (e) {
        e.preventDefault();

        var words = this.value.match(/\S+/g).length;

        if (words > word) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 200).join(" ");
            // Add a space at the end to make sure more typing creates new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#wordCount').text(`${200 - words} left`);
        }
    });

})