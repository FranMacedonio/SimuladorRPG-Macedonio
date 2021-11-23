$(document).ready(function () {
    
    $('#telon').fadeOut();

    $('.botonTelon').click(function (e) { 
        e.preventDefault();
        
        $('#telon').fadeIn();
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 1500);
    });

});