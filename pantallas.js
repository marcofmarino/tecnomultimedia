function menuPrincipal() {  // Pantalla menú principal
  push();
  fill("CYAN");
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Gladiador de Neón", width/2, height/2-100);
  pop();
  dibujarBoton("JUGAR", width/2, height/2 + 135, 200, 30);
  dibujarBoton("INSTRUCCIONES", width/2, height/2 +170, 200, 30);
  dibujarBoton("CRÉDITOS", width/2, height/2 +205, 200, 30);
}

function selectorDificultad() {  // Pantalla selector de dificultad
  push();
  fill("WHITE");
  textAlign(CENTER);
  textSize(40);
  text("DIFICULTAD", width/2, height/2 - 200);
  pop();
  dibujarBoton("FÁCIL", width/2, height/2 - 35, 200, 30);
  dibujarBoton("NORMAL", width/2, height/2, 200, 30);
  dibujarBoton("DIFÍCIL", width/2, height/2 + 35, 200, 30);

  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 + 135, 200, 30);
}

function finJuego() {
  push();
  // Con un operador condicional ternario se determina que texto y color se utiliza para mostrar, puntos>=100 muestra "¡GANASTE!" de lo contrario "FIN DEL JUEGO"
  let resultado = (puntos>=100) ? ["¡GANASTE!", "CHARTREUSE"] : ["FIN DEL JUEGO", "RED"];
  fill(resultado[1]);
  textAlign(CENTER);
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
  textAlign(CENTER, CENTER);
  textSize(30);
  fill("WHITE");
  text(str(puntos), width/2, 50);
  pop();
}

function jugando() {
  // Recorre el array disparos
  disparos.forEach(function(disparado) {
    // Cada array (disparado) dentro de disparos contiene en la posición 0 un boolean que determina si debe ser mostrado o no
    if (disparado[0]) {
      calcularMovimientoDisparo(disparado[4]);  // Calcula el movimiento del proyectil
      disparo(disparado[4]);  // Si debe ser mostrado, llama a la función disparo que lo dibuja, se encuentra en disparos.js
    }
  }
  );
  
  // Se calcula el movimiento del personaje y luego se lo dibuja, se encuentra en personaje.js
  calcularMovimientoPersonaje();
  dibujarPersonaje();
  

  // Comprueba si debe aparecer el próximo enemigo
  if (millis() > proximoEnemigo) {
    // Cambia el boolean para indicar que el enemigo siguiente debe ser mostrado
    enemigos[indiceEnemigos][0] = true;
    // Calcula cuando debe aparecer el próximo
    proximoEnemigo = millis() + timerEnemigos[dificultad];
    // Comprueba si debe resetearse el indiceEnemigos
    indiceEnemigos = ((indiceEnemigos < cantidadEnemigos - 1) ? (indiceEnemigos+1) : 0);
  }
  // Se recorre el array que contiene a los enemigos
  enemigos.forEach(function(enemigo) {
    if (enemigo[0]) {
      // Calcular el movimiento de cada enemigo y dibujarlo
      calcularMovimientoEnemigo(enemigo[4]);
      dibujarEnemigo(enemigo[4]);
    }
  }
  );
  
    // Se llama a comprobarColision() en enemigos.js para verificar si hubo colisión de un enemigo con el personaje -> devulve true; si no hay colisión o colisión con un proyectil -> false
  let colision = comprobarColision();
  
  // Si se colisionó con el personaje se cambia el estado por el de fin de juego
  estado = colision ? 3 : 2;
  
  // Mostrar el HUD
  hud();
}

function instrucciones() {   // Pantalla de instrucciones
  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 + 205, 200, 30);
  push();
  fill("CYAN");
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Objetivo: Eliminar 100 enemigos", width/2, 100);
  text("Disparar", 170, 170);
  text("Utilizar el mouse para moverse", 400, 170);
  pop();
  image(imagenMouse, 100, 200);
}

function creditos() {  // Pantalla de créditos
  push();
  textAlign(CENTER, CENTER);
  fill("CYAN");
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
