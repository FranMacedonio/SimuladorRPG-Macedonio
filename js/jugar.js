$(document).ready(function () {

    $('.personaje-cartel').append(`<h3>${jugar[0].nombre}</h3>`);
    $('.personaje-juego').append(`<img src="../media/${jugar[0].clase}/${jugar[0].raza}/a.png">`);


    // SECTOR DE INICIO -------------------------------------------------------------------------

    // $('.texto').css('width', '93.5%');
    // $('.personaje-cartel').hide();
    // $('.enemigo-cartel').hide();
    // $('.texto-activo').text(`Era un dia tranquilo en la vida de ${nombreU}..`);
    // $('.btn-textoInicio').fadeIn();
    // $('.btn-textoInicio').click(function (e) { 
    //     e.preventDefault();
    //     $('.texto-activo').text(`Hoy habia decidido tomar otro camino hacia la ruta de su trabajo de ${claseU} para cambiar un poco la rutina..`);
    
    //     $('.personaje-juego img').animate({'left': '70px'}, 1500);
    
    //     $('.btn-textoInicio').click(function (e){
    //         e.preventDefault();
    //         $('.texto-activo').text('Mientras iba caminando se cruzo con una botella en el piso y como debe hacerse la pateo con toda sus fuerzas..');
    //         $('.btn-textoInicio').hide();
    
    //         setTimeout(() => {
    //             $('.texto-activo').text('*Ruido de golpe*');
    //             setTimeout(() => {
    //                 $('.texto-activo').text('"Que te pasa a vos casi me sacas un ojo con esa botella"');
    //                 $('.enemigo-juego img').animate({'right': '70px'}, 1500);
    //                 setTimeout(() => {
    //                     $('.texto-activo').text('"Ahora vas a ver con quien te metiste.."');
    //                     setTimeout(() => {
    //                         $('.texto-activo').text(`Al patear la botella ${nombreU} sin querer golpeo a un borracho que estaba durmiendo al lado de un arbol..`);
    //                         $('.btn-textoInicioDos').fadeIn();
    //                         setTimeout(() => {
    //                             $('.personaje-cartel').fadeIn();
    //                             $('.enemigo-cartel').fadeIn();
    //                         }, 1000)
    
    //                         $('.btn-textoInicioDos').click(function (e) { 
    //                             e.preventDefault();
    //                             $('.texto-activo').text(`A ${nombreU} no le queda otra que hacerle frente al borracho.`);
    //                             $('.btn-textoInicioDos').hide();
    //                             $('.btn-textoFinal').show();
    
    //                             $('.btn-textoFinal').click(function (e) { 
    //                                 e.preventDefault();
    //                                 $('.btn-textoFinal').hide();
    //                                 $('.texto').css('width', '46%');
    //                                 $('.texto-activo').text('Elegi una accion');
    //                             });
    //                         });
    //                     }, 3000);
    //                 }, 3000);
    //             }, 1000);
    //         }, 6000);
    //     });
    // });

    $('.personaje-juego img').css({'left': '70px'});
    $('.enemigo-juego img').css({'right': '70px'});

});

// VARIABLES --------------------------------------------------------------------------------
let nombreU = jugar[0].nombre;
let claseU = jugar[0].clase;
let razaU = jugar[0].raza;
let elementoU = jugar[0].elemento;
let vidaCriticaU = true;
let usuarioPV = 100;
let enemigoPV = 100;
let turno = 1;

// SUERTE -----------------------------------------------------------------------------------
let suerte_personaje = Math.ceil(Math.random()*3);

if (claseU == 'guerrero'){
    switch (suerte_personaje){
        case 1:
            suerte_personaje = 1.25
            break;
    
        case 2:
            suerte_personaje = 1.5
            break;
    
        case 3:
            suerte_personaje = 2
            break;
    }
}else if (claseU == 'arquero'){
    switch (suerte_personaje){
        case 1:
            suerte_personaje = 3
            break;
    
        case 2:
            suerte_personaje = 5
            break;
    
        case 3:
            suerte_personaje = 10
            break;
    }
}else if (claseU == 'mago'){
    switch (suerte_personaje){
        case 1:
            suerte_personaje = 20
            break;
    
        case 2:
            suerte_personaje = 30
            break;
    
        case 3:
            suerte_personaje = 40
            break;
    }
}


