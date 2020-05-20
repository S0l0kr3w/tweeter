$(document).ready(function() {
  $("#tweet-text").on("keypress", function(event) {
    const counter = 140 - this.value.length;
    const textCounter = $(this)
                        .closest(".new-tweet")
                        .find(".counter");
    textCounter.val(counter);
    // add/remove class for counter's CSS 
    counter < 0 ? textCounter.addClass("error"):
                  textCounter.removeClass("error");
  });

});