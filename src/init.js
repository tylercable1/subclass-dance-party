$(document).ready(function() {
  window.dancers = [];
  window.isPlaying = false;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlinkyDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    
    window.dancers.push(dancer);

    
  });

  

  $('.lineUpButton').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();

    }
  });


  $('.danceOffButton').on('click', function(event) {
    var growingDancerDanceOff = false;
    var blinkyDancerDanceOff = false;
    

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeGrowingDancer && !growingDancerDanceOff) {
        window.dancers[i].danceOff();
        growingDancerDanceOff = true;
      }
      if (window.dancers[i] instanceof makeBlinkyDancer && !blinkyDancerDanceOff) {
        window.dancers[i].danceOff();
        blinkyDancerDanceOff = true;
      }
    }

  });



  $('body').on('keypress', function(event) {

    if (event.keyCode === 32 && window.isPlaying) {
      document.getElementById('music').pause();
    }       
    if (event.keyCode === 32 && !window.isPlaying) {
      document.getElementById('music').play();
    }
    
    window.isPlaying = !window.isPlaying;   
  });

});

