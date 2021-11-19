$(document).ready(function () {
    

    // SECTOR BOTONES ---------------------------------------------------------------------------
    $('.atacar').hover(function () {
            $('.texto-activo').text('Ataque basico normal');
            
        }, function () {
            $('.texto-activo').text('Elegi una accion');
        }
    );

    $('.especial').hover(function () {
            $('.texto-activo').text('Ataque especial basado en tu elemento');
            
        }, function () {
            $('.texto-activo').text('Elegi una accion');
        }
    );

    $('.objetos').hover(function () {
            $('.texto-activo').text('Abre tu bolsa de objetos');
            
        }, function () {
            $('.texto-activo').text('Elegi una accion');
        }
    );

    $('.abandonar').hover(function () {
            $('.texto-activo').text('Abandonar la pelea');
            
        }, function () {
            $('.texto-activo').text('Elegi una accion');
        }
    );

});