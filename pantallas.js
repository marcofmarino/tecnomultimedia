function menuPrincipal() {
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

function selectorDificultad() {
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
  let resultado = (puntos>=100) ? ["¡GANASTE!", "CHARTREUSE"] : ["FIN DEL JUEGO", "RED"];
  fill(resultado[1]);
  textAlign(CENTER);
  textSize(40);
  text(resultado[0], width/2, height/2 - 100);
  pop();
  dibujarBoton("REINICIAR", width/2, height/2 +135, 200, 30);
  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 +170, 200, 30);
}

function hud() {
  push();
  textAlign(CENTER, CENTER);
  textSize(30);
  fill("WHITE");
  text(str(puntos), width/2, 50);
  pop();
}

function jugando() {
  disparos.forEach(function(disparado) {
    if (disparado[0]) {
      disparo(disparado[4]);
    }
  }
  );
  calcularMovimientoPersonaje();
  dibujarPersonaje();
  let colision = comprobarColision();
  estado = colision ? 3 : 2;

  if (millis() > proximoEnemigo) {
    enemigos[indiceEnemigos][0] = true;
    proximoEnemigo = millis() + timerEnemigos[dificultad];
    indiceEnemigos = ((indiceEnemigos < cantidadEnemigos - 1) ? (indiceEnemigos+1) : 0);
  }
  enemigos.forEach(function(enemigo) {
    if (enemigo[0]) {
      calcularMovimientoEnemigo(enemigo[4]);
      dibujarEnemigo(enemigo[4]);
    }
  }
  );
  hud();
}

function instrucciones() {
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

function creditos() {
  push();
  textAlign(CENTER, CENTER);
  fill("CYAN");
  textSize(20);
  text("Créditos", width/2, 100);
  text("Marco Marino", width/2, 150);
  text("Comisión 3", width/2, 200);
  text("Tecnología Multimedia 1", width/2,250);
  text("Música:", width/2, 325);
  text("Deflector by Ghostrifter", width/2, 350);
  text("http://bit.ly/ghostrifter-yt", width/2, 375);
  text("Creative Commons — Attribution-ShareAlike 3.0 Unported", width/2, 400);
  text("CC BY-SA 3.0", width/2, 425)
  text("Free Download: https://hypeddit.com/track/ymgcr0", width/2, 450);
  pop();
  dibujarBoton("VOLVER AL MENÚ", width/2, height/2 + 205, 200, 30);
}
