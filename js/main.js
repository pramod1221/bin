$(document).ready(function(){
  $(".open").on("click",function(){
    $(".top_navigation_wrapper").removeClass("mobile_wrapper_toggle");
    $(".close").removeClass("hide");
    $(this).addClass("hide");
  });
  $(".close").on("click", function () {
    $(".top_navigation_wrapper").addClass("mobile_wrapper_toggle");
    $(".open").removeClass("hide");
    $(this).addClass("hide");
  });
});