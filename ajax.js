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

var button3456 = document.getElementById('button_step3456')

button3456.addEventListener('click', function () {

  var request3456 = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
  }).done(function (data) {
    console.log( 'REQUEST WAS SUCCESSFUL')
    var myElement = document.createElement( 'div' );
    var step3456 = document.querySelector('#step3456');
            myElement.innerHTML = data;
            step3456.append( myElement );
  }).fail( function( jqXHR, textStatus, errorThrown ) {
            console.log( 'REQUEST FAILED' );
            // console.log( textStatus, errorThrown );

            var msg = document.createElement( 'p' );
            msg.innerText = 'Whoops, something went wrong!';
            document.body.append( msg );
  }).always( function() {
            console.log( 'REQUEST COMPLETE' );
        } );

});

var button7 = document.getElementById('button_step7')

button7.addEventListener('click', function () {


var request7 = $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/count',
  method: 'GET',
  dataType: 'text'
}).done(function (data) {
  console.log( 'REQUEST WAS SUCCESSFUL')
  var myElement = document.createElement( 'div' );
  var step7 = document.querySelector('#step7');
          myElement.innerHTML = data;
          step7.append( myElement );
}).fail( function( jqXHR, textStatus, errorThrown ) {
          console.log( 'REQUEST FAILED' );
          // console.log( textStatus, errorThrown );

          var msg = document.createElement( 'p' );
          msg.innerText = 'Whoops, something went wrong!';
          document.body.append( msg );
}).always( function() {
          console.log( 'REQUEST COMPLETE' );
      } );
});
});
