$(document).ready(function() {
    $("#button-animation").click(function() {
      var button = $(this);
      button.addClass("button-animation");
  
      setTimeout(function() {
        button.removeClass("button-animation");
      }, 1000);
    });
  });