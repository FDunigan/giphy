var musicians = ["madonna", "taylor swift", "prince", "katy perry"];

$("button").on("click", function() {
    var musician = $(this).attr("data-musician");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        musician + "&api_key=nMb2MXAWMMnSaR0o3C8CkWcrig7hVTc7&limit=10";
  
    $.ajax({
     url: queryURL,
     method: "GET"
    })
    .then(function(response) {
            
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
});

