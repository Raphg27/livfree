$(document).ready(function(){
  AOS.init({
    once: true,
  });
  $(".languagepicker > a:first-child").on("click",function(e){
    e.preventDefault()
  });
  $(".email-form").on('submit', function(){
   $('#myModal').show();
})
});
