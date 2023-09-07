// Vacía el array de enemigos y resetea el tiempo de aparición del próoximo enemigo
function inicializarEnemigos() {
  enemigosArray = [];
  proximoEnemigo = millis() + tiempoSpawnEnemigos[dificultad];
}


function crearEnemigo() {
  // Puede haber dos tipos de enemigos, uno que sigue al personaje y otro que "predice" el movimiento de este, moviéndose a la ubicación del mouse
  let tipoEnemigo = [posicionMouse, posicionPersonaje];
  // Agrega un enemigo al array con un punto de aparición y objetivo a seguir aleatorios
  enemigosArray.push([random(puntosSpawn).copy(), random(tipoEnemigo)]);
}

function enemigos() {
  // Recorre el arry de enemigos para calcular sus movimientos y dibujarlos
  enemigosArray.forEach(enemigo => {
    angulo = movimiento(enemigo[0], enemigo[1], rapidezEnemigos[dificultad], 5);
    dibujarEnemigo(enemigo[0], angulo, tamanioEnemigo);
  });
}

// Dibuja un enemigo
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


