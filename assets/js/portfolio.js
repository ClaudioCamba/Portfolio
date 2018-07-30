$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
var offset = 60;
    $('.navbar li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    });
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
