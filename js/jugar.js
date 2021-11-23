$(document).ready(function () {

    $('.personaje-cartel').append(`<h3>${jugar[0].nombre}</h3>`);
    $('.personaje-juego').append(`<img src="../media/${jugar[0].clase}/${jugar[0].raza}/a.png">`);


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
let vidaCriticaU = true;
let vidaCriticaE = true;
let definitivaE = true;
let usuarioPV = 100;
let enemigoPV = 100;
let turno = 1;
let randomFinal = String(Math.ceil(Math.random()*2));
let decision;

// SUERTE -----------------------------------------------------------------------------------
let suerte_personaje = Math.ceil(Math.random()*3);

if (claseU == 'guerrero'){
    switch (suerte_personaje){
        case 1:
            suerte_personaje = 1.35;
            break;

        case 2:
            suerte_personaje = 1.65;
            break;

        case 3:
            suerte_personaje = 2;
            break;
    }
}else if (claseU == 'arquero'){
    switch (suerte_personaje){
        case 1:
            suerte_personaje = 3;
            break;

        case 2:
            suerte_personaje = 5;
            break;

        case 3:
            suerte_personaje = 8;
            break;
    }
}else if (claseU == 'mago'){
    switch (suerte_personaje){
        case 1:
            suerte_personaje = 10;;
            break;

        case 2:
            suerte_personaje = 15;
            break;

        case 3:
            suerte_personaje = 20;
            break;
    }
}


let suerte_enemigo = Math.ceil(Math.random()*3);

switch (suerte_enemigo) {
    case 1:
        suerte_enemigo = 10;
        break;

    case 2:
        suerte_enemigo = 15;
        break;

    case 3:
        suerte_enemigo = 25;
        break;
}

let definitiva = Math.ceil(Math.random()*5);

switch (definitiva) {
    case 1:
        definitiva = 10;
        break;

    case 2:
        definitiva = 12;
        break;

    case 3:
        definitiva = 15;
        break;

    case 4:
        definitiva = 20;
        break;

    case 5:
        definitiva = 25;
        break;
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

    turno ++;

    // GUERRERO

    if (claseU == 'guerrero'){
        if (usuarioPV > 25){
            displayInicial(`${nombreU} ataca con su espada vikinga por ${golpe} de daño`)
            displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`, golpe);

        }else if(usuarioPV <= 25 && vidaCriticaU === true){
            displayInicial(`La vida de ${nombreU} esta al limite lo que desata su espiritu de ${elementoU}.. Tira los dados para ver su suerte y ahora sus golpes se multiplican por ${suerte_personaje}`);
            displaySiguiente(`${nombreU} ataca con su espada con furia y ataca por ${Math.ceil(golpe * suerte_personaje)}.
            La vida del borracho bada de ${enemigoPV} a ${enemigoPV - (Math.ceil(golpe * suerte_personaje))}`, Math.ceil(golpe * suerte_personaje));
            vidaCriticaU = false;

        }else if(usuarioPV <= 25 && vidaCriticaU === false){
            displayInicial(`${nombreU} cansado de pelear usa su ultimo esfuerzo y ataca por ${Math.ceil(golpe * suerte_personaje)}`);
            displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - (Math.ceil(golpe * suerte_personaje))}`, Math.ceil(golpe * suerte_personaje));
        }

    // ARQUERO

    }else if (claseU == 'arquero'){
        if (usuarioPV > 25){
            displayInicial(`${nombreU} ataca con su arco y flecha por ${golpe} de daño`);
            displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`, golpe);

        }else if(usuarioPV <= 25 && vidaCriticaU === true){
            displayInicial(`La vida de ${nombreU} esta al limite y se concentra para disparar a la cabeza del borracho.. Tira los dados para ver su suerte y deja sangrando al enemigo por ${suerte_personaje} de daño por turno`);
            displaySiguiente(`El borracho ahora esta sangrando y pierde ${suerte_personaje} de vida..
            La vida de Larry baja de ${enemigoPV} a ${enemigoPV - (golpe + suerte_personaje)}`, golpe);
            setTimeout(() => {
                vidaEnemigo(suerte_personaje);
            }, 1000)
            vidaCriticaU = false;

        }else if(usuarioPV <= 25 && vidaCriticaU === false){
            displayInicial(`${nombreU} usa sus ultimas flechas y ataca por ${golpe}`);
            displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}..
            El borracho esta sangrando y pierde ${suerte_personaje} de vida..`, golpe);
            setTimeout(() => {
                vidaEnemigo(suerte_personaje);
            }, 1000)
        }

    // MAGO

    }else if (claseU == 'mago'){
            if (usuarioPV > 25){
                displayInicial(`${nombreU} ataca con su hechizo magico por ${golpe} de daño`);
                displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`, golpe);

            }else if (usuarioPV <= 25 && vidaCriticaU === true){
                if (elementoU == 'fuego'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con una tormenta de fuego que hace ${suerte_personaje} de daño`);
                }else if(elementoU == 'agua'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con un tsunami que hace ${suerte_personaje} de daño`);
                }else if(elementoU == 'aire'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con una tormenta que hace ${suerte_personaje} de daño`);
                }else if(elementoU == 'tierra'){
                    displayInicial(`La vida de ${nombreU} esta al limite y se activa su habilidad especial.. Tira los dados para ver su suerte y ataca con avalancha de piedras que hace  ${suerte_personaje} de daño`);
                }
                displaySiguiente(`La vida del borracho bada de ${enemigoPV} a ${enemigoPV - suerte_personaje}`, suerte_personaje);
                vidaCriticaU = false;

            }else if(usuarioPV <= 25 && vidaCriticaU === false){
                displayInicial(`${nombreU} ataca con el poco mana que le queda por ${golpe} de daño`);
                displaySiguiente(`La vida del borracho baja de ${enemigoPV} a ${enemigoPV - golpe}`, golpe);
            }
    }
});
// ----------------------------------------------------------------------------------------------
// ENEMIGO --------------------------------------------------------------------------------------

