$(document).ready(function () {

    $('.personaje-cartel').append(`<h3>${jugar[0].nombre}</h3>`);
    $('.personaje-juego').append(`<img src="../media/${jugar[0].clase}/${jugar[0].raza}/a.png">`);

});


// SECTOR BOTONES ---------------------------------------------------------------------------
$('.atacar').hover(function () {

        if (jugar[0].clase == 'guerrero'){
            $('.texto-activo').text('Atacas con tu espada vikinga por 10/20 de daño');
        } else if (jugar[0].clase == 'arquero'){
            $('.texto-activo').text('Atacas con tu arco y flecha por 10/20 de daño');
        } else if (jugar[0].clase == 'mago'){
            $('.texto-activo').text('Atacas con tu hechizo magico por 10/20 de daño');
        }
        
    }, function () {
        $('.texto-activo').text('Elegi una accion');
    }
);
$('.atacar').click(function (e) { 
    e.preventDefault();
    
    displayInicial(`${jugar[0].nombre} se la come`)
    displaySiguiente(`Joda amigo no te enojes`)

});
// ----------------------------------------------------------------------------------------------



$('.especial').hover(function () {

        if (jugar[0].elemento == 'fuego'){
            $('.texto-activo').text('Provocas una tormenta de fuego por 5/30 de daño');
        } else if (jugar[0].elemento == 'agua'){
            $('.texto-activo').text('Provocas un tsunami por 5/30 de daño');
        } else if (jugar[0].elemento == 'aire'){
            $('.texto-activo').text('Provocas un tornado por 5/30 de daño');
        } else if (jugar[0].elemento == 'tierra'){
            $('.texto-activo').text('Provocas una avalancha de rocas por 5/30 de daño');
        }
        
    }, function () {
        $('.texto-activo').text('Elegi una accion');
    }
);
$('.especial').click(function (e) { 
    e.preventDefault();
    
    let usuario


});
// ----------------------------------------------------------------------------------------------

let usuarioPV = 100;
let enemigoPV = 100;


$('.objetos').hover(function () {
        $('.texto-activo').text('Abre tu bolsa de objetos');
        
    }, function () {
        $('.texto-activo').text('Elegi una accion');
    }
);
$('.objetos').click(function (e) { 
    e.preventDefault();
    
    displayInicial ('Abriste tu bolsa de objetos')
    displaySiguiente ('La bolsa esta vacia, te olvidaste los objetos en la mesita de luz..')
});


$('.abandonar').hover(function () {
        $('.texto-activo').text('Abandonar la pelea');
        
    }, function () {
        $('.texto-activo').text('Elegi una accion');
    }
);
$('.abandonar').click(function (e) { 
    e.preventDefault();

    displayInicial ('Intentaste huir de la pelea pero Larry no te dejo');
    displaySiguiente ('Te pego un chatetazo y te saco 1PV');
    vidaUsuario (1);
    
});

function displayInicial (texto){
    $('.texto').css('width', '93.5%');
    setTimeout(function (){
        $('.texto-activo').text(texto);
    }, 10);
    
    $('.btn-textoUno').show();
}

function displaySiguiente (texto){

    $('.btn-textoUno').click(function (e) { 
        e.preventDefault();
        $('.texto-activo').text(texto);
        $('.btn-textoUno').hide();
        $('.btn-textoDos').show();
    });
    $('.btn-textoDos').click(function (e) { 
        e.preventDefault();
        $('.btn-textoDos').hide();
        $('.texto').css('width', '46%');
    });
}

function vidaUsuario (daño){
    usuarioPV -= daño;

    $('.personaje-vida__barra').animate({'width': usuarioPV + '%'}, 500)
}
function vidaEnemigo (daño){
    enemigoPV -= daño;

    $('.enemigo-vida__barra').animate({'width': enemigoPV + '%'}, 500)
}