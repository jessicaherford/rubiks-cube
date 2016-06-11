var cube = $(".cube").cube();

cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");


// $('button').click(function(){
//   cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
// })

var button = document.querySelector("button");
  function once() {
    while(cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'")){
    button.removeEventListener("click", once);
  }
  }
  button.addEventListener("click", once);
