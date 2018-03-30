$(document).ready(function(){
  AOS.init({
    once: true,
  });
  $('.my-paroller').paroller();
  $("#matte").click(function () {
    $("#select-type").val("matte");
  });
  $("#jet").click(function () {
    $("#select-type").val("jet");
  });
  $("#down-button").click(function() {
    $('html, body').animate({
      scrollTop: $(".first-section").offset().top
    }, 750);
  });
});
