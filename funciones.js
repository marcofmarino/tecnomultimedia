// Funciones generales

function movimiento(posicion, objetivo, rapidez, valorDist) {
  let direccion = objetivo.copy().sub(posicion);
  let angulo = direccion.angleBetween(createVector(0, -100));
  direccion.normalize().mult(rapidez);
  if (posicion.dist(objetivo) >= valorDist) {
    posicion.add(direccion);
  }

  return angulo;
}

function comprobarColisiones() {
  let fin = false;
  enemigosArray.forEach((enemigo, contEnemigo) => {
    if(puntos>=100 || enemigo[0].dist(posicionPersonaje)<tamanioPersonaje-5){
        fin = true;
      }
    proyectiles.forEach((proyectil, contProyectil) => {
      if(enemigo[0].dist(proyectil[0]) < 30){
        enemigosArray.splice(contEnemigo, 1);
        proyectiles.splice(contProyectil, 1);
        puntos++;
       }
      if(proyectil[0].x > width || proyectil[0].x < 0 || proyectil[0].y > height || proyectil[0].y < 0){
        proyectiles.splice(contProyectil, 1);
      }
    });
  });
  return fin;
}
