function  inicializarProyectiles() {
  proyectiles = [];
}

function moverProyectiles() {
  proyectiles.forEach(proyectil => {
    proyectil[0].add(proyectil[1].copy().mult(rapidezProyectiles));
    dibujarProyectiles(proyectil[0]);
  });
}

function dibujarProyectiles(proyectil) {
  push();
  fill(colorProyectil);
  translate(proyectil.x, proyectil.y);
  ellipse(0, 0, 8, 8);
  pop();
}


