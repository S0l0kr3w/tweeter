/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {

  renderTweets = (tweets) => {
    // loops through tweets
    $.each(tweets, function(index, tweetObject) {
    // calls createTweetElement for each tweet
      $(".tweets").append(createTweetElement(tweetObject))//append to tweets?
      // takes return value and appends it to the tweets container
    });
  };
  
  //
  requestPosts = (method, url) => {
    console.log(method, url);
    $.ajax({
      method, 
      url
    })
      .done(function(result) {
        console.log(result);
        renderTweets(result)
      })
      .fail(function() {
        console.log(`Error with the request`)
      })
      .always(function() {
        console.log(`Request completed`)
      });
  };
  //event listener on submit
  $(".new-tweet").on("submit", function(event) {
    event.preventDefault();
    const tweetText = $(this)
      .closest(".new-tweet")
      .find("#tweet-text");
    console.log(tweetText);
    const content = tweetText.serialize();
    $.ajax("/tweets", { method: 'POST', data: content })
    .then(function (data) {
      console.log(data);
    })
   
  });

  createTweetElement = (tweetObject) => {

    const $article = $("<article>");
    const $header = $("<header>")
      
    const $avatar = $("<img>")
      .addClass("avatar")
      .attr("src", tweetObject.user.avatars)
      .appendTo($header);

    const $username = $("<span>")
      .addClass("username")
      .text(tweetObject.user.name)
      .appendTo($header);

    const $handle = $("<span>")
      .addClass("handle")
      .text(tweetObject.user.handle)
      .appendTo($header);

    const $content = $("<p>")
      .addClass("content")
      .text(tweetObject.content.text)
    
    const $footer = $("<footer>")

    const $time = $("<span>")
      .addClass("time")
      .text(tweetObject.created_at)
      .appendTo($footer);
    
    const $retweenIcon = $("<i>")
      .addClass("fas fa-retweet")
      .appendTo($footer);

    const $heartIcon = $("<i>")
      .addClass("fas fa-heart")
      .appendTo($footer);

    const $flagIcon = $("<i>")
      .addClass("fab fa-font-awesome-flag")
      .appendTo($footer);
    
    $article.append($header);
    $article.append($content);
    $article.append($footer);

    console.log($article.html());
  
    return $article;
  };

  requestPosts("GET", "http://localhost:8080/tweets");

});