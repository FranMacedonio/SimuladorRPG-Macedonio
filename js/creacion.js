$(document).ready(function () {

    $('.btn-inicio').click(function (e) { 
        e.preventDefault();
        
        $('.intro').remove();
        $('.creacion').append(`<div id="guerrero" class="glass-card seleccion--clase">
                                <div class="content__clase">
                                    <h1>GUERRERO</h1>
                                </div>
                            </div>

                            <div id="arquero" class="glass-card seleccion--clase">
                                <div class="content__clase">
                                    <h1>ARQUERO</h1>
                                </div>
                            </div>

                            <div id="mago" class="glass-card seleccion--clase">
                                <div class="content__clase">
                                    <h1>MAGO</h1>
                                </div>
                            </div>`);

        
        // SELECCION DE GUERRERO ----------------------------------------------------------------------
        $('#guerrero').click(function () { 
            
            $('.seleccion--clase').remove();
            clase='guerrero';

            $('.creacion').append(`<div id="guerrero--humano" class="glass-card seleccion--raza">
                                        <img src="../media/guerrero/humano/a.png" alt="Guerrero Humano">
                                        <div class="content__raza guerrero--after">
                                            <h2>Guerrero Humano</h2>
                                            <p>Los humanos son la mas joven de las razas y quizás sea por sus cortas vidas que luchan por lograr tanto como puedan en los años que le son dados. Cualquiera que sea su motivación, los humanos son los innovadores, los triunfadores y los pioneros de los mundos. Al mezclar estos rasgos con las de un guerrero se obtiene una clase plenamente conciente definiendolo como un ser impecable.</p>
                                        </div>
                                    </div>

                                    <div id="guerrero--elfo" class="glass-card seleccion--raza">
                                        <img src="../media/guerrero/elfo/a.png" alt="Guerrero Elfo">
                                        <div class="content__raza guerrero--after">
                                            <h2>Guerrero Elfo</h2>
                                            <p>Los elfos son un pueblo mágico de gracilidad sobrenatural, que viven en lugares de etérea belleza. Aman la naturaleza y la magia, el arte, la música y la poesía. Al mezclar estos rasgos con las de un guerrero se obtiene un clase donde su voluntad y su fe son más poderosas que su miedo.</p>
                                        </div>
                                    </div>

                                    <div id="guerrero--oscuro" class="glass-card seleccion--raza">
                                        <img src="../media/guerrero/oscuro/a.png" alt="Guerrero Elfo Oscuro">
                                        <div class="content__raza guerrero--after">
                                            <h2>Guerrero Elfo Oscuro</h2>
                                            <p>Los elfos oscuros fueron desterrados de la superficie siguiendo por el camino del mal y la corrupción. Han construido su propia civilización en las profundidades de la Infraoscuridad. Al mezclar estos rasgos con las de un guerrero se obtiene una clase donde su corazon esta desconectado de la realidad causando un aumento de fuerza y habilidad en pelea.</p>
                                        </div>
                                    </div>`);

                // SELECCION DE RAZA EN GUERRERO -----------------------------------------------------------

                $('#guerrero--humano').click(function () { 
                    eleccion_raza ('humano');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');
                            
                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });

                $('#guerrero--elfo').click(function () { 
                    eleccion_raza ('elfo');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });

                $('#guerrero--oscuro').click(function () { 
                    eleccion_raza ('oscuro');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });
        });

        // SELECCION DE ARQUERO ----------------------------------------------------------------------
        $('#arquero').click(function () { 
            
            $('.seleccion--clase').remove();
            clase='arquero';

            $('.creacion').append(`<div id="arquero--humano" class="glass-card seleccion--raza">
                                        <img src="../media/arquero/humano/a.png" alt="Arquero Humano">
                                        <div class="content__raza arquero--after">
                                            <h2>Arquero Humano</h2>
                                            <p>Los humanos son la mas joven de las razas y quizás sea por sus cortas vidas que luchan por lograr tanto como puedan en los años que le son dados. Cualquiera que sea su motivación, los humanos son los innovadores, los triunfadores y los pioneros de los mundos. Al mezclar estos rasgos con las de un arquero se obtiene una clase que ha perfeccionado con arte de la arquería.</p>
                                        </div>
                                    </div>

                                    <div id="arquero--elfo" class="glass-card seleccion--raza">
                                        <img src="../media/arquero/elfo/a.png" alt="Arquero Elfo">
                                        <div class="content__raza arquero--after">
                                            <h2>Arquero Elfo</h2>
                                            <p>Los elfos son un pueblo mágico de gracilidad sobrenatural, que viven en lugares de etérea belleza. Aman la naturaleza y la magia, el arte, la música y la poesía. Al mezclar estos rasgos con las de un arquero se obtiene un clase donde su afinidad y destreza con el arco se vuelve muy superior.</p>
                                        </div>
                                    </div>

                                    <div id="arquero--oscuro" class="glass-card seleccion--raza">
                                        <img src="../media/arquero/oscuro/a.png" alt="Arquero Elfo Oscuro">
                                        <div class="content__raza arquero--after">
                                            <h2>Arquero Elfo Oscuro</h2>
                                            <p>Los elfos oscuros fueron desterrados de la superficie siguiendo por el camino del mal y la corrupción. Han construido su propia civilización en las profundidades de la Infraoscuridad. Al mezclar estos rasgos con las de un arquero se obtiene una clase donde se vuelven especialistas en combate con arco y tecnicas oscuras.</p>
                                        </div>
                                    </div>`);

                // SELECCION DE RAZA EN ARQUERO -----------------------------------------------------------

                $('#arquero--humano').click(function () { 
                    eleccion_raza ('humano');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });

                $('#arquero--elfo').click(function () { 
                    eleccion_raza ('elfo');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });

                $('#arquero--oscuro').click(function () { 
                    eleccion_raza ('oscuro');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });
        });

        // SELECCION DE MAGO ----------------------------------------------------------------------
        $('#mago').click(function () { 
            
            $('.seleccion--clase').remove();
            clase='mago';

            $('.creacion').append(`<div id="mago--humano" class="glass-card seleccion--raza">
                                        <img src="../media/mago/humano/a.png" alt="Mago Humano">
                                        <div class="content__raza mago--after">
                                            <h2>Mago Humano</h2>
                                            <p>Los humanos son la mas joven de las razas y quizás sea por sus cortas vidas que luchan por lograr tanto como puedan en los años que le son dados. Cualquiera que sea su motivación, los humanos son los innovadores, los triunfadores y los pioneros de los mundos. Al mezclar estos rasgos con las de un mago se obtiene una clase muy apasionada que siempre busca avanzar en su camino.</p>
                                        </div>
                                    </div>

                                    <div id="mago--elfo" class="glass-card seleccion--raza">
                                        <img src="../media/mago/elfo/a.png" alt="Mago Elfo">
                                        <div class="content__raza mago--after">
                                            <h2>Mago Elfo</h2>
                                            <p>Los elfos son un pueblo mágico de gracilidad sobrenatural, que viven en lugares de etérea belleza. Aman la naturaleza y la magia, el arte, la música y la poesía. Al mezclar estos rasgos con las de un mago se obtiene una clase talentosa, diciplinada y se centra en la defensa de su grupo como en ataques de gran poder.</p>
                                        </div>
                                    </div>

                                    <div id="mago--oscuro" class="glass-card seleccion--raza">
                                        <img src="../media/mago/oscuro/a.png" alt="Mago Elfo Oscuro">
                                        <div class="content__raza mago--after">
                                            <h2>Mago Elfo Oscuro</h2>
                                            <p>Los elfos oscuros fueron desterrados de la superficie siguiendo por el camino del mal y la corrupción. Han construido su propia civilización en las profundidades de la Infraoscuridad. Al mezclar estos rasgos con las de un mago se obtiene una clase donde poseen una gran potencia en sus hechizos ofensivos, defensivos y curativos gracias a la magia oscura.</p>
                                        </div>
                                    </div>`);

                // SELECCION DE RAZA EN MAGO -----------------------------------------------------------

                $('#mago--humano').click(function () { 
                    eleccion_raza ('humano');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });

                $('#mago--elfo').click(function () { 
                    eleccion_raza ('elfo');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });

                $('#mago--oscuro').click(function () { 
                    eleccion_raza ('oscuro');

                        $('.fuego').click(function () { 
                            eleccion_elemento ('fuego');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.agua').click(function () { 
                            eleccion_elemento ('agua');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.aire').click(function () { 
                            eleccion_elemento ('aire');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });

                        $('.tierra').click(function () { 
                            eleccion_elemento ('tierra');

                            $('.btn-crear').click(function (e) { 
                                e.preventDefault();
                                crear();
                            });
                        });
                });
        });
    });
});


