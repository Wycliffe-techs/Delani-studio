$(document).ready(function(){
  $(".img1").click(function(){
    $(".design").toggle();
    $(".click").toggle();
  })

  $(".img2").click(function(){
    $(".development").toggle();
    $(".click2").toggle();
  })

  $(".img3").click(function(){
    $(".product").toggle();
    $(".click3").toggle();
  })
});


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

 