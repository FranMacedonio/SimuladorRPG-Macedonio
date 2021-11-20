$(document).ready(function () {

    $('.personaje-cartel').append(`<h3>${jugar[0].nombre}</h3>`);
    $('.personaje-juego').append(`<img src="../media/${jugar[0].clase}/${jugar[0].raza}/a.png">`);
    $('.especial span').text(`${jugar[0].elemento}`);


    // SECTOR DE INICIO -------------------------------------------------------------------------

    $('.texto').css('width', '93.5%');
    $('.personaje-cartel').hide();
    $('.enemigo-cartel').hide();
    $('.texto-activo').text(`Era un dia tranquilo en la vida de ${nombreU}..`);
    $('.btn-textoInicio').fadeIn();
    $('.btn-textoInicio').click(function (e) { 
        e.preventDefault();
        $('.texto-activo').text(`Hoy habia decidido tomar otro camino hacia la ruta de su trabajo de ${claseU} para cambiar un poco la rutina..`);
    
        $('.personaje-juego img').animate({'left': '70px'}, 1500);
    
        $('.btn-textoInicio').click(function (e){
            e.preventDefault();
            $('.texto-activo').text('Mientras iba caminando se cruzo con una botella en el piso y como debe hacerse la pateo con toda sus fuerzas..');
            $('.btn-textoInicio').hide();
    
            setTimeout(() => {
                $('.texto-activo').text('*Ruido de golpe*');
                setTimeout(() => {
                    $('.texto-activo').text('"Que te pasa a vos casi me sacas un ojo con esa botella"');
                    $('.enemigo-juego img').animate({'right': '70px'}, 1500);
                    setTimeout(() => {
                        $('.texto-activo').text('"Ahora vas a ver con quien te metiste.."');
                        setTimeout(() => {
                            $('.texto-activo').text(`Al patear la botella ${nombreU} sin querer golpeo a un borracho que estaba durmiendo al lado de un arbol..`);
                            $('.btn-textoInicioDos').fadeIn();
                            setTimeout(() => {
                                $('.personaje-cartel').fadeIn();
                                $('.enemigo-cartel').fadeIn();
                            }, 1000)
    
                            $('.btn-textoInicioDos').click(function (e) { 
                                e.preventDefault();
                                $('.texto-activo').text(`A ${nombreU} no le queda otra que hacerle frente al borracho.`);
                                $('.btn-textoInicioDos').hide();
                                $('.btn-textoFinal').show();
    
                                $('.btn-textoFinal').click(function (e) { 
                                    e.preventDefault();
                                    $('.btn-textoFinal').hide();
                                    $('.texto').css('width', '46%');
                                    $('.texto-activo').text('Elegi una accion');
                                });
                            });
                        }, 3000);
                    }, 3000);
                }, 1000);
            }, 6000);
        });
    });

    // $('.personaje-juego img').css({'left': '70px'});
    // $('.enemigo-juego img').css({'right': '70px'});

});

// VARIABLES --------------------------------------------------------------------------------
let nombreU = jugar[0].nombre;
let claseU = jugar[0].clase;
let razaU = jugar[0].raza;
let elementoU = jugar[0].elemento;
let usuarioPV = 100;
let enemigoPV = 100;
let imgU = '.personaje-juego img';
let imgE = '.enemigo-juego img';


// SECTOR BOTONES ---------------------------------------------------------------------------
$('.atacar').hover(function () {

        if (claseU == 'guerrero'){
            $('.texto-activo').text('Atacas con tu espada vikinga por 10/20 de daño');
        } else if (claseU == 'arquero'){
            $('.texto-activo').text('Atacas con tu arco y flecha por 10/20 de daño');
        } else if (claseU == 'mago'){
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

        if (elementoU == 'fuego'){
            $('.texto-activo').text('Provocas una tormenta de fuego por 5/30 de daño');
        } else if (elementoU == 'agua'){
            $('.texto-activo').text('Provocas un tsunami por 5/30 de daño');
        } else if (elementoU == 'aire'){
            $('.texto-activo').text('Provocas un tornado por 5/30 de daño');
        } else if (elementoU == 'tierra'){
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
// ----------------------------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------------------------

// SECTOR DE FUNCIONES --------------------------------------------------------------------------
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
        $('.texto-activo').text('Elegi una accion');
    });
}

function vidaUsuario (daño){
    usuarioPV -= daño;

    impacto (imgU);

    $('.personaje-vida__barra').animate({'width': usuarioPV + '%'}, 500)
    $('.personaje-vida__barra').addClass('barraV');
    setTimeout(() => {
        $('.personaje-vida__barra').removeClass('barraV');
    }, 350);
}
function vidaEnemigo (daño){
    enemigoPV -= daño;

    impacto (imgE);

    $('.enemigo-vida__barra').animate({'width': enemigoPV + '%'}, 500)
    $('.enemigo-vida__barra').addClass('barraR');
    setTimeout(() => {
        $('.enemigo-vida__barra').removeClass('barraR');
    }, 350);
}

function impacto (objeto){
    $(objeto).addClass('impacto');
    setTimeout(() => {
        $(objeto).removeClass('impacto');
    }, 350);
}