function eleccion_raza (raza_seleccion){

    $('.seleccion--raza').remove();
    raza = raza_seleccion;

    $('.creacion').append(`<div class="glass-card elemento fuego--card">
                                <img src="../media/${clase}/${raza}/a.png">
                                <div class="content fuego">
                                    <h1>FUEGO</h1>
                                </div>
                            </div>

                            <div class="glass-card elemento agua--card">
                                <img src="../media/${clase}/${raza}/a.png">
                                <div class="content agua">
                                    <h1>AGUA</h1>
                                </div>
                            </div>

                            <div class="glass-card elemento aire--card">
                                <img src="../media/${clase}/${raza}/a.png">
                                <div class="content aire">
                                    <h1>AIRE</h1>
                                </div>
                            </div>

                            <div class="glass-card elemento tierra--card">
                                <img src="../media/${clase}/${raza}/a.png">
                                <div class="content tierra">
                                    <h1>TIERRA</h1>
                                </div>
                            </div>`);
}

function eleccion_elemento (elemento_seleccion){
    $('.elemento').remove();
    elemento = elemento_seleccion;

    $('.creacion').append(`<div class="glass-card intro nickname">
                            <div class="content">
                                <h2>Por ultimo ponele un nombre a tu personaje:</h2>
                                <input id="input" type="text">
                                <div id="input-label" class="input-label">Nombre</div>
                                <div id="input-border"></div>
                                <p class="input-contador">0/13</p>
                                <button class="btn-crear">Crear Personaje</button>
                            </div>
                        </div>`);


    const input = document.getElementById('input');
    const inputContador = document.getElementsByClassName('input-contador')[0];
    input.addEventListener('input', () => {

        inputContador.textContent = input.value.length + '/13'
        inputContador.style.color = "black";

        if (input.value.length > 13){
            inputContador.style.color = "#8b0c0c";
        }

    })
    

    let inputValue;

    let colorInput;

    if (elemento == 'fuego'){
        colorInput = '#c7530f';
    } else if (elemento == 'agua'){
        colorInput = '#1b5c75';
    } else if (elemento == 'aire'){
        colorInput = '#858a8b';
    } else if (elemento == 'tierra'){
        colorInput = '#75471b';
    }

    $('#input').focus(function () { 

        inputValue = $('#input').val();

        if (inputValue == ''){
            
            $('#input-border').css('backgroundColor', colorInput);
            $('#input-border').stop().animate({
                width: '405px'
            }, 1000);

            $('#input-label').css('color', colorInput);
            $('#input-label').css('fontSize', '16px');
            $('#input-label').stop().animate({
                left: '50px',
                bottom: '100px'
            }, 500);
        }
    });

    $('#input').blur(function () { 

        inputValue = $('#input').val();

        if (inputValue == ''){

            $('#input-border').stop().animate({
                width: '0px'
            }, 1000);

            $('#input-label').css('color', 'black');
            $('#input-label').css('fontSize', '24px');
            $('#input-label').stop().animate({
                left: '75px',
                bottom: '65px'
            }, 500);
        }
    });
}

