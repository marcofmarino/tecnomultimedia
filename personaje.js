//Archivo que incluye funciones relacionadas al personaje del jugador

function dibujarPersonaje(posicion, angulo, tamanio, colorPersonaje) {
  push();
  stroke(colorPersonaje);
  ellipseMode(CENTER);
  translate(posicion.x, posicion.y);
  rotate(-angulo);
  noFill();
  ellipse(0, -150, 15, 15);
  fill("#222222");
  strokeWeight(3);
  triangle(0, -40, -20, -5, 20, -5);
  ellipse(0, 0, tamanio, tamanio);
  pop();
}


function inicializarPersonaje() {
  posicionPersonaje = createVector(width/2, height/2);
}

