$(document).ready(function(){
  $('input').on({
    focus: function(){
      $(this).val('Focused');
    },
    blur: function(){
      $(this).val('Blur');
    }
  })
});

