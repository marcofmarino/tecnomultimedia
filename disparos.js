function calcularMovimientoDisparo(indice) {
  // Para calcular el movimiento se utiliza el indice para determinar cual es el proyectil a calcular
  // En la posición 1 de cada disparo se encuentra su posición, a esta se le suma la dirección que tiene ubicada en la posición 2 y se multiplica por la velocidad
  // La posición y la dirección es la que tiene el jugador al momento de disparar, luego la posición se va alterando pero la dirección no
  disparos[indice][1].x += disparos[indice][2].x*velocidadDisparos;
  disparos[indice][1].y += disparos[indice][2].y*velocidadDisparos;
}

// Mostrar disparo
function disparo(indice) {
  push();
  ellipseMode(CENTER);
  fill("RED");
  translate(disparos[indice][1].x, disparos[indice][1].y); // Utilizando el índice se puede determinar que proyectil es el que debe ser dibujado
  rotate(-disparos[indice][3]);
  ellipse(0, 0, 10, 7);
  pop();
}

// Función llamada al inciar una partida
function inicializarDisparos() {
  disparos = []; // Se vacía el array que contiene los disparos, para que no quede información de una partida a otra
  for (let i=0; i<cantidadDisparos; i++) {
    // Se van agregando proyectiles hasta la cantidad máxima
    // false -> Indica si debe ser dibujado o no
    // createVector(0, 0) -> Valor de posición por defecto, nunca se utiliza
    // createVector(0, 0) -> Valor de dirección por defecto
    // 0 -> Valor de ángulo por defecto
    // int(0) -> Darle un índice para que sepa en que posición del array de disparos se encuentra
    disparos.push([false, createVector(0, 0), createVector(0, 0), 0, int(i)]);
  }
}
