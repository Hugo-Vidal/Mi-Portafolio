$(function(){

  $("a").click(function(event){
    if (this.hash !== "") { //si this (a.hash) es no identico a nada, ejecuta lo siguiente
      event.preventDefault(); //Con esto, prevenimos lo que hacia antes.

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

});

