$(document).ready(function(){

    /* smoothScroll init */
    smoothScroll.init();


    /* scroll top button */ 
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });


    /* tooltip init */
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });
   
 
    
   /* filter portfolio */ 
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all") {
            $('.filter').show('1000');
        }
        else{
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }

    $(this).addClass("active");


    /* navbar mobile */
    $('.btn-open-navbar').click(function(){
        $('.navbar-mobile').css('right','0');
    });

    $('.btn-close-navbar, .link-navbar').click(function(){
        $('.navbar-mobile').css('right','-90%');
    });


    /* efect navbar */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $(".navbar").css('top' , '0%');
        } else {
            $(".navbar").css('top' , '-50%');
        }      
    });
    
    /* jquery nicescroll */
    $("body").niceScroll({cursorwidth:'10px' , scrollspeed: 70, mousescrollstep: 70});


    /* scroll up */
    $.scrollUp({scrollImg: true});


    /*carousel quotes references*/
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
 
});