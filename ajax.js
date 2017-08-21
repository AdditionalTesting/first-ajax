document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
var button12 = document.getElementById('button_step12')

button12.addEventListener('click', function () {

  var request12 = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType: 'text'
  });
})

});
