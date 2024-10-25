// minified ready function
$(function () {
  console.log('minified ready function')
});

//jQuery ready function
$(document).ready( () => {
  console.log('ready function');
});

//without jquery ready function which will load first of all.
console.log('without ready function');

