$(document).ready(function () {
    //make the limit choice menu
    $("#questionOne").append(`<option class="limitChoice" value="1">1 word limit</option>`);
    for (var i = 5; i < 26; i = i + 5) {
        $("#questionOne").append(`<option class="limitChoice" value="${i}">${i} word limit</option>`);
    }
    for (var i = 30; i < 51; i = i + 10) {

        $("#questionOne").append(`<option class="limitChoice" value="${i}">${i} word limit</option>`);
    }
    for (var i = 75; i < 251; i = i + 25) {

        $("#questionOne").append(`<option class="limitChoice" value="${i}">${i} word limit</option>`);
    }

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

    //open up card in new window to edit.
    $(document).on("click", ".card", function (e) {
        e.preventDefault();
        var storyID = this.id;
        // var story = {};
        // story.prompt = this.children[1].children[0].innerHTML;
        // story.text = this.children[1].children[1].innerHTML;
        // story.id = this.id;

        console.log(storyID);
        url = `/story/${storyID}`;
        console.log(url);
        // $.ajax({
        //         url: url,
        //         method: "GET",
        //     })
        //     .then(function (resp) {
                // console.log(resp);
                window.location = url;
                console.log("wtf is wrong")
            // })
    })
})