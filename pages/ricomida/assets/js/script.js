$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  setTimeout(
    function() 
    {
      $(".btn-msg").click(function(){
          
      alert("hola")
      });
    }, 2000);

    $( ".btn-msg" ).click(function() {
    $( ".btn-modal" ).remove();
    });
