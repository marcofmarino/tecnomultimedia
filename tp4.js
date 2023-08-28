/*
--------------------
 TP4 - Videojuego p5.js
 Marco Marino
 Comision 3
 Video: https://youtu.be/6Stcbm7lW7I
 --------------------
 */

// Variables para controlar elementos del juego

let dificultad = 0;  // 0: Fácil - 1: Normal - 3: Difícil
let estado = 0;      // 0: Menú - 1: Seleccionar dificultad - 2: Jugando - 3: Fin del juego - 4: Instrucciones - 5: Créditos
let puntos;          // 1 punto por cada enemigo derrotado



// ######## Variables para cargar recursos externos ########

let imagenMouse;
let musicaJugando;



// ######## Variable y constante relacionadas con el personaje ########

let personaje = [];                    // Todo lo necesario para mostrar al personaje en pantalla se almacena en un array
const velocidadPersonaje = [8, 7, 6];  // Dependiendo la dificultad se selecciona una velocidad



// ########  Variables y constantes relacionadas con los disparos ########

let disparos = [];                // Array para contener arrays con la información de cada disparo
let contadorDisparos = 0;         // Utilizado para recorrer array de disparos
const velocidadDisparos = 15;     // Velocidad a la que se mueven los disparos
const cantidadDisparos = 10;      // Cantidad máxima de proyectiles que puede haber en pantalla



// ######## Variables y constantes relacionadas con os enemigos ########

const cantidadEnemigos = 15;            // Cantidad máxima de enemigos que puede haber en pantalla
const velocidadEnemigos = [3, 4, 5];    // Velocidad de enemigos, se selecciona una u otra dependiendo la dificultad
const timerEnemigos = [500, 500, 300];  // Tiempo en milisegundos que debe pasar para que apareza un nuevo enemigo, varía con la dificultad
let indiceEnemigos = 0;                 // Utilizado para recorrer un array de enemigos
let proximoEnemigo = 0;                 // Variable utilizada para calcular cuando debe aparecer el próximo enemigo
let enemigos = [];                      // Array que contiene arrays con la información de cada enemigo
let spawnsEnemigos = [];                // Array para contener los puntos en los que puede aparecer un enemigo


// Cargar los recursos externos
function preload() {
  musicaJugando = loadSound('assets/jugando.mp3');
  imagenMouse = loadImage('assets/mouse.png');
}

function setup() {
  createCanvas(600, 600);

  //Inicializar el array spawnEnemigos con 4 vectores que representan los 4 puntos en los que pueden aparecer los enemigos
  spawnsEnemigos = [createVector(0, 0), createVector(0, height), createVector(width, height), createVector(width, 0)];

  noCursor(); // Ocultar cursor
}


function draw() {
  background("BLACK");

  // Utilización de un switch-case para determinar la pantalla que debe ser mostrada de acuerdo al estado, las pantallas se encuentran en pantallas.js
  switch(estado) {
  case 0:
    menuPrincipal();
    break;
  case 1:
    selectorDificultad();
    break;
  case 2:
    jugando();
    break;
  case 3:
    finJuego();
    break;
  case 4:
    instrucciones();
    break;
  case 5:
    creditos();
    break;
  }

  // Ya que se utilizó noCursor() en todas las pantallas menos en la de juego se muestra un cursor personalizado
  if (estado !== 2) {
    cursorCircular();
  }
}

function mousePressed() {
  // Se utiliza un switch-case para determinar en qué pantalla se encuentra y ejecutar lo correspondiente
  switch(estado) {
  case 0:
    // Comprueba si se pulsó algún botón del menú principal
    if (colisionBoton(width/2, height/2 + 135, 200, 30)) {
      estado = 1;
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) {
      estado = 4;
    } else if (colisionBoton(width/2, height/2 + 205, 200, 30)) {
      estado = 5;
    }
    break;
  case 1:
    // Pantalla selección de dificultad

    // Comprueba si se presionó algún botón de dificultad o se volvió al menú
    let empezar = false;
    if (colisionBoton(width/2, height/2 - 35, 200, 30)) {           // Fácil
      dificultad = 0;
      empezar = true;
    } else if (colisionBoton(width/2, height/2, 200, 30)) {         // Normal
      dificultad = 1;
      empezar = true;
    } else if (colisionBoton(width/2, height/2 + 35, 200, 30)) {    // Difícil
      dificultad = 2;
      empezar = true
    } else if (colisionBoton(width/2, height/2 + 135, 200, 30)) {  // Volver al menú
      estado = 0;
    }

    // Si se seleccionó una dificultad -> empezar=true
    if (empezar) {
      puntos = 0; // Resetear puntos

      // Si ya está sonando la música de juego se para, después se inicia para que siempre comience de nuevo al empezar a jugar
      if (musicaJugando.isPlaying()) {
        musicaJugando.stop();
      }
      musicaJugando.play();

      // Inicialización de elementos de juego, las funciones se encuentran en personaje.js, disparos.js y enemigos.js
      inicializarPersonaje();
      inicializarDisparos();
      inicializarEnemigos();


      estado = 2; // Se coloca el estado en modo juego
    }
    break;

  case 2:
    // Pantalla de juego
    // Si se reliza click se realiza un disparo

    // Se recorre el array de disparos de acuerdo al contadorDisparos
    // true -> utilizado para indicar que ese proyectil debe ser mostrado en pantalla
    // personaje[0].copy -> copia la posición del personaje para determinar en donde debe aparecer
    // personaje[1].normalize().copy() -> Copia la dirección en la que se mueve el personaje y la normaliza para que su velocidad sea constante y no se desplace más rápido en diagonal
    // personaje[2] -> Recibe el ángulo al que está rotado el personaje
    // contadorDisparos -> Cada proyectil conoce su ubicación dentro del array de disparos
    disparos[contadorDisparos] = [true, personaje[0].copy(), personaje[1].normalize().copy(), personaje[2], contadorDisparos];

    // Se utiliza un condicional ternario para determinar si se debe aumentar el contador o reiniciarlo
    contadorDisparos = ((contadorDisparos < cantidadDisparos) ? (contadorDisparos+1) : 0);
    break;

  case 3:
    // Pantalla fin de juego
    if (colisionBoton(width/2, height/2 +135, 200, 30)) {          // Volver a jugar
      estado = 1;
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) {  // Volver al menú principal
      estado = 0;
    }
    break;
  case 4:
    // Pantalla de instrucciones

    if (colisionBoton(width/2, height/2 + 205, 200, 30)) {  // Volver al menú principal
      estado = 0;
    }
    break;
  case 5:
    // Pantalla de créditos

    if (colisionBoton(width/2, height/2 + 205, 200, 30)) { // Volver al menú principal
      estado = 0;
    }
    break;
  }
}
