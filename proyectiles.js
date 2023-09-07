// Se vacía el array de proyectiles al iniciar una partida
function  inicializarProyectiles() {
  proyectiles = [];
}

// Se utiliza un forEach para recorrer el array de proyectiles y actualizar su posición de acuerdo a su dirección y la rapidez
function moverProyectiles() {
  proyectiles.forEach(proyectil => {
    proyectil[0].add(proyectil[1].copy().mult(rapidezProyectiles));
    dibujarProyectiles(proyectil[0]);
  });
}

// Dibuja un proyectil como un círculo
function dibujarProyectiles(proyectil) {
  push();
  fill(colorProyectil);
  translate(proyectil.x, proyectil.y);
  ellipse(0, 0, 8, 8);
  pop();
}


