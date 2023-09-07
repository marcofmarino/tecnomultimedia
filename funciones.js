// Funciones generales

// Calcula el movimiento de enemigos o del jugador
function movimiento(posicion, objetivo, rapidez, valorDist) {
  // Evitar que el punto objetivo se encuentre fuera de la pantalla
  if (objetivo.x > width) {
    objetivo.x = width;
  }
  if (objetivo.y > height) {
    objetivo.y = height;
  }
  // Calcula la dirección del movimiento en base a objetivo
  // El parámetro objetivo debe ser un vector
  let direccion = objetivo.copy().sub(posicion);
  // Calcula el ángulo entre la dirección y vector vertical
  let angulo = direccion.angleBetween(createVector(0, -100));
  // Normalizar la dirección para que sea un vector de módulo 1
  direccion.normalize().mult(rapidez);

  // Actualizar la posición solo si se encuentra a cierta distancia de su objetivo, esto se utiliza para evitar "temblores"
  if (posicion.dist(objetivo) >= valorDist) {
    posicion.add(direccion);
  }

  return angulo;
}

// Comprueba todas las colisiones 
function comprobarColisiones() {
  let fin = false;
  // Recorrer el array de enemigos
  enemigosArray.forEach((enemigo, contEnemigo) => {
    // Si se supera la barrera de 100 puntos o un enemigo colisiona con el personaje termina el juego
    if(puntos>=100 || enemigo[0].dist(posicionPersonaje)<tamanioPersonaje-5){
        fin = true;
      }
    // Se recorre el array de proyectiles
    proyectiles.forEach((proyectil, contProyectil) => {
      // Verificar colisión de enemigo y proyectil
      if(enemigo[0].dist(proyectil[0]) <= tamanioEnemigo){
        //Eliminar al enemigo y al proyectil de sus arrays
        enemigosArray.splice(contEnemigo, 1);
        proyectiles.splice(contProyectil, 1);
        // Sumar puntos
        puntos++;
       }
      // Si un proyectil abandona la pantalla lo elimina del array
      if(proyectil[0].x > width || proyectil[0].x < 0 || proyectil[0].y > height || proyectil[0].y < 0){
        proyectiles.splice(contProyectil, 1);
      }
    });
  });
  return fin;
}
