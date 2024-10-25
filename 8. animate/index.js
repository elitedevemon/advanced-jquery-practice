$(document).ready(function(){
  $('button').on({
    click: function(){
      $('.area').animate({
        width: '400px',
        height: '500px'
      });
    }
  })
});

