$(document).ready(function(){
    $("#footer").load("footer.html");
    $("#menu").load("menu.html", function() {
        $('.burger-menu').on('click', function() {
            $('.dropdown-menu').toggle();
            });

      // Add event listener to the document
            $(document).on('click', function(event) {
                // Check if the target of the click event is outside the burger menu
                if (!$(event.target).closest('.burger-menu').length) {
                    // If it is, close the burger menu
                    $('.dropdown-menu').hide();
                }
        });
    });
});
