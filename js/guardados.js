$(document).ready(function () {
    if (personajes.length == 0){
        $('.guardados').append(`<div class="glass-card intro">
                                    <div class="content">
                                        <h1>No tenes personajes creados.</h1>
                                        <a href="../pages/creacion.html">¡Crear personaje!</a>
                                    </div>
                                </div>`)
    }
});