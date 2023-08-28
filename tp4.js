let dificultad = 0;

let estado = 0;
let puntos;

let imagenMouse;

let musicaJugando;

let personaje = [];
const velocidadPersonaje = [8, 7, 6];

let disparos = [];
let contadorDisparos = 0;
const velocidadDisparos = 15;
const cantidadDisparos = 10;

const cantidadEnemigos = 15;
const velocidadEnemigos = [3, 4, 5];
const timerEnemigos = [500, 500, 300];
let indiceEnemigos = 0;
let proximoEnemigo = 0;
let enemigos = [];
let spawnsEnemigos = [];

function preload() {
  musicaJugando = loadSound('assets/jugando.mp3');
  imagenMouse = loadImage('assets/mouse.png');
}

function setup() {
  createCanvas(600, 600);

  noCursor();
}


function draw() {
  background("BLACK");

  switch(estado) {
  case 0:
    menuPrincipal();
    cursorCircular();
    break;
  case 1:
    selectorDificultad();
    cursorCircular();
    break;
  case 2:
    jugando();
    break;
  case 3:
    finJuego();
    cursorCircular();
    break;
  case 4:
    instrucciones();
    cursorCircular();
    break;
  case 5:
    creditos();
    cursorCircular();
    break;
  }
}

function mousePressed() {

  switch(estado) {
  case 0:
    if (colisionBoton(width/2, height/2 + 135, 200, 30)) {
      estado = 1;
    } else if (colisionBoton(width/2, height/2 + 170, 200, 30)) {
      estado = 4;
    } else if (colisionBoton(width/2, height/2 + 205, 200, 30)) {
      estado = 5;
    }
    break;
  case 1:
    let empezar = false;
    if (colisionBoton(width/2, height/2 - 35, 200, 30)) {
      dificultad = 0;
      empezar = true;
    } else if (colisionBoton(width/2, height/2, 200, 30)) {
      dificultad = 1;
      empezar = true;
    } else if (colisionBoton(width/2, height/2 + 35, 200, 30)) {
      dificultad = 2;
      empezar = true
    } else if (colisionBoton(width/2, height/2 + 135, 200, 30)) {
      estado = 0;
    }

    if (empezar) {
      puntos = 0;
      if (musicaJugando.isPlaying()) {
        musicaJugando.stop();
      }
      musicaJugando.play();

      inicializarPersonaje();
      inicializarDisparos();
      inicializarEnemigos();

      estado = 2;
      empezar = false;
    }
    break;

  case 2:
    disparos[contadorDisparos] = [true, personaje[0].copy(), personaje[1].normalize().copy(), personaje[2], contadorDisparos];
    contadorDisparos = ((contadorDisparos < cantidadDisparos) ? (contadorDisparos+1) : 0);
    break;

  case 3:
    estado = (colisionBoton(width/2, height/2 +135, 200, 30)) ? 1 : estado;
    estado = (colisionBoton(width/2, height/2 + 170, 200, 30)) ? 0 : estado;
    break;
   case 4:
   if (colisionBoton(width/2, height/2 + 205, 200, 30)) {
      estado = 0;
    }
    break;
    case 5:
    if (colisionBoton(width/2, height/2 + 205, 200, 30)) {
      estado = 0;
    }
    break;
  }
}
