var musicians = ["madonna", "taylor swift", "prince", "katy perry", "bruno mars"];

function displayMusicianGif() {
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
};

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < musicians.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("musician-btn");
          // Adding a data-attribute
          a.attr("data-name", musicians[i]);
          // Providing the initial button text
          a.text(musicians[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-musician").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var musician = $("#musician-input").val().trim();

        // Adding movie from the textbox to our array
        musicians.push(musician);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".musician-btn", displayMusicianGif);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

