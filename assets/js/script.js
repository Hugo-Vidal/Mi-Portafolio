$(function(){

  $("a").click(function(event){
    if (this.hash !== "") { 
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 150)
  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

  $('[data-toggle="tooltip"]').tooltip();

});