function turnoEnemigo(){

    let random = Math.ceil(Math.random()*11)
    let golpe = 16 - random;

    if (enemigoPV > 20){

        if ( (usuarioPV - golpe) <= 0){
            enemigoInicial(`Larry pega una patada por ${golpe} de daño`);
            enemigoSiguienteFinal(`La vida de ${nombreU} baja de ${usuarioPV} a ${usuarioPV - golpe}`, golpe);

        } else{
            enemigoInicial(`Larry pega una patada por ${golpe} de daño`);
            enemigoSiguiente(`La vida de ${nombreU} baja de ${usuarioPV} a ${usuarioPV - golpe}`, golpe);
        }

    } else if (enemigoPV <= 20 && vidaCriticaE === true){

        enemigoInicial(`"Me estas haciendo laburar eh.." *Larry se toma un trago de su bebida y se cura ${suerte_enemigo} de vida*"`);
        enemigoSiguiente(`*Larry eructa en tu cara*`, 0);

    } else if (enemigoPV < 20 && enemigoPV > 0 && vidaCriticaE === false && definitivaE === true){

        if ( (usuarioPV - definitiva) <= 0){
            enemigoInicial(`"Nunca nadie me habia hecho llegar hasta estas alturas en una pelea.. No mequeda otra opcion que usar mi ataque especial.. Nos vemos ${nombreU}.."`);
            enemigoSiguienteFinal(`Larry te tira un botellazo y te hace ${definitiva} de daño`, definitiva);

        } else{
            enemigoInicial(`"Nunca nadie me habia hecho llegar hasta estas alturas en una pelea.. No mequeda otra opcion que usar mi ataque especial.. Nos vemos ${nombreU}.."`);
            enemigoSiguiente(`Larry te tira un botellazo y te hace ${definitiva} de daño`, definitiva);
            definitivaE = false;
        }

    }else if (enemigoPV < 20 && enemigoPV > 0 && vidaCriticaE === false && definitivaE === false) {

        if ( (usuarioPV - golpe) <= 0){
            enemigoInicial(`Larry ya sin fuerzas pega una cachetada por ${golpe} de daño`);
            enemigoSiguienteFinal(`La vida de ${nombreU} baja de ${usuarioPV} a ${usuarioPV - golpe}`, golpe);

        } else{
            enemigoInicial(`Larry ya sin fuerzas pega una cachetada por ${golpe} de daño`);
            enemigoSiguiente(`La vida de ${nombreU} baja de ${usuarioPV} a ${usuarioPV - golpe}`, golpe);
        }

    }else{

    //   DECISIONES FINALES ------------------------------------------------------------------------------
        if (usuarioPV > 0 && enemigoPV <= 0){
            if (claseU == 'guerrero'){
                enemigoInicial(`...`);
                enemigoFinal(`Vay.. Vaya ${nombreU}.. Se ve que tu espada es mas rapida que mi botella ja ja..`);

            }else if (claseU == 'arquero'){
                enemigoInicial(`...`);
                enemigoFinal(`Vay.. Vaya ${nombreU}.. Creo que fue tonto de mi parte pelear con una botella contra un arquero..`);

            }else if (claseU == 'mago'){
                enemigoInicial(`...`);
                enemigoFinal(`Vay.. Vaya ${nombreU}.. Nunca debi haber peleado con una botella contra un mago..`);
            }

        }
    }
}


