$(document).ready(function(){
  $('button').on({
    click: function(){
      // $('.area').slideUp();
      // $('.area').slideDown();
      $('.area').stop(true).slideToggle();
    }
  })
});

