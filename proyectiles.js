function  inicializarProyectiles() {
  proyectiles = [];
}

function moverProyectiles() {
  proyectiles.forEach(proyectil => {
    proyectil[0].add(proyectil[1].copy().mult(rapidezProyectiles));
    dibujarProyectiles(proyectil[0]);
  });
}

function dibujarProyectiles(proyectilAa) {
  push();
  fill("#FF2020");
  translate(proyectilAa.x, proyectilAa.y);
  ellipse(0, 0, 8, 8);
  pop();
}


