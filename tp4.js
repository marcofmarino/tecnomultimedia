/*
-----------------------------------------
TP4 - Videojuego tipo arcade en p5.js 
Marco Marino
Comisión 3
Video:
-----------------------------------------
*/

// Colores 
const colorFondo = "#222222";
const colorTexto = "#20FFFF";

const colorPersonaje = "#20FFFF";
const colorEnemigo = "#FF18E4";
const colorProyectil = "#20FF20";

const colorBotonNormal = "#20FFFF";
const colorBotonHover = "#F2F2F2";
const textoBoton = "#222222";

// Variables para controlar elementos del juego
let puntos = 0;
let angulo;
let posicionMouse;
let pantalla = 0;
let dificultad = 0;

// Variables para cargar recursos externos
let imagenMouse;
let musicaJugando;

// Variables y constantes relacionadas con el personaje
let posicionPersonaje;
let rapidezPersonaje = 6;
const tamanioPersonaje = 40;
const distPersonaje = 35;

// Variables y constantes relacionadas con los enemigos
let enemigosArray;
let puntosSpawn;
let tiempoSpawnEnemigos = [400, 350, 300];
let proximoEnemigo;
const rapidezEnemigos = [4, 4, 5];
const tamanioEnemigo = 40;

// Variable y constante relacionada con proyectiles
let proyectiles;
const rapidezProyectiles = 15;

// Cargar los recursos externos
function preload() {
  musicaJugando = loadSound('assets/jugando.mp3');
  imagenMouse = loadImage('assets/mouse.png');
}

function setup() {
  createCanvas(600, 600); 

  noCursor();
  textAlign(CENTER, CENTER);
  textSize(40);
  ellipseMode(CENTER);
// Inicializar el array puntosSpawn con 4 vectores que representan los puntos en los que pueden aparecer los enemigos
  puntosSpawn = [createVector(0, 0), createVector(width, 0), createVector(width, height), createVector(0, height)];
  posicionMouse = createVector(mouseX, mouseY);
}

function draw() {
  background(colorFondo);
  
  // Utilización de un switch-case para determinar la pantalla que debe ser mostrada de acuerdo al estado, las pantallas se encuentran en pantallas.js
  switch(pantalla) {
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
  if (pantalla !== 2) {
    cursorCircular();
  }

}

function mousePressed(){
  // Se utiliza un switch-case para determinar en qué pantalla se encuentra y ejecutar lo correspondiente
  switch(pantalla) {
  case 0:
    // Comprueba si se pulsó algún botón del menú principal
    if (colisionBoton(width/2, height/2 + 135, 200, 30)) {
      pantalla = 1;
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) {
      pantalla = 4;
    } else if (colisionBoton(width/2, height/2 + 205, 200, 30)) {
      pantalla = 5;
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
      pantalla = 0;
    }

    // Si se seleccionó una dificultad -> empezar=true
    if (empezar) {
      puntos = 0; // Resetear puntos
      // Si ya está sonando la música de juego se para, después se inicia para que siempre comience de nuevo al empezar a jugar
      if (musicaJugando.isPlaying()) {
        musicaJugando.stop();
      }
      musicaJugando.play();

      // Inicialización de elementos de juego, las funciones se encuentran en personaje.js, proyectiles.js y enemigos.js
      inicializarEnemigos();
      inicializarPersonaje();
      inicializarProyectiles();

      pantalla = 2; // Se pasa a la pantalla de juego
    }
    break;

  case 2:
    // Pantalla de juego
    // Cada vez que se realiza un click se añade un proyectil al array proyectiles, con una dirección que va desde el centro del personaje a la posición del mouse
    let direccion = posicionMouse.copy().sub(posicionPersonaje);
    direccion.normalize(); // Se normaliza el vector para que tenga una módulo = 1
    // Cada proyectil es un array que contiene su posición y dirección
    proyectiles.push([posicionPersonaje.copy(), direccion]);
    break;

  case 3:
    // Pantalla fin de juego
    if (colisionBoton(width/2, height/2 +135, 200, 30)) {          // Volver a jugar
      pantalla = 1;
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) {  // Volver al menú principal
      pantalla = 0;
    }
    break;

  case 4:
    // Pantalla de instrucciones
    if (colisionBoton(width/2, height/2 + 205, 200, 30)) {  // Volver al menú principa
      pantalla = 0;
    }
    break;

  case 5:
    // Pantalla de créditos
    if (colisionBoton(width/2, height/2 + 205, 200, 30)) { // Volver al menú principal
      pantalla = 0;
    }
    break;
  }
}

