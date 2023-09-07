// Dibujar el menú principal
function menuPrincipal() {
  push();
  fill(colorTexto);
  text("Gladiador de Neón", width/2, height/2-100);
  pop();
  dibujarBoton("JUGAR", width/2, height/2 + 135, 200, 30);
  dibujarBoton("INSTRUCCIONES", width/2, height/2 + 170, 200, 30);
  dibujarBoton("CRÉDITOS", width/2, height/2 + 205, 200, 30);
}
// Dibujar el selector de dificultad
function selectorDificultad() {
  push();
  fill(colorTexto);
  text("DIFICULTAD", width/2, height/2 - 100);
  pop();

  dibujarBoton("FÁCIL", width/2, height/2 - 35, 200, 30);
  dibujarBoton("NORMAL", width/2, height/2, 200, 30);
  dibujarBoton("DIFÍCIL", width/2, height/2 + 35, 200, 30);

  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 + 135, 200, 30);
}

// Dibujar la pantalla de fin de juego
function finJuego() {
  push();
  // Con un operador condicional ternario se determina que texto y color se utiliza para mostrar, puntos>=100 muestra "¡GANASTE!" de lo contrario "FIN DEL JUEGO"
  let resultado = (puntos>=100) ? ["¡GANASTE!", "CHARTREUSE"] : ["FIN DEL JUEGO", "RED"];
  fill(resultado[1]);
  textSize(30);
  text("Puntaje: " + puntos, width/2, height/2 -50);
  textSize(40);
  text(resultado[0], width/2, height/2 - 100);
  pop();
  dibujarBoton("REINICIAR", width/2, height/2 +135, 200, 30);
  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 +170, 200, 30);
}

// Head Up Display -> Muestra los puntos durante la partida
function hud() {
  push();
  textSize(30);
  fill(colorTexto);
  text(str(puntos), width/2, 50);
  pop();
}

// Muestra todo lo contenido durante la partida
function jugando() {
  // Calcular posición de los proyectiles
  moverProyectiles();
  
  // Actualizar un vector que contiene la posición del mouse
  posicionMouse.x = mouseX;
  posicionMouse.y = mouseY;

  // Al pasar el tiempo necesario instancia otro enemigo
  if (millis() >= proximoEnemigo) {
    crearEnemigo();
    proximoEnemigo = millis() + tiempoSpawnEnemigos[dificultad];
  }
  // Mover y dibujar enemigos
  enemigos();

  // Calcula el movimiento del personaje y lo dibuja
  angulo =  movimiento(posicionPersonaje, posicionMouse.copy(), rapidezPersonaje, distPersonaje);
  dibujarPersonaje(angulo);
  
  // Compureba todas las colisiones y en caso de que devuelva true, termina la partida
  if (comprobarColisiones()) {
    pantalla = 3;
  }
  
  hud();
}

function instrucciones() {   // Pantalla de instrucciones
  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 + 205, 200, 30);
  push();
  fill(colorTexto);
  textSize(20);
  text("Objetivo: Eliminar 100 enemigos", width/2, 100);
  text("Disparar", 170, 170);
  text("Utilizar el mouse para moverse", 400, 170);
  pop();
  image(imagenMouse, 100, 200);
}

function creditos() {  // Pantalla de créditos
  push();
  fill(colorTexto);
  textSize(20);
  text("Créditos", width/2, 100);
  text("Marco Marino", width/2, 150);
  text("Comisión 3", width/2, 200);
  text("Tecnología Multimedia 1", width/2, 250);
  text("Música:", width/2, 325);
  text("Deflector by Ghostrifter", width/2, 350);
  text("http://bit.ly/ghostrifter-yt", width/2, 375);
  text("Creative Commons — Attribution-ShareAlike 3.0 Unported", width/2, 400);
  text("CC BY-SA 3.0", width/2, 425)
  text("Free Download: https://hypeddit.com/track/ymgcr0", width/2, 450);
  pop();
  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 + 205, 200, 30);
}

