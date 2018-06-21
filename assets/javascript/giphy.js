var musicians = ["freddie mercury", "neil peart", "john bonham", "jimi hendrix", "david gilmour", "eddie vedder"];

function displayMusicianGif() {
    var musician = $(this).attr("data-musician");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    musician + "&api_key=nMb2MXAWMMnSaR0o3C8CkWcrig7hVTc7&limit=10";
  
    $.ajax({
     url: queryURL,
     method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);

        console.log(response);
            
    var results = response.data;
  
    for (var i = 0; i < results.length; i++) {
  
    var musicianDiv = $("<div>");
  
    var p = $("<p>").text("Rating: " + results[i].rating);
  
    var musicianImage = $("<img>");
              
    musicianImage.attr("src", results[i].images.fixed_height.url);
  
    musicianDiv.append(p);
    musicianDiv.append(musicianImage);
  
    $("#gifs-appear-here").prepend(musicianDiv);
    
};
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

$("#add-musician").on("click", function(event) {

event.preventDefault();
        
    var musician = $("#musician-input").val().trim();

    musicians.push(musician);

    renderButtons();

});

$(document).on("click", ".musician-btn", displayMusicianGif);

renderButtons();

