// Dibujar un boton rectangular
void dibujarBoton(String texto, float x, float y, float ancho, float alto) {
  push();
  // El color cambia dependiendo si el mouse se encuentra sobre el boton o no
  if (colisionBoton(x, y, ancho, alto)) {
    fill(rojo);
  } else {
    fill(blanco);
  }

  rectMode(CENTER);
  rect(x, y, ancho, alto);
  
  // Escribir el texto
  fill(negro);
  textAlign(CENTER, CENTER);
  text(texto, x, y );

  pop();
}
// Dibujar un boton circular, se realizó una sobrecarga para que dependiendo la cantidad de parametros se pueda dibujar un boton rectangular o uno circular
void dibujarBoton(String texto, float x, float y, float diametro) {
  push();
// El color cambia dependiendo si el mouse se encuentra sobre el boton o no
  if (colisionBoton(x, y, diametro)) {
    fill(rojo);
  } else {
    fill(blanco);
  }

  ellipseMode(CENTER);
  ellipse(x, y, diametro, diametro);
// Escribir el texto
  fill(negro);
  textAlign(CENTER, CENTER);
  text(texto, x, y );
  pop();
}

boolean colisionBoton(float x, float y, float ancho, float alto) {
  return mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2;
}

boolean colisionBoton(float x, float y, float diametro) {
  return dist(x, y, mouseX, mouseY) < diametro/2;
}

void mostrarPantalla(PImage imagen, String texto, float textoX, float textoY) {
  image(imagen, 0, 0);
  text(texto, textoX, textoY, 560, 600);
}
