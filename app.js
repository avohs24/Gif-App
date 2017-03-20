var gifArray = ['dog', 'cat', 'rabbit', 'turtle', 'skunk'];



  for(var i = 0; i < gifArray.length; i++){
  var gifButtons = $('<button>');
  gifButtons.html(gifArray[i]);
  $('#displayArea').append(gifButtons);
  console.log(gifArray[i]);
}