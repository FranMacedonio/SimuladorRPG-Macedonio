$(document).ready(function () {
    if (personajes.length == 0){
        $('.guardados').append(`<div class="glass-card intro">
                                    <div class="content">
                                        <h1>No tenes personajes creados.</h1>
                                        <a href="../pages/creacion.html">¡Crear personaje!</a>
                                    </div>
                                </div>`)
    } else{
        for (const personaje of personajes){
            $('.guardados').append(`<div class="glass-card guardado ${personaje.elemento}">
                                        <h1 class="nombre--personaje">${personaje.nombre}</h1>
                                        <img src="../media/${personaje.clase}/${personaje.raza}/a.png">
                                        <div class="content">
                                            <h3>${personaje.clase} ${personaje.raza}</h3>
                                            <h4>"De ${personaje.caracter}, ${personaje.historia} y ${personaje.hobby}."</h4>
                                            <p>Victoria: <strong>${personaje.victorias}</strong> || Derrotas: <strong>${personaje.derrotas}</strong></p>
                                        </div>
                                        <i data-name="${personaje.nombre}" class="fas fa-trash-alt"></i>
                                    </div>`);
        }
    }
});