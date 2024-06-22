// Función para cargar los datos guardados del almacenamiento local
        window.onload = function() {
            const campos = [
                'Iden', 'Report', 'ImagenF', 'NameH', 'FavoritLink', 
                'val', 'genres', 'Tempos', 'Año', 'Sipnosis', 
                'Sand', 'Creador', 'ImagenC', 'reina', 'fecha'
            ];
            
            campos.forEach(campo => {
                const valor = localStorage.getItem(campo);
                if (valor) {
                    document.getElementById(campo).value = valor;
                }
            });
        };
        
        // Función para guardar automáticamente en localStorage cuando se escribe en cualquier input
        const inputs = document.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                localStorage.setItem(this.id, this.value);
            });
        });
        
        function generarPlantilla() {
            const Iden = document.getElementById('Iden').value.trim();
            const Report = document.getElementById('Report').value.trim();
            const ImagenF = document.getElementById('ImagenF').value.trim();
            const NameH = document.getElementById('NameH').value.trim();
            const FavoritLink = document.getElementById('FavoritLink').value.trim();
            const val = document.getElementById('val').value.trim();
            const genres = document.getElementById('genres').value.trim();
            const Tempos = document.getElementById('Tempos').value.trim();
            const Año = document.getElementById('Año').value.trim();
            const Sipnosis = document.getElementById('Sipnosis').value.trim();
            const Sand = document.getElementById('Sand').value.trim();
            const Creador = document.getElementById('Creador').value.trim();
            const ImagenC = document.getElementById('ImagenC').value.trim();
            const fecha = document.getElementById('fecha').value.trim();
            const reina = document.getElementById('reina').value.trim();
            
            // Plantilla HTML en JavaScript
            const plantilla = `


<!DOCTYPE html>
<html lang="es">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta charset="UTF-8">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/CDNSFree2/Plyr/plyr.css" />

<title>${reina}</title>


<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SarpYT/GeneradorAnimeDay/estilos.css">



<style>

.rico {
margin-top: 30px;
text-align: center;
}


.pene {
padding: 5px 2px;
border: 2px solid #222222;
color: #fff;
border-radius: 8px;
font-size: 16px;
cursor: pointer;
position: relative;
display: flex;
align-items: center;
overflow: hidden;
max-width: 130px;
z-index: 0;
}

.pene::before {
content: '';
position: absolute;
top: 2px;
bottom: 2px;
left: 2px;
right: 2px;
background-color: #1a1a1a;
border-radius: 4px;
z-index: -1;
}

.nada {
padding: 5px 5px;
font-weight: bold;
}

.hijo {
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 14px;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 8px solid #fff;
transition: transform 0.5s ease-in-out;
}

.pene.open .hijo {
transform: translateY(-50%) rotate(180deg);
}





.trolo {
display: none;
position: fixed;
z-index: 100;
left: 0;
bottom: 0;
width: 100%;
max-height: 100%;
overflow: auto;
}


.trolo-background {
display: none;
position: fixed;
z-index: 98;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);

}


.trolo-overlay {
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
display: none;
z-index: 99;
}


.trolo-content {
background-color: #181818;
margin: auto;
padding: 20px;
border: wpx solid #fff;
border-radius: 30px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
width: 100%;
max-width: 90%;
transform: translateY(90%);
transition: transform 0.3s ease-in-out, border-bottom-right-radius 0.5s ease-in-out;
}


.trolo-title {
color: #444;
text-align: center;
font-size: 20px;
font-weight: 800;
margin-bottom: 25px;
margin-top: -1px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
}


.close-button3 {
padding: 06px 10px;
border-radius: 9px;
background: linear-gradient(transparent, rgba(0, 0, 0, 0.0));
color: #fff;
font-weight: 600;
font-size: 22px;
cursor: pointer;
position: absolute;
top: -4px;
right: 5px;
}


.close-button3:hover {
color: red;
background:#333333;
}

.option {
background-color: #1d1d1d;
padding: 13px;
border-radius: 7px;
margin: 6px 0px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: #fff;
text-decoration: none;
transition: background-color 0.1s ease;
}

.option.selected {
background-color: #555;
}



.content {
margin-top: 20px;
text-align: center;
}

.season-content {
display: none;
}

.season-content.active {
display: block;
}

.ratedTry {
border: 0px solid #ccc;
color: white;
padding: 0px;
margin-left: 0px;
margin-right: 0px;
}

.modal {
display: none;
position: fixed;
background-size: cover;
background-position: center;
z-index: 999;
width: 90%;
border-radius:9px;
max-width: 500px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}


.modal-content {
background: rgba(0, 0, 0, 0.4);
padding: 15px;
border: 1px solid #fff;
border-radius:9px;
color:white;
position: relative;
}

.closeinfo {
position: absolute;
top: 04px;
right: 10px;
font-size: 28px;
font-weight: bold;
cursor: pointer;
}

.closeinfo:hover {
color: red;
}

.titulo5 {
margin:8;
color:white;
font-weight:700;
padding:03;
}
.fecha {
margin:8;
color:white;
font-weight:700;
padding:03;
}
.sarp {
color:yellow;
}
.rating {
color:yellow;
margin:03;
}
.Ep {
margin:8;
color:white;
font-weight:700;
}

.descripcion {
padding:10;
}

.info-icon {
width: 40px;
height: 40px;
background-color: #007bff; /* Color de fondo del círculo */
border-radius: 50%; /* Hace que el elemento sea redondo */
display: flex;
justify-content: center;
align-items: center;
}

.open-modal-button i {
color: white; /* Color del ícono */
}

.open-modal-button {

top: -10;
left: -4;
background: black;
border: none;
width: 25px;
height: 25px;
border: 2px solid white;
border-radius: 50%;
justify-content: center;
align-items: center;
}

.SD {
display: flex;
justify-content: center;
}
.SYD {
background: rgba(0, 0, 0, 0.3);
border-radius:9px;
}

.cadena {
    position: absolute;
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, transparent 0%, #ffcc00 50%, transparent 100%);
    animation: animacion-cadena 2s linear infinite;
  }

  @keyframes animacion-cadena {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  .cadena-izquierda {
    top: 20;
    left: -200%;
    transform-origin: right center;
    animation-delay: 1s;
  }

  .cadena-derecha {
    top: 20;
    right: -200%;
    transform-origin: left center;
    animation-delay: 1s;
  }
  
  .download-button {
            display: inline-block;
            width: 37px;
            height: 37px;
            background: #000000;
            border-radius: 50%;
            text-align: center;
            line-height: 60px;
            color: white;
            font-size: 20px;
            text-decoration: none;
            border: 2px solid white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
            outline: none;
        }

        .download-button:hover {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            transform: scale(1.1);
        }

        .download-button:active {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transform: scale(1);
        }
</style>
</head>
<body>

<div id="modal" class="modal" style="display: none;">
<div class="modal-content">

<span class="closeinfo">&times;</span>
<center>
<div class="SYD">
<div class="titulo5"></div></div>
<div class="SYD">
<div class="SD">
<div class="Ep"></div>
<div class="rating"></div></div></div>
<div class="SYD">
<div class="fecha"></div></div>
<div class="SYD">
<div class="descripcion"></div></div>
</center>


</div>
</div>


<div class="flechaSarp">

<!-- Flecha de volver -->
<a href="#" class="flecha2"><i class="fas fa-arrow-left"></i></a>
</div>

<div class="IRGSARP">


<button id="favoritoBtn" class="Sarp23" data-identificador="${Iden}" onclick="toggleFavorito()"><i class="far fa-heart sarpco"></i></button>
</i>


<div class="dropdownSARP">


<span class="no-select">&#8942;</span>

<div class="dropdown-contentSARP">

<a href="https://t.me/+pIAMbmOfmzxhYWJh">Reportar</a>
</div>
</div>
</div>


<div id="favoritoData" style="display: none;">
<img id="favoritoImagen" class="poster" src="${ImagenF}" alt="${reina}">
<a id="favoritoEnlace" href="${FavoritLink}"></a>
<span id="nombre">${reina}</span>
</div>

<div class="image">
<!-- Solicitar la imagen original -->
<img src="${ImagenF}" />
</div>



<div class="afterImage"><b>

<center>
<div class="centrado">
<div class="contenedor-valoracion" data-valoracion="${val}">
<div class="relleno"></div>
<div class="icono-estrella">
<span class="ratedTry" translate="no"><b>${val}&nbsp;</b><i class="far fa-star"></i></span>
</div>
</div>

</div></center>

<div class="afterImage2"><b>





<div class="left">



<div class="title"><b>${reina}</b></div>
<br>
<div class="containerSarp">
<div><span class="SarpBT" translate="no">Gen</span></div>
<div><span class="SarpLine" translate="no">${genres}<span></div>
</div>
<br>


<div class="third-lineSarp">

<span class="season" translate="no"><b>Temporadas ${Tempos}</b></span>
<span class="ratedTr" translate="no"> <b>18+</b></span>
<span class="ratedTr" translate="no"> <b>Anime</b></span>
<span class="ratedTr" translate="no"><b>${Año}</b></span>


</div>


<div class="stars">
${Sipnosis}

</div>

<!--SANDBOX DE IFRAME Y Creador de contenido-->

<div style="color:white;" id="sandbox" data-sandbox-attributes="${Sand}">${Creador}</div>

<!--EPISODIOS Y TEMPORADAS-->

<center>
<div class="rico">
<div id="seleccionar-temporada" class="pene" onclick="opentrolo()">
<div class="nada nada-bold">Temporada 1 </div>
<div class="hijo"></div>
</div>
</div>
</center>

<div class="trolo-background" id="trolo-background" onclick="closetrolo()"></div>

<!-- Ventana trolo -->
<div id="trolo" class="trolo" onclick="closetrolo()">
<div class="trolo-content" onclick="event.stopPropagation();">
<p class="trolo-title">
Temporadas
<span class="close-button3" onclick="closetrolo()">X</span>
</p>

<div class="option" data-option="Temporada 1" onclick="selectOption('Temporada 1')">Temporada 1</div>



</div>
<div class="trolo-overlay"></div>
</div>

<!-- Contenido de cada temporada -->
<div class="content">


<div id="temporada-1" class="season-content active">

<!-- Capítulos temporada 1 -->


${NameH}








<!-- Capítulos temporada 1 final </div>-->
</div>

<!-- PEGA AQUÍ LAS TEMPORADAS FALTANTES -->



</div>
<!--- Final de contenedor de siponosis y tdoo esl --->




<div class="svgsprite">
<svg>
<symbol id="play" viewBox="0 0 24 24"><path fill="currentColor" d="M10.856 8.155A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0Z"/>
</symbol>
</svg>
<svg>
<symbol id="que" viewBox="0 0 36 36"><path fill="currentColor" d="M34 18A16 16 0 1 1 18 2a16 16 0 0 1 16 16Zm-8.41-1.5H19.5v-6.09a1.5 1.5 0 0 0-3 0v6.09h-6.09a1.5 1.5 0 0 0 0 3h6.09v6.09a1.5 1.5 0 0 0 3 0V19.5h6.09a1.5 1.5 0 0 0 0-3Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/>
</symbol>
</svg>
</div>
<!-- partial -->

<script>

// Obtener todos los elementos con la clase 'toggle-container'
const toggleContainers = document.querySelectorAll('.toggle-container');

// Iterar sobre cada toggle-container y asignar eventos
toggleContainers.forEach(container => {
const toggleLabel = container.querySelector('.toggle-label');
const toggleSlider = container.querySelector('.toggle-slider');

// Cargar estado desde el almacenamiento local
const storedToggleState = localStorage.getItem(container.id);
if (storedToggleState === 'activado') {
activarToggle(container, toggleLabel, toggleSlider);
}

// Asignar evento de clic a cada toggle-container
container.addEventListener('click', (event) => toggleSwitch(event, container, toggleLabel, toggleSlider));
});

function toggleSwitch(event, container, status, slider) {
// Detener la propagación del evento para evitar que el enlace se abra
event.stopPropagation();

// Prevenir el comportamiento predeterminado del enlace
event.preventDefault();

if (container.classList.contains('activado')) {
desactivarToggle(container, status, slider);
} else {
activarToggle(container, status, slider);
}
}

function activarToggle(container, status, slider) {
container.classList.add('activado');
status.textContent = 'Visto';
slider.style.transform = 'translateX(36px)';
slider.style.backgroundColor = '#ccc';
localStorage.setItem(container.id, 'activado');
}

function desactivarToggle(container, status, slider) {
container.classList.remove('activado');
status.textContent = 'No visto';
slider.style.transform = 'translateX(0)';
slider.style.backgroundColor = '#ccc';
localStorage.setItem(container.id, 'desactivado');
}

function desactivarToggle(container, status, slider) {
container.classList.remove('activado');
status.textContent = 'No visto';
slider.style.transform = 'translateX(0)';
slider.style.backgroundColor = '#ccc';
localStorage.setItem(container.id, 'desactivado');
}
</script>

<script>
document.addEventListener('click', function(event) {
// Verificar si el clic fue dentro de un contenedor con la clase 'toggle-container'
if (event.target.closest('.toggle-container')) {
event.preventDefault();
}
});
</script>


<script>
const favoritoBtn = document.getElementById('favoritoBtn');
const identificador = favoritoBtn.getAttribute('data-identificador');

function mostrarMensaje(mensaje) {
const mensajeDiv = document.createElement('div');
mensajeDiv.innerText = mensaje;
mensajeDiv.classList.add('SarpMensajeF'); // Agregar la clase CSS
document.body.appendChild(mensajeDiv);

// Ocultar el mensaje después de unos segundos (ajusta el valor según sea necesario)
setTimeout(() => {
mensajeDiv.style.display = 'none';
}, 2000);
}


function toggleFavorito() {
const favoritoEnlace = document.getElementById('favoritoEnlace');
const imagen = document.getElementById('favoritoImagen');
const nombre = document.getElementById('nombre').textContent;
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

const encontrado = favoritos.some(favorito => favorito.identificador === identificador);

if (encontrado) {
const nuevosFavoritos = favoritos.filter(favorito => favorito.identificador !== identificador);
favoritoBtn.innerHTML = '<i class="far fa-heart sarpco"></i>';
localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

// Mostrar mensaje de eliminado de favoritos
mostrarMensaje('Eliminado de favoritos');
} else {
favoritos.push({
identificador: identificador,
imagen: imagen.outerHTML,
enlace: favoritoEnlace.href,
nombre: nombre,
});

favoritoBtn.innerHTML = '<i class="fas fa-heart corazon-lleno"></i>';
localStorage.setItem('favoritos', JSON.stringify(favoritos));

// Mostrar mensaje de agregado a favoritos
mostrarMensaje('Agregado a favoritos');
}
}

const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
const encontradoInicial = favoritos.some(favorito => favorito.identificador === identificador);

if (encontradoInicial) {
favoritoBtn.innerHTML = '<i class="fas fa-heart corazon-lleno"></i>';
} else {
favoritoBtn.innerHTML = '<i class="far fa-heart sarpco"></i>';
}

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.7/plyr.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/SarpYT/GeneradorAnimeDay/playerflotante.js"></script>
<script>

var selectedOption = 'Temporada 1';

function opentrolo() {
// Añade la clase 'selected' a la opción almacenada
document.querySelector('.option[data-option="' + selectedOption + '"]').classList.add('selected');

var trolo = document.getElementById('trolo');
var troloBackground = document.getElementById('trolo-background');
var troloContent = document.querySelector('.trolo-content');
trolo.style.display = 'block';
troloBackground.style.display = 'block';
setTimeout(function() {
troloContent.style.transform = 'translateY(0)';
}, 50);

document.querySelector('.hijo').classList.add('open');
document.querySelector('.pene').classList.add('open');
}

function selectOption(option) {
document.querySelectorAll('.option').forEach(function(optionElem) {
optionElem.classList.remove('selected');
});

document.querySelector('.option[data-option="' + option + '"]').classList.add('selected');

selectedOption = option;

// Actualiza el texto del elemento "Temporada X"
document.querySelector('.nada').textContent = option;

var allSeasons = document.querySelectorAll('.season-content');
allSeasons.forEach(function(season) {
season.classList.remove('active');
});

var selectedSeasonContent = document.getElementById('temporada-' + option.split(' ')[1].toLowerCase());
if (selectedSeasonContent) {
selectedSeasonContent.classList.add('active');
}

// Guarda la temporada seleccionada en el almacenamiento local
localStorage.setItem("temporadaSeleccionada", selectedOption);

closetrolo();
}

function closetrolo() {
var trolo = document.getElementById('trolo');
var troloBackground = document.getElementById('trolo-background');
var troloContent = document.querySelector('.trolo-content');
troloContent.style.transform = 'translateY(100%)';

document.querySelector('.hijo').classList.remove('open');
document.querySelector('.pene').classList.remove('open');

setTimeout(function() {
trolo.style.display = 'none';
troloBackground.style.display = 'none';
}, 500);
}

// Verifica si hay una temporada previamente seleccionada y la muestra al cargar la página
document.addEventListener("DOMContentLoaded", () => {
const temporadaGuardada = localStorage.getItem("temporadaSeleccionada");
if (temporadaGuardada) {
// Si hay una temporada guardada, muestra esa temporada
selectOption(temporadaGuardada);
} else {
// Si no hay una temporada guardada, muestra la primera temporada por defecto
selectOption(selectedOption);
}
});

</script>
<script>
document.addEventListener('DOMContentLoaded', function() {
const openModalButtons = document.querySelectorAll('.open-modal-button');

openModalButtons.forEach(button => {
button.addEventListener('click', function(event) {
// Evitar que se ejecute la función openFloatingPlayer
event.stopPropagation();
event.preventDefault();
});
});
});

document.addEventListener('DOMContentLoaded', function() {
var contenedores = document.querySelectorAll('.contenedor-valoracion');
contenedores.forEach(function(contenedor) {
var valoracion = parseFloat(contenedor.getAttribute('data-valoracion'));
if (valoracion < 0) {
valoracion = 0;
} else if (valoracion > 10) {
valoracion = 10;
}

// Ajuste de color de relleno según el rango de valoración
var color;
if (valoracion >= 0 && valoracion <= 3) {
color = '#FF6347'; // Rojo
} else if (valoracion >= 4 && valoracion <= 6) {
color = '#FFD700'; // Amarillo
} else {
color = '#90EE90'; // Verde claro
}

contenedor.style.setProperty('--valoracion', valoracion);
contenedor.style.setProperty('--color-relleno', color);
});
});

</script>
</body>
</html>
`;
            
            document.getElementById('resultado').value = plantilla;
        }
        
        function copiarTexto() {
            const textarea = document.getElementById('resultado');
            
            // Seleccionar el texto
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length); // Para dispositivos móviles
            
            try {
                const successful = document.execCommand('copy');
                const msg = successful ? '¡Plantilla copiada!' : 'Error al copiar';
                alert(msg);
            } catch (err) {
                console.error('Error al copiar el texto: ', err);
                fallbackCopyTextToClipboard(textarea.value);
            }
        }

        // Método de respaldo para copiar texto
        function fallbackCopyTextToClipboard(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                const msg = successful ? '¡Plantilla copiada!' : 'Error al copiar';
                alert(msg);
            } catch (err) {
                console.error('Error al copiar el texto: ', err);
            }
            document.body.removeChild(textArea);
        }
        
        function limpiarLocalStorage() {
            const campos = [
                'Iden', 'Report', 'ImagenF', 'NameH', 'FavoritLink', 
                'val', 'genres', 'Tempos', 'Año', 'Sipnosis', 
                'Sand', 'Creador', 'ImagenC', 'reina', 'fecha'
            ];

            campos.forEach(campo => {
                localStorage.removeItem(campo);
                document.getElementById(campo).value = '';
            });
            document.getElementById('resultado').value = '';
            alert('Datos eliminados del almacenamiento local.');
        }