let repetido = [];
for (const obj of personajes){
    repetido.push(obj.nombre);
}

$.getJSON('../js/caracter.json', function (response, state){
    if (state === 'success'){
        let randomuno = Math.ceil (Math.random()*9);
        caracter = response[randomuno];
    }
});

$.getJSON('../js/historia.json', function (response, state){
    if (state === 'success'){
        let randomdos = Math.ceil (Math.random()*9);
        historia = response[randomdos];
    }
});

$.getJSON('../js/hobby.json', function (response, state){
    if (state === 'success'){
        let randomtres = Math.ceil (Math.random()*9);
        hobby = response[randomtres];
    }
});

function crear (){

    nombre = $('#input').val();
    let igual;

    for (let i = 0; i < repetido.length; i++){
        if (nombre.toLowerCase() == repetido[i].toLowerCase()){
            igual = true;
        }
    }

    if (nombre == ''){
        alert('No pusiste ningun nombre');
    } else if (igual){
        alert('Ya hay un personaje creado con ese nombre');
    } else if (nombre.length > 13){
        alert('No puede superar los 13 caracteres')
    } else{
        personajes.push(new Crear(nombre, clase, raza, elemento, caracter, historia, hobby));
        localStorage.setItem('personajes', JSON.stringify(personajes));

        $('.creacion').remove();
    }
}