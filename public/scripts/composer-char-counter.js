$(document).ready(function() {
  $("#tweet-text").on("keypress", function(event) {
    const counter = 140 - this.value.length;
    const textCounter = $(this)
                        .closest(".new-tweet")
                        .find(".counter");
    textCounter.val(counter);
    // add/remove class for counter's CSS 

    if (counter < 0 ) {
      textCounter.addClass("error");
      alert(`Limit of 140 characters per tweet!`)
      $("#submit-button").prop('disabled', true);
    } else {
      textCounter.removeClass("error");
      $("#submit-button").prop('disabled', false);
    }
  });

});