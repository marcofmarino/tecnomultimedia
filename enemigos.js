function inicializarEnemigos() {
  enemigosArray = [];
  proximoEnemigo = millis() + tiempoSpawnEnemigos[dificultad];
}

function crearEnemigo() {
  let tipoEnemigo = [posicionMouse, posicionPersonaje];
  enemigosArray.push([random(puntosSpawn).copy(), random(tipoEnemigo)]);
}

function enemigos() {
  enemigosArray.forEach(enemigo => {
    angulo = movimiento(enemigo[0], enemigo[1], rapidezEnemigos[dificultad], 5);
    dibujarEnemigo(enemigo[0], angulo, tamanioEnemigo);
  });
}

function dibujarEnemigo(posicion, angulo) {
  push();
  stroke(colorEnemigo);
  strokeWeight(3);
  noFill();
  translate(posicion.x, posicion.y);
  rotate(-angulo);
  ellipse(0, 0, tamanioEnemigo, tamanioEnemigo);
  strokeWeight(2);
  arc(0, 0, tamanioEnemigo*0.75, tamanioEnemigo*0.75, -PI*0.75, -PI*0.25);
  pop();
}


