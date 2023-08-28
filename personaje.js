function calcularMovimientoPersonaje() {
  let puntoObjetivo = createVector(0,0);
  puntoObjetivo.x = ((mouseX < width) ? mouseX : 600);
  puntoObjetivo.y = ((mouseY < height) ? mouseY : 600);
  personaje[1] = createVector(puntoObjetivo.x - personaje[0].x, puntoObjetivo.y - personaje[0].y);
  personaje[2] = personaje[1].angleBetween(createVector(width, 0));
  personaje[1].normalize();
  if (personaje[0].dist(puntoObjetivo) > 35) {
    personaje[0].x += personaje[1].x*velocidadPersonaje[dificultad];
    personaje[0].y += personaje[1].y*velocidadPersonaje[dificultad];
  }
}


function dibujarPersonaje() {
  push();
  ellipseMode(CENTER);
  noFill();
  stroke("WHITE");
  ellipse(personaje[0].x + personaje[1].x*150,personaje[0].y + personaje[1].y*150, 20, 20);
  translate(personaje[0].x, personaje[0].y);
  rotate(-personaje[2]);
  strokeWeight(3);
  stroke("CYAN");
  fill("BLACK");
  triangle(40, 0, 0, 30, 0, -30);
  ellipse(0, 0, 50, 50);
  pop();
}

function inicializarPersonaje(){
  personaje = [createVector(width/2, height/2), createVector(0, 0), 0];
}
