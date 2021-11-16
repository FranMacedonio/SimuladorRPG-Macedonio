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
                                            <h3>${personaje.clase[0].toUpperCase() + personaje.clase.slice(1)} ${personaje.raza[0].toUpperCase() + personaje.raza.slice(1)}</h3>
                                            <h4>"De ${personaje.caracter[0].toLowerCase() + personaje.caracter.slice(1)}, ${personaje.historia[0].toLowerCase() + personaje.historia.slice(1)} y ${personaje.hobby[0].toLowerCase() + personaje.hobby.slice(1)}."</h4>
                                            <p>Victoria: <strong>${personaje.victorias}</strong> || Derrotas: <strong>${personaje.derrotas}</strong></p>
                                        </div>
                                        <i data-name="${personaje.nombre}" class="fas fa-trash-alt"></i>
                                    </div>`);
        }

        $('.fa-trash-alt').click(function (e) {
            $('#contenedor').append(`<div class="eliminar--cartel">
                                        <div class="eliminar--content">
                                            <h1>¿Estas seguro que queres eliminar a ${e.target.dataset.name}?</h1>
                                            <button class="cancelar eliminar--botones">Cancelar</button>
                                            <button class="eliminar eliminar--botones">Eliminar</button>
                                        </div>
                                    </div>`);

                $('.cancelar').click(function () { 
                    
                    $('.eliminar--cartel').remove();

                });

                $('.eliminar').click(function () { 
                    
                    for (let i = 0; i < personajes.length; i++){
                        if (e.target.dataset.name == personajes[i].nombre){
                            personajes.splice(i, 1);
                        }
                    }

                    localStorage.clear()
                    localStorage.setItem('personajes', JSON.stringify(personajes))

                    $('.eliminar--cartel').remove();
                    e.target.parentElement.remove();

                });

        });
    }
});