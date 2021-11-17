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