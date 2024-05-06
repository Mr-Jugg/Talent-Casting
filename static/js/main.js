$(document).ready(function(){
    $("#footer").load("footer.html");
    $("#menu").load("menu.html", function() {
        $('.burger-menu').on('click', function() {
            $('.dropdown-menu').toggle();
        });
    });
});
