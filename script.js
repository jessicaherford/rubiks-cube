var cube = $(".cube").cube();

// cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");

var button = document.getElementById('againButton');

$('button').click(function(){
  $('button').hide();
})

$(function(){
  $('button').hide();
  cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
  $('button').show();
});
