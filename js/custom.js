// adicionando  scrollspy na tag body
$('body').scrollspy({target: "#navbar", offset: 20});



// scroll mais suave
$("#navbar a").on('click', function(event) {

  if (this.hash !== "") {


    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });

  } // fim do if

});

//fechar o menu apos o click
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

