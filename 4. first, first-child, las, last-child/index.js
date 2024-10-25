$(document).ready(function(){
  $('.button1').click(function(){
    $('ul li:first').hide();
  });
  $('.button2').click(function () {
    $('ul li:first-child').hide();
  });
  $('.last').click(function () {
    $('ul li:last').hide();
  });
  $('.last-child').click(function () {
    $('ul li:last-child').hide();
  })
});

