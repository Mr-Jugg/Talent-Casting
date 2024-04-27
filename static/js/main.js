$(document).ready(function(){
    $("#footer").load("footer.html");
});

$(document).ready(function(){
    $("#menu").load("menu.html");
});


$(document).ready(function(){
    $("#footer").load("footer.html");

    document.querySelector('.burger-menu').addEventListener('click', function() {
        var menu = document.querySelector('.menu');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});
