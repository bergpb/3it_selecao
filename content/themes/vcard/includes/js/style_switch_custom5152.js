jQuery(document).ready(function(){
jQuery(".corner").click(function(){

    jQuery('#customizer').toggleClass('s-open');


});


});



function swapStyleSheet(sheet){
document.getElementById('pagestyle').setAttribute('href', sheet);
}
