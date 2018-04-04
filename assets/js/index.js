$(document).ready(function(){
  AOS.init({
    once: true,
  });
  $(".languagepicker > a:first-child").on("click",function(e){
    e.preventDefault()
  });
  function displayModal() {
    $('.modal').modal('show');
  }
});
