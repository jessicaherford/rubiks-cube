var cube = $(".cube").cube();

// cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");

var button = document.getElementById('againButton');



$(function(){
  $('button').attr("disabled", true);
  cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");



});

$('button').click(function(){
  $('button').attr("disabled", false);
  cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
})
 // $("#ajaxStart").attr("disabled", true);