// SECTOR BOTONES ---------------------------------------------------------------------------
$('.atacar').hover(function () {

        if (claseU == 'guerrero'){
            $('.texto-activo').text('Atacas con tu espada vikinga por 5/15 de daño');
        } else if (claseU == 'arquero'){
            $('.texto-activo').text('Atacas con tu arco y flecha por 5/15 de daño');
        } else if (claseU == 'mago'){
            $('.texto-activo').text('Atacas con tu hechizo magico por 5/15 de daño');
        }
        
    }, function () {
        $('.texto-activo').text('Elegi una accion');
    }
);
$('.atacar').click(function (e) { 
    e.preventDefault();

    let random = Math.ceil(Math.random()*11);
    let golpe = 16 - random;
    if (claseU == 'guerrero'){
        if (usuarioPV > 25){
            displayInicial(`${nombreU} ataca con su espada vikinga por ${golpe} de daño`)
            displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`)
            setTimeout(() => {
                vidaEnemigo(golpe); 
            }, 1500)
        }else if(usuarioPV <= 25 && vidaCriticaU === true){
            displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ahora sus golpes se multiplican por ${suerte_personaje}`)
            displaySiguiente(`${nombreU} ataca con su espada con furia y ataca por ${Math.ceil(golpe * suerte_personaje)}.
            La vida del borracho bada de ${enemigoPV} a ${enemigoPV - (Math.ceil(golpe * suerte_personaje))}`)
            setTimeout(() => {
                vidaEnemigo(Math.ceil(golpe * suerte_personaje)); 
            }, 2000)
            vidaCriticaU = false;
        }else if(usuarioPV <= 25 && vidaCriticaU === false){
            displayInicial(`${nombreU} cansado de pelear usa su ultimo esfuerzo y ataca por ${Math.ceil(golpe * suerte_personaje)}`)
            displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - (Math.ceil(golpe * suerte_personaje))}`)
            setTimeout(() => {
                vidaEnemigo(Math.ceil(golpe * suerte_personaje)); 
            }, 1500)
        }

    }else if (claseU == 'arquero'){
        

    }else if (claseU == 'mago'){
            if (usuarioPV > 25){
                displayInicial(`${nombreU} ataca con su hechizo magico por ${golpe} de daño`)
                displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`)
                setTimeout(() => {
                    vidaEnemigo(golpe); 
                }, 1500)
            }else if (usuarioPV <= 25 && vidaCriticaU === true){
                if (elementoU == 'fuego'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con una tormenta de fuego que hace ${suerte_personaje} de daño`)
                }else if(elementoU == 'agua'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con un tsunami que hace ${suerte_personaje} de daño`)
                }else if(elementoU == 'aire'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con una tormenta que hace ${suerte_personaje} de daño`)
                }else if(elementoU == 'tierra'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con avalancha de piedras que hace  ${suerte_personaje} de daño`)
                }
                displaySiguiente(`La vida del borracho bada de ${enemigoPV} a ${enemigoPV - suerte_personaje}`)
                setTimeout(() => {
                    vidaEnemigo(suerte_personaje); 
                }, 2000)
                vidaCriticaU = false;
            }else if(usuarioPV <= 25 && vidaCriticaU === false){
                displayInicial(`${nombreU} ataca con el poco mana que le queda por ${golpe} de daño`)
                displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`)
                setTimeout(() => {
                    vidaEnemigo(golpe); 
                }, 1500)
            }
    } 
    
    

});
// ----------------------------------------------------------------------------------------------



$('.especial').hover(function () {

        if (claseU == 'guerrero'){
            $('.texto-activo').text(`Cuando su vida esta por debajo de 25 su furia de ${elementoU} aumenta su daño un 25%, 50% o 100% dependiendo de tu suerte`);
        } else if (claseU == 'arquero'){
            $('.texto-activo').text(`Cuando su vida esta por debajo de 25 su espiritu ${elementoU} hace que su proxima flecha deja sangrando al enemigo por 3, 5 o 10 dependiendo de tu suerte`);
        } else if (claseU == 'mago'){
            $('.texto-activo').text(`Cuando su vida esta por debajo de 25 desata su poder de ${elementoU} y lanza un poderozo ataque que daña al enemigo por 20, 30 o 40 dependiendo de tu suerte`);
        }
        
    }, function () {
        $('.texto-activo').text('Elegi una accion');
    }
);
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
    setTimeout(() => {
        vidaUsuario (20);
    }, 100);
    
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

let imgU = '.personaje-juego img';
let imgE = '.enemigo-juego img';

function vidaUsuario (daño){
    usuarioPV -= daño;
    if (usuarioPV < 0){
        usuarioPV = 0;
    }

    impacto (imgU);

    $('.vida-contador_personaje').text(usuarioPV);
    $('.personaje-vida__barra').animate({'width': usuarioPV + '%'}, 500)
    $('.personaje-vida__barra').addClass('barraV');
    setTimeout(() => {
        $('.personaje-vida__barra').removeClass('barraV');
    }, 350);

    if (usuarioPV > 50) {
        $('.personaje-vida__barra').css('backgroundColor', '#229722');
    }else if (usuarioPV > 25){
        $('.personaje-vida__barra').css('backgroundColor', '#cdcd1b');
        $('.personaje-juego img').remove();
        $('.personaje-juego').append(`<img src="../media/${claseU}/${razaU}/b.png">`);
        $('.personaje-juego img').css({'left': '70px'});
        impacto (imgU);
    }else if (usuarioPV <= 25){
        $('.personaje-vida__barra').css('backgroundColor', '#c11111');
        $('.personaje-juego img').remove();
        $('.personaje-juego').append(`<img src="../media/${claseU}/${razaU}/c.png">`);
        $('.personaje-juego img').css({'left': '70px'});
        impacto (imgU);
    }
}
function vidaEnemigo (daño){
    enemigoPV -= daño;
    if (enemigoPV < 0){
        enemigoPV = 0;
    }

    impacto (imgE);

    $('.vida-contador_enemigo').text(enemigoPV);
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