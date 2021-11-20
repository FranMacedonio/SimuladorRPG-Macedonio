let personajesText = '';

$(document).ready(function () {
    for (const personaje of personajes){
        personajesText += `<div data-jugar="${personaje.nombre}" class="personaje ${personaje.elemento}">
                                <img src="media/${personaje.clase}/${personaje.raza}/a.png" alt="">
                                <h1>${personaje.nombre}</h1>
                            </div>
                            `
    }
});

$('.salir').click(function () { 
    
    $('#pantalla').append(`<div class="eliminar--cartel">
                            <div class="eliminar--content">
                                <h1>¿Estas seguro que queres salir de este GRAN juego?</h1>
                                <button class="cancelar eliminar--botones">Cancelar</button>
                                <button class="eliminar eliminar--botones">Salir</button>
                            </div>
                        </div>`);
   
        $('.cancelar').click(function (e) { 
            e.preventDefault();
            $('.eliminar--cartel').remove();
        });

        $('.eliminar').click(function (e) { 
            e.preventDefault();
            $('.eliminar--cartel').remove();
            $('#pantalla').append(`<div class="eliminar--cartel">
                                    <div class="eliminar--content salir--cartel">
                                        <h1>Bueno si queres salir del juego cerra la pestaña del navegador por que no hay otra forma de hacerlo.. No te enojes pero no fue muy inteligente de tu parte intentar salir por aca..</h1>
                                        <button class="entiendo eliminar--botones">Entiendo, la verdad que no se que estaba pensando</button>
                                    </div>
                                </div>`);

                $('.entiendo').click(function (e) { 
                    e.preventDefault();
                    $('.eliminar--cartel').remove();
                });
        });
});

$('.btn-jugar').click(function () {

    $('.principal').append(`<div class="elegir-personaje_panel">
                                <h2>Elegi un personaje para jugar la historia:</h2>
                                <div class="elegir-personaje">
                                    <div class="elegir-personaje_botones">
                                        ${personajesText}
                                    </div>
                                </div>
                                <button class="btn--cerrar">Cerrar</button>
                            </div>`);

        $('.btn--cerrar').click(function (e) { 
            e.preventDefault();
            $('.elegir-personaje_panel').remove();
        });

        $('.personaje').click(function (e) { 
            
            for (const personaje of personajes){
                if (e.target.dataset.jugar == personaje.nombre){
                    jugar.splice(0, jugar.length);
                    jugar.push(personaje);

                    localStorage.setItem('jugar', JSON.stringify(jugar));

                    $('.elegir-personaje_panel').fadeOut();
                    setTimeout(function (){
                        window.location.href = 'pages/jugar.html';
                    }, 2000);
                }
            }
            
        });
});