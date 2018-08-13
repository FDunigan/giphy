var musicians = [""];

function displayMusicianGif() {
    var musician = $(this).attr("data-musician");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        musician + "&api_key=aJTslSUGSOZh2Vq7u6njDQYEgXBrLbOm&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var musicianDiv = $("<div>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var musicianImage = $("<img>");

                musicianImage.attr("src", results[i].images.fixed_height_still.url);
                musicianImage.attr("data-still", results[i].images.fixed_height_still.url);
                musicianImage.attr("data-animate", results[i].images.fixed_height.url);
                musicianImage.attr("data-state", "still");
                musicianImage.addClass("musicianImage");

                musicianDiv.append(p);
                musicianDiv.append(musicianImage);
                $("#gifs-appear-here").remove()

                $("#gifs-appear-here").prepend(musicianDiv);

            };
            $(".musicianImage").on("click", function () {
                var state = $(this).attr("data-state");
                console.log(state);

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });
};

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < musicians.length; i++) {

        var b = $("<button>");

        b.addClass("musician-btn");

        b.attr("data-musician", musicians[i]);

        b.text(musicians[i]);

        $("#buttons-view").append(b);

    }
}

$("#add-musician").on("click", function (event) {

    event.preventDefault();

    var musician = $("#musician-input").val().trim();

    musicians.push(musician);

    console.log(musicians);

    renderButtons();

});

$(document).on("click", ".musician-btn", displayMusicianGif);

renderButtons();



