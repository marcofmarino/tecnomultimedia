void dibujarBoton(String texto, float x, float y, float ancho, float alto) {
  push();
  color fondo = blanco;
  color efectoOver = rojo;

  if (colisionBoton(x, y, ancho, alto)) {
    fill(efectoOver);
  } else {
    fill(fondo);
  }

  rectMode(CENTER);
  rect(x, y, ancho, alto);

  fill(negro);
  textAlign(CENTER, CENTER);
  text(texto, x, y );

  pop();
}

void dibujarBoton(String texto, float x, float y, float diametro) {
  push();
  color fondo = blanco;
  color efectoOver = rojo;

  if (colisionBoton(x, y, diametro)) {
    fill(efectoOver);
  } else {
    fill(fondo);
  }

  ellipseMode(CENTER);
  ellipse(x, y, diametro, diametro);

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
