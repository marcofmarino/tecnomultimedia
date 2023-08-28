function calcularMovimientoEnemigo(indice) {
  enemigos[indice][2] = createVector(personaje[0].x - enemigos[indice][1].x, personaje[0].y - enemigos[indice][1].y);
  enemigos[indice][3] = enemigos[indice][2].angleBetween(createVector(width, 0));
  enemigos[indice][2].normalize();
  enemigos[indice][1].x += enemigos[indice][2].x*velocidadEnemigos[dificultad];
  enemigos[indice][1].y += enemigos[indice][2].y*velocidadEnemigos[dificultad];
}

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

function comprobarColision() {
  let fin = false
    for (let i=0; i<cantidadEnemigos; i++) {
    if (enemigos[i][1].dist(personaje[0]) < 35) {
      return true;
    } else {
      disparos.forEach(function(disparado) {
        if (disparado[0]) {
          if (enemigos[i][1].dist(disparado[1]) < 25) {
            enemigos[i] = [false, random(spawnsEnemigos).copy(), createVector(0, 0), 0, enemigos[i][4]];
            disparado[0] = false;
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


function inicializarEnemigos() {
  spawnsEnemigos = [createVector(0, 0), createVector(0, height), createVector(width, height), createVector(width, 0)];
  enemigos = [];
  for (let i=0; i<cantidadEnemigos; i++) {
    enemigos.push([false, random(spawnsEnemigos).copy(), createVector(0, 0), 0, i]);
  }
  proximoEnemigo = millis() + timerEnemigos[dificultad];
}
