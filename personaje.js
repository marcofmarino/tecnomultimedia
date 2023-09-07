//Archivo que incluye funciones relacionadas al personaje del jugador
// Dibuja al personaje, utiliza un ángulo para rotarlo en dirección a la ubicación del mouse
function dibujarPersonaje(angulo) {
  push();
  stroke(colorPersonaje);
  ellipseMode(CENTER);
  translate(posicionPersonaje.x, posicionPersonaje.y);
  rotate(-angulo);
  noFill();
  ellipse(0, -150, 15, 15);
  fill(colorFondo);
  strokeWeight(3);
  triangle(0, -40, -20, -5, 20, -5);
  ellipse(0, 0, tamanioPersonaje, tamanioPersonaje);
  pop();
}

// Al iniciar una partida se coloca la ubicación del jugador en el centro de la pantalla
function inicializarPersonaje() {
  posicionPersonaje = createVector(width/2, height/2);
}

