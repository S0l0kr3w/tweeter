$(document).ready(function() {
  // alert codes hidden to enable slideDown
  $(".alert-length").hide();
  $(".alert-empty").hide();

  $("#tweet-text").on("keyup", function(event) {
    $(".alert-empty").slideUp("slow");
    // char counter 
    const counter = 140 - this.value.length;
    const textCounter = $(this)
                        .closest(".new-tweet")
                        .find(".counter");
    textCounter.val(counter);

    if (counter < 0 ) {
      // inserts error for counter to turn red 
      textCounter.addClass("error");
      // alert code for characters > 140 
      $(".alert-length").slideDown("slow"); 
      // disable submission when characters > 140 
      $("#submit-button").prop('disabled', true);
    } else {
      $(".alert-length").slideUp("slow");
      textCounter.removeClass("error");
      $("#submit-button").prop('disabled', false);
    }
  });

});