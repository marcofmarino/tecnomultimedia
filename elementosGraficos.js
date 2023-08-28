// Dibujar un botón rectangular
function dibujarBoton(texto, x, y, ancho, alto) {
  push();
  // El color cambia dependiendo si el mouse se encuentra sobre el boton o no
  if (colisionBoton(x, y, ancho, alto)) {
    fill("WHITE");
  } else {
    fill("CYAN");
  }

  rectMode(CENTER);
  rect(x, y, ancho, alto, 5);

  // Escribir el texto
  fill("BLACK");
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, x, y );
  pop();
}

// Comprobar la colisión con un botón rectangular
function colisionBoton(x, y, ancho, alto) {
  return mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2;
}

// Dibujar un círculo a modo de cursor, en la posición del mouse
function cursorCircular() {
  push();
  stroke("CYAN");
  fill("BLACK");
  ellipse(mouseX, mouseY, 20, 20);
  pop();
}
