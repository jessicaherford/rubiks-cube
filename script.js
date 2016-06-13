var cube = $(".cube").cube();

// cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");

var button = document.getElementById('againButton');


//
// $(function(){
//   $('button').attr("disabled", true);
//   cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
//
// $('button').attr("disabled", false);
//  // $("#ajaxStart").attr("disabled", true);
// });
//
// $('button').click(function(){
//   cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
// })

$(function() {

    jQuery.fn.extend({
        disable: function(state) {
            return this.each(function() {
                this.disabled = state;
            });
        }
    });

    // $("#deliveryNext").is(":disabled")

    $(function(){
      cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
      $('button').is(":disabled")


    $('button').click(function(){
      cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
    })
    });
});
//
//
// $('button').disable(true);
// cube.execute("x (R' U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 (R U R') D2 (R U' R') D2 R2 x'");
// $('button').disable(false);
