function disparo(indice) {
  push();
  ellipseMode(CENTER);
  fill("RED");
  disparos[indice][1].x += disparos[indice][2].x*velocidadDisparos;
  disparos[indice][1].y += disparos[indice][2].y*velocidadDisparos;

  translate(disparos[indice][1].x, disparos[indice][1].y);
  rotate(-disparos[indice][3]);
  ellipse(0, 0, 10, 10);
  pop();
}

function inicializarDisparos() {
  disparos = [];
  for (let i=0; i<cantidadDisparos; i++) {
    disparos.push([false, createVector(0, 0), createVector(0, 0), 0, int(i)]);
  }
}
