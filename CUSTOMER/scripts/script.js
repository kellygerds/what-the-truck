//hamburger menu//
jQuery(document).ready(function($) {
  $('.mobile-nav-toggle').on('click', function(e){
      e.preventDefault();
      $('.mobile-nav-wrapper').toggleClass('active');

  });

  $('.mobile-nav-exit').on('click', function(e){
    e.preventDefault();
    $('.mobile-nav-wrapper').removeClass('active');
  })


 setTimeout(function(){
    $('#social').removeClass('noNotification');
    $('#social').addClass('socialNotification');
   // $(this).removeClass(‘tab’);
    //$(this).addClass(‘activetab’);
  }, 3000);


});

var main = function() {

  /* Ideas for additions:
    * Allow user to select a post
    * Add an "x" box to remove a post 
  */

  // Post the contents of status box to the page  
  $('.btn').click(function() {
    var post = $('.status-box').val();

    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text("140");
    $('.btn').addClass("disabled");
  });

  // Update the charCount counter
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;

    // Disable posting of text if charCount > 140 || charCount < 0
    $('.counter').text(charactersLeft);

    if (charactersLeft < 0) {
      $('.btn').addClass("disabled");
    } else if (charactersLeft > 140) {
      $('.btn').addClass("disabled");
    } else {
      $('.btn').removeClass("disabled");
    }
  });

  $('.btn').addClass("disabled");
}

$(document).ready(main);




