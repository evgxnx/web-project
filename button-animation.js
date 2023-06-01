$(document).ready(function() {
    $("#button-animation").click(function() {
      var button = $(this);
      button.addClass("button-animation");
  
      // Remove the animation class after a delay
      setTimeout(function() {
        button.removeClass("button-animation");
      }, 1000);
    });
  });