$('.especial').hover(function () {

        if (claseU == 'guerrero'){
            $('.texto-activo').text(`Cuando su vida esta por debajo de 25 su furia de ${elementoU} aumenta su daño un 35%, 65% o 100% dependiendo de tu suerte`);
        } else if (claseU == 'arquero'){
            $('.texto-activo').text(`Cuando su vida esta por debajo de 25 su espiritu ${elementoU} hace que su proxima flecha deja sangrando al enemigo por 3, 5 o 8 dependiendo de tu suerte`);
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

    displayCartel('Abriste tu bolsa de objetos', 'La bolsa esta vacia, te olvidaste los objetos en la mesita de luz..');
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

    displayCartel('Intentaste huir de la pelea pero Larry no te dejo', 'Te pego un chatetazo y te saco 1PV');
    setTimeout(() => {
        vidaUsuario (1);
    }, 1000);

});
// ----------------------------------------------------------------------------------------------

// SECTOR DE FUNCIONES --------------------------------------------------------------------------
function displayInicial (texto){
    $('.texto').css('width', '93.5%');
    setTimeout(function (){
        $('.texto-activo').text(texto);
    }, 10);

    $('.texto').append(`<button class="btn-textoUno">Siguiente</button>
                    <button class="btn-textoDos">Siguiente</button>
                    <button class="btn-textoTres">Siguiente</button>
                    <button class="btn-textoCuatro">Siguiente</button>`);
}

function displaySiguiente (texto, damage){

    $('.btn-textoUno').click(function (e) {
        e.preventDefault();
        $('.texto-activo').text(texto);
        $('.btn-textoUno').remove();

        vidaEnemigo(damage);

        turnoEnemigo();
    });
}

function enemigoInicial (texto){
    $('.btn-textoDos').click(function (e) {
        e.preventDefault();
        $('.texto-activo').text(texto);
        $('.btn-textoDos').remove();

        if (enemigoPV <= 20 && vidaCriticaE === true){
            curaEnemigo(suerte_enemigo);
            vidaCriticaE = false;
        }
    });
}

function enemigoSiguiente (texto, damage){

    $('.btn-textoTres').click(function (e) {
        e.preventDefault();
        $('.texto-activo').text(texto);
        $('.btn-textoTres').remove();

        vidaUsuario(damage);
    });
    $('.btn-textoCuatro').click(function (e) {
        e.preventDefault();
        $('.btn-textoCuatro').remove();
        $('.texto').css('width', '46%');
    });
}

function enemigoFinal (texto){
    $('.btn-textoTres').click(function (e) {
        e.preventDefault();
        $('.texto-activo').text(texto);
        $('.btn-textoTres').remove();
    });
    $('.btn-textoCuatro').click(function (e) {
        e.preventDefault();
        $('.btn-textoCuatro').remove();

        if (usuarioPV > 0 && enemigoPV <= 0){

            actoFinal('Veo en tus ojos que sos una buena persona y nunca debi haberme enojado por el botellazo que me pegaste.. Por favor dejame ir..', '¿Dar golpe final?');

        }
    });
}

function actoFinal (texto, texto2){
    $('.texto-activo').text(texto);

    $('.texto').append(`<button class="btn-textoUno">Siguiente</button>`);

    $('.btn-textoUno').click(function (e) { 
        e.preventDefault();
        $('.texto-activo').text(texto2);
        $('.btn-textoUno').remove();
        $('.texto').append(`<button class="btn-textoMatar">Dar golpe final</button>
                            <button class="btn-textoPiedad">Dejarlo vivir</button>`);

        matar ('Decidiste no tener piedad con Larry aunque te lo pidio de buena forma..', decisionPersonaje ());

        piedad ('Decidiste tener piedad sobre el borracho como todo un heroe..', '"¡JA JA NUNCA DEBISTE HABER CONFIADO EN MI!"', 'Aparentemente el cagon de Larry esta a punto de hacer algo. Elegi entre uno de los siguientes numeros para determinar tu suerte con el numero que salga en la pantalla a continuacion..');
    });
}

function matar (texto, texto2){
    $('.btn-textoMatar').click(function (e) { 
        e.preventDefault();
        $('.btn-textoMatar').remove();
        $('.btn-textoPiedad').remove();

        victoria();
        
        $('.texto-activo').text(texto);
        $('.texto').append(`<button class="btn-textoUno">Siguiente</button>`);

        $('.btn-textoUno').click(function (e) { 
            e.preventDefault();
            $('.btn-textoUno').remove();

            $('.texto-activo').text(texto2);
            $('.texto').append(`<button class="btn-textoDos">Salir</button>`);

            $('.btn-textoDos').click(function (e) { 
                e.preventDefault();
                
                window.location.href = '../index.html';
            });
        });
    });
}

function decisionPersonaje (){

    if (claseU == 'guerrero'){
        return `${nombreU} cansado de Larry le corta la cabeza con su espada terminando para siempre con esta pelea..
        ** FINAL CRUEL ** Turnos jugados: ${turno}`;

    }else if (claseU == 'arquero'){
        return `${nombreU} harto de esta pelea saca su daga y apuñala a Larry para nunca mas verlo de nuevo..
        ** FINAL CRUEL ** Turnos jugados: ${turno}`;

    }else if (claseU == 'mago'){
        return `${nombreU} usa su hechizo mas poderoso del clan ${elementoU} dejandolo sin vida al pobre Larry..
        ** FINAL CRUEL ** Turnos jugados: ${turno}`;
    }
}


function piedad (texto, texto2, texto3){
    $('.btn-textoPiedad').click(function (e) { 
        e.preventDefault();
        $('.btn-textoMatar').remove();
        $('.btn-textoPiedad').remove();
        
        $('.texto-activo').text(texto);
        $('.texto').append(`<button class="btn-textoUno">Siguiente</button>`);

        $('.btn-textoUno').click(function (e) { 
            e.preventDefault();
            $('.btn-textoUno').remove();

            $('.texto-activo').text(texto2);
            $('.texto').append(`<button class="btn-textoDos">Siguiente</button>`);

            $('.btn-textoDos').click(function (e) { 
                e.preventDefault();
                $('.btn-textoDos').remove();
                $('.texto-activo').text(texto3);
                $('.texto').append(`<button class="btn-textoMatar">Numero Dos</button>
            <button class="btn-textoPiedad">Numero Uno</button>`);

                $('.btn-textoMatar').click(function (e) { 
                    e.preventDefault();

                    decision = '2';
                    
                    $('.btn-textoMatar').remove();
                    $('.btn-textoPiedad').remove();

                    if (decision === randomFinal){
                        $('.texto-activo').text(`Elegiste el numero "2" y tiramos un dado imaginario y salio el "2".. Que buena suerte la tuya..`);

                        $('.texto').append(`<button class="btn-textoUno">Siguiente</button>`);
                        $('.btn-textoUno').click(function (e) { 
                            e.preventDefault();

                            $('.btn-textoUno').remove();
                            $('.texto').text(`Te diste cuenta de las intenciones de Larry y llegaste a tiempo para esquivar su ataque traicionero.. Lo remataste antes de que eso vuelva a pasar..
                            **FINAL BUENO** Turnos jugados: ${turno}`);

                            $('.texto').append(`<button class="btn-textoCuatro">Salir</button>`);

                            victoria();

                            $('.btn-textoCuatro').click(function (e) { 
                                e.preventDefault();

                                window.location.href = '../index.html';

                            });
                            
                        });
                    }else{
                        $('.texto-activo').text(`Elegiste el numero "2" y tiramos un dado imaginario y salio el "1".. Que mala suerte la tuya..`);

                        $('.texto').append(`<button class="btn-textoDos">Siguiente</button>`);
                        $('.btn-textoDos').click(function (e) { 
                            e.preventDefault();

                            $('.btn-textoDos').remove();
                            $('.texto').text(`Lamentablemente no te diste cuenta a tiempo y Larry te partio la nuca de un botellazo.. Intentaste ser un buen tipo dejandolo vivir pero no fue muy inteligente de tu parte.. Nunca confies en Larry..
                            **FINAL TRISTE** Turnos jugados: ${turno}`);

                            $('.texto').append(`<button class="btn-textoCuatro">Salir</button>`);

                            derrota();

                            $('.btn-textoCuatro').click(function (e) { 
                                e.preventDefault();

                                window.location.href = '../index.html';

                            });
                        });
                    }

                });

                $('.btn-textoPiedad').click(function (e) { 
                    e.preventDefault();
                    
                    decision = '1';

                    $('.btn-textoMatar').remove();
                    $('.btn-textoPiedad').remove();

                    if (decision === randomFinal){
                        $('.texto-activo').text(`Elegiste el numero "1" y tiramos un dado imaginario y salio el numero "1".. Que buena suerte la tuya..`);

                        $('.texto').append(`<button class="btn-textoTres">Siguiente</button>`);
                        $('.btn-textoTres').click(function (e) { 
                            e.preventDefault();

                            $('.btn-textoTres').remove();
                            $('.texto').text(`Te diste cuenta de las intenciones de Larry y llegaste a tiempo para esquivar su ataque traicionero.. Lo remataste antes de que eso vuelva a pasar..
                            **FINAL BUENO** Turnos jugados: ${turno}`);

                            $('.texto').append(`<button class="btn-textoCuatro">Salir</button>`);

                            victoria();
                            
                            $('.btn-textoCuatro').click(function (e) { 
                                e.preventDefault();

                                window.location.href = '../index.html';

                            });
                        });
                    }else{
                        $('.texto-activo').text(`Elegiste el numero "1" y tiramos un dado imaginario y salio el "2".. Que mala suerte la tuya..`);

                        $('.texto').append(`<button class="btn-textoCuatro">Siguiente</button>`);
                        $('.btn-textoCuatro').click(function (e) { 
                            e.preventDefault();

                            $('.btn-textoDos').remove();
                            $('.texto').text(`Lamentablemente no te diste cuenta a tiempo y Larry te partio la nuca de un botellazo.. Intentaste ser un buen tipo dejandolo vivir pero no fue muy inteligente de tu parte.. Nunca confies en Larry..
                            **FINAL TRISTE** Turnos jugados: ${turno}`);

                            $('.texto').append(`<button class="btn-textoCuatro">Salir</button>`);

                            derrota();

                            $('.btn-textoCuatro').click(function (e) { 
                                e.preventDefault();

                                window.location.href = '../index.html';

                            });
                        });
                    }
                });

            });
        });
    });
}

function displayCartel(texto, texto2){
    $('.texto').css('width', '93.5%');
    setTimeout(function (){
        $('.texto-activo').text(texto);
    }, 10);
    $('.texto').append(`<button class="btn-textoUno">Siguiente</button>
                    <button class="btn-textoDos">Siguiente</button>`);

    $('.btn-textoUno').click(function (e) { 
        e.preventDefault();
        
        $('.texto-activo').text(texto2);
        $('.btn-textoUno').remove();

        $('.btn-textoDos').click(function (e) { 
            e.preventDefault();
            
            $('.btn-textoDos').remove();
            $('.texto').css('width', '46%');
        });
    });
}

function enemigoSiguienteFinal (texto, damage){

    $('.btn-textoTres').click(function (e) {
        e.preventDefault();
        $('.texto-activo').text(texto);
        $('.btn-textoTres').remove();

        vidaUsuario(damage);
    });
    $('.btn-textoCuatro').click(function (e) {
        e.preventDefault();
        $('.btn-textoCuatro').remove();
        
        if (claseU == 'guerrero'){
            derrotado(`Jajaja das mucha pena, no me quiero imaginar que se siente ser un ${claseU} y no poder derrotar una botella de birra con una espada..`, `Lamentablemente no fuiste lo suficientemente fuerte como para derrotar a un simple borracho.. En la proxima vida podrias probar con ser carpintero..`, `Larry te remato con un botellazo..
            **FINAL TRISTE** Turnos jugados: ${turno}`);
    
        }else if (claseU == 'arquero'){
    
            derrotado(`Jajaja das mucha pena, no me quiero imaginar que se siente perder contra un tipo con una botella siendo un ${claseU}..`, `Lamentablemente no fuiste lo suficientemente fuerte como para derrotar a un simple borracho.. En la proxima vida podrias probar con ser carpintero..`, `Larry te remato con un botellazo..
            **FINAL TRISTE** Turnos jugados: ${turno}`);
    
        }else if (claseU == 'mago'){
            
            derrotado(`Jajaja Harry Potter pudo vencer a un Troll de las cavernas y vos no pudiste contra un simple tipo con una botella..`, `Lamentablemente no fuiste lo suficientemente fuerte como para derrotar a un simple borracho.. En la proxima vida podrias probar con ser carpintero..`, `Larry te remato con un botellazo..
            **FINAL TRISTE** Turnos jugados: ${turno}`);
        }
    });
}

function derrotado(texto, texto2, texto3){

    derrota();

    $('.texto-activo').text(texto);
    $('.texto').append(`<button class="btn-textoUno">Siguiente</button>
                    <button class="btn-textoDos">Siguiente</button>
                    <button class="btn-textoTres">Salir</button>`);

    $('.btn-textoUno').click(function (e) { 
        e.preventDefault();
        
        $('.btn-textoUno').remove();
        $('.texto-activo').text(texto2);

        $('.btn-textoDos').click(function (e) { 
            e.preventDefault();
            $('.btn-textoDos').remove();
            $('.texto-activo').text(texto3);
        });

        $('.btn-textoTres').click(function (e) { 
            e.preventDefault();
            
            window.location.href = '../index.html';
        });
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
        $('.personaje-vida__barra').addClass('coma');
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

function curaEnemigo (cura){
    enemigoPV += cura;
    $('.vida-contador_enemigo').text(enemigoPV);
    $('.enemigo-vida__barra').animate({'width': enemigoPV + '%'}, 500)
}

function impacto (objeto){
    $(objeto).addClass('impacto');
    setTimeout(() => {
        $(objeto).removeClass('impacto');
    }, 350);
}

function victoria(){
    for (const personaje of personajes){
        if (nombreU == personaje.nombre){
            personaje.victorias ++;

            localStorage.clear();
            localStorage.setItem('personajes', JSON.stringify(personajes));
        }
    }
}

function derrota(){
    for (const personaje of personajes){
        if (nombreU == personaje.nombre){
            personaje.derrotas ++;

            localStorage.clear();
            localStorage.setItem('personajes', JSON.stringify(personajes));
        }
    }
}