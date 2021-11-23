$(document).ready(function () {
    
    $('#botones').hide();
    $('.cartel-botones').hide();
    $('.texto-cartel').hide();
    $('.cartel').hide();
    

    $('#telon').fadeOut(600);
        
    setTimeout(() => {
        $('#botones').fadeIn();
        $('.cartel-botones').fadeIn();
        $('.texto-cartel').fadeIn();
        $('.cartel').fadeIn();
    }, 300);

    $('.botonTelon').click(function (e) {
        e.preventDefault();

        $('#botones').fadeOut(500);
        $('.cartel-botones').fadeOut(500);
        $('.texto-cartel').fadeOut(500);
        $('.cartel').fadeOut(500);

        $('#telon').fadeIn(1000);

        setTimeout(() => {
            window.location.href = e.target.href;
        }, 1500);

    });
    
});