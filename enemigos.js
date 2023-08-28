function calcularMovimientoEnemigo(indice) {
  // Se calcula la dirección de movimiento del enemigo, esto se hace creando un vector que apunta desde la posición actual del enemigo a la del personaje
  enemigos[indice][2] = createVector(personaje[0].x - enemigos[indice][1].x, personaje[0].y - enemigos[indice][1].y);
  // Se calcula el ángulo de la dirección
  enemigos[indice][3] = enemigos[indice][2].angleBetween(createVector(width, 0));
  // Normalizar la dirección para al calcular el movimiento no se desplace más rápidamente en diagonal que horizontalmente o verticalmente
  enemigos[indice][2].normalize();
  // Cambiar la posición, se suma a la posición la dirección normalizada multiplicada por la velocidad del enemigo de acuerdo a la dificultad
  enemigos[indice][1].x += enemigos[indice][2].x*velocidadEnemigos[dificultad];
  enemigos[indice][1].y += enemigos[indice][2].y*velocidadEnemigos[dificultad];
}

// Dibujar enemigo
function dibujarEnemigo(indice) {
  push();
  stroke("CHARTREUSE");
  strokeWeight(3);
  noFill();
  ellipseMode(CENTER);
  translate(enemigos[indice][1].x, enemigos[indice][1].y);
  rotate(-enemigos[indice][3]);
  ellipse(0, 0, 50, 50);
  strokeWeight(2);
  arc(0, 0, 40, 40, -PI/4.0, PI / 4.0);
  pop();
}

// Comprobar la colisión de cada enemigo con el personaje o con proyectiles
function comprobarColision() {
  let fin = false
    for (let i=0; i<cantidadEnemigos; i++) {
      // Si un enemigo colisiona con el personaje retorna true para terminar la partida, la colisión tiene un valor de 35, un poco menor al tamaño del personaje (50) para facilitar el juego
    if (enemigos[i][0] && enemigos[i][1].dist(personaje[0]) < 35) {
      return true;
    } else {
      // Se comprueba si el enemigo colisionó con algún proyectil
      disparos.forEach(function(disparado) {
        if (disparado[0]) {  // Solo se comprueba con los proyectiles que tengas su boolean en true
          if (enemigos[i][0] && enemigos[i][1].dist(disparado[1]) < 25) {
            // Si colisiona se resetea el enemigo
            enemigos[i] = [false, random(spawnsEnemigos).copy(), createVector(0, 0), 0, enemigos[i][4]];
            // El proyectil pasa a tener estado false para no ser mostrado en pantalla ni utilizado en un futuro cálculo de colisión
            disparado[0] = false;
            
            // Al eliminar un enemigo se aumenta el puntaje, al alcanzar o superar 100 puntos se termina la partida
            puntos++;
            if (puntos >= 100) {
              fin = true;
            }
          }
        }
      }
      );
    }
  }
  return fin;
}

// Se resetean los enemigos al iniciar una partida para eliminar información de alguna anterior
function inicializarEnemigos() {
  enemigos = []; // Se vacía el array de enemigos
  for (let i=0; i<cantidadEnemigos; i++) {
    // Se carga el array de enemigos con valores por defecto
    // false -> Indica si el enemigo debe ser mostrado y utilizado para calcular colisiones
    // random(spawnsEnemigos).copy() -> Le da una posición incial seleccionando al azar entre las determinadas en los puntos de aparición
    // createVector(0, 0) -> Dirección inicial por defecto
    // 0 -> Ángulo inicial por defecto
    // i -> Posición en el array de enemigos
    enemigos.push([false, random(spawnsEnemigos).copy(), createVector(0, 0), 0, i]);
  }
  // Se calcula cuando debe aparecer el primer enemigo, para que no aparezca al instante de empezar a jugar
  proximoEnemigo = millis() + timerEnemigos[dificultad];
}
