$(document).ready(function() {
  // alert code hidden
  $(".alert-length").hide();
  $(".alert-empty").hide();
  
  $("#tweet-text").on("keyup", function(event) {
    $(".alert-empty").slideUp("slow");
    const counter = 140 - this.value.length;
    const textCounter = $(this)
                        .closest(".new-tweet")
                        .find(".counter");
    textCounter.val(counter);
    // add/remove class for counter's CSS 

    if (counter < 0 ) {
      textCounter.addClass("error");
      $(".alert-length").slideDown("slow"); 
      // $("#alert").slideDown("slow");
      // alert(`Limit of 140 characters per tweet!`)
      $("#submit-button").prop('disabled', true);
    } else {
      $(".alert-length").slideUp("slow");
      textCounter.removeClass("error");
      $("#submit-button").prop('disabled', false);
    }
  
  });

});