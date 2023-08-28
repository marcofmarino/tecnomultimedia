function calcularMovimientoPersonaje() {
  // Se crea un punto objetivo al que el jugador sigue, normalmente son las coordenadas del mouse, excepto que estas sean mayores al tamaño de la pantalla de juego, para que el jugador no salga
  let puntoObjetivo = createVector(0, 0);
  puntoObjetivo.x = ((mouseX < width) ? mouseX : 600);
  puntoObjetivo.y = ((mouseY < height) ? mouseY : 600);
  
  // Se calcula la dirección del personaje creando un vector que apunta al puntoObjetivo desde la posición actual del personaje
  personaje[1] = createVector(puntoObjetivo.x - personaje[0].x, puntoObjetivo.y - personaje[0].y);
  // Se calcula el ángulo que tiene la dirección con respecto a una línea horizontal
  personaje[2] = personaje[1].angleBetween(createVector(width, 0));
  // Se normaliza la dirección para que al calcular el movimiento el desplazamiento no sea más rápido en diagonal que horizontalmente o verticalmente
  personaje[1].normalize();
  // Nunca se permite al personaje alcanzar el puntoObjetivo, de esta forma se suaviza el movimiento, mientras mayor sea el número más suave va a ser, pero más restringido, mientras que un menor valor vuelve el movimiento brusco
  if (personaje[0].dist(puntoObjetivo) > 35) {
    // Calcular la posición de acuerdo a la dirección y a la velocidad determinada por la dificultad
    personaje[0].x += personaje[1].x*velocidadPersonaje[dificultad];
    personaje[0].y += personaje[1].y*velocidadPersonaje[dificultad];
  }
}

// Dibujar el personaje
function dibujarPersonaje() {
  push();
  ellipseMode(CENTER);
  noFill();
  stroke("WHITE");
  // Se dibuja un círculo alejado del personaje en dirección a la que ve, para darle referencia al jugador del apuntado
  ellipse(personaje[0].x + personaje[1].x*150, personaje[0].y + personaje[1].y*150, 20, 20);
  translate(personaje[0].x, personaje[0].y);
  rotate(-personaje[2]);
  strokeWeight(3);
  stroke("CYAN");
  fill("BLACK");
  triangle(40, 0, 0, 30, 0, -30);
  ellipse(0, 0, 50, 50);
  pop();
}

// Resetear el personaje al empezar una partida
function inicializarPersonaje() {
  // El array contiene la información del personaje
  // createVector(width/2, height/2) -> Coloca al personaje en el centro de la pantalla al iniciar un juego
  // createVector(0, 0) -> Dirección inicial del personaje
  // 0 -> Ángulo incial del personaje
  personaje = [createVector(width/2, height/2), createVector(0, 0), 0];
}
