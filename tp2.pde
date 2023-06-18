/*
--------------------
 TP2 - Obra OP Art
 Marco Marino
 Comision 3
 Video: https://youtu.be/CGNJGo33iSw
 --------------------
 */
// Declaración de variables
PImage img;

// Variables para colores
color color1 = 230;
color color2 = 50;

void setup() {
  size(800, 400);
  noStroke();
  img = loadImage("img.png");
}

void draw() {
  background(50);
  image(img, 0, 50);

  // Resetear colores si el mouse se encuentra sobre el area destinada a la imagen de referencia
  if (mouseX <=400) {
    color1 = 230;
    color2 = 50;
  }

  push();
  // Mediante dos for anidados se dibujan filas y columnas con un modulo repetido
  translate(400, 0);
  for (int y = 0; y<4; y++) {
    for (int x = 0; x<4; x++) {
      dibujarModulo(x*100, y*50, color1, color2);
    }
  }
  pop();
}
