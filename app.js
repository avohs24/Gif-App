var gifArray = ['dog', 'cat', 'rabbit', 'turtle', 'skunk'];


  for(var i = 0; i < gifArray.length; i++){
    var gifButtons = $('<button>');
    gifButtons.attr('data-animal', gifArray[i]);
    gifButtons.attr('id', 'animalButtons');
    gifButtons.addClass('btn btn-info');
   

    gifButtons.html(gifArray[i]);
    $('#buttonArea').append(gifButtons);
    console.log(gifArray[i]);
  }


//function for click on buttons already on page
$("btn btn-info").on('click', function(){
  var buttonVal = $(this).attr('data-animal');
  console.log(buttonVal);

//hooking into Giphy API 
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        buttonVal + "&api_key=dc6zaTOxFJmzC&limit=10";

		  $.ajax({
		    url: queryURL,
		    method: "GET"
		  })

		  .done(function(response){
		    var results = response.data; 

		      for(var i = 0; i < results.length; i++) {
		        var gifDiv = $("<div>");

		        var rating = results[i].rating;

		        var p = $("<p>").text("Rating: " + rating);

		        var image = $("<img>");
		        image.attr("src", results[i].images.fixed_height.url);
		        image.attr('id', 'newImages');

		        gifDiv.prepend(p);
		        gifDiv.prepend(image);

		        $('#displayArea').prepend(gifDiv);

		      }

		  })

})

//function for submit button and creating new button on DOM

$('#submitButton').on('click', function(event) {
  var newAnimal = $('#userInput').val().trim();
  var newButton = $('<button>' + newAnimal);

  newButton.attr('data-animal', newAnimal);
  newButton.attr('id', 'animalButtons');
  newButton.addClass('btn btn-info');

  newButton.html(newAnimal);
  console.log(newAnimal);

  gifArray.push(newAnimal);

  printButton = $('#buttonArea').append(newButton);

  console.log(gifArray);



})
