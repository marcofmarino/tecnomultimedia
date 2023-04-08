/*
--------------------
 |  TP0 - Retrato   |
 |  Marco Marino    |
 |  Comision 3      |
 --------------------
 */

// Declarar variable para la imagen
PImage img;

// Variables para colores
color negro = color(26, 26, 26);
color pielLuz = color(220, 196, 184);
color pielSombra = color(200, 176, 164);
color pelo = color(80, 67, 61);
color blanco = color(220, 220, 220);
color labios = color(190, 120, 120);
color labiosSombra = color(150, 90, 90);

void setup() {
  size(800, 400);
  img = loadImage("data/img.jpg");

  noStroke();
}

void draw() {
  // Definir color del fondo y mostrar la imagen
  background(199, 192, 184);
  image(img, 400, 0);
  
  // Orejas
  fill(pielSombra);
  triangle(125, 190, 115, 135, 170, 190);
  triangle(275, 190, 285, 135, 230, 190);

  // Pelo
  fill(pelo);
  ellipse(200, 115, 180, 200);

  // Remera
  fill(negro);
  ellipse(200, 350, 400, 140);
  rect(0, 350, 400, 60);

  // Cuello
  fill(pielSombra);
  rect(140, 220, 120, 80);
  ellipse(200, 300, 160, 60);

  // Cabeza
  fill(pielLuz);
  rect(180, 220, 40, 40);
  triangle(140, 220, 180, 220, 180, 260);
  triangle(220, 220, 260, 220, 220, 260);
  ellipse(200, 140, 160, 160);
  rect(140, 160, 120, 60);
  triangle(140, 220, 120, 140, 140, 140);
  triangle(260, 220, 280, 140, 240, 140);

  // Labios
  fill(labiosSombra);
  triangle(175, 220, 195, 215, 205, 220);
  triangle(225, 220, 205, 215, 195, 220);
  fill(labios);
  triangle(175, 220, 200, 225, 225, 220);

  // Nariz
  fill(pielSombra);
  beginShape();
  vertex(180, 200);
  vertex(189, 196);
  vertex(196, 200);
  vertex(204, 200);
  vertex(206, 195);
  vertex(206, 190);
  vertex(200, 185);
  vertex(200, 145);
  vertex(195, 145);
  endShape();
  triangle(215, 200, 215, 190, 220, 200);

  fill(pielSombra);
  ellipse(165, 142, 35, 20);
  ellipse(235, 142, 35, 20);

  // Ojos
  fill(blanco);
  ellipse(165, 145, 30, 15);
  ellipse(235, 145, 30, 15);
  fill(pelo);
  ellipse(165, 144, 12, 12);
  ellipse(235, 144, 12, 12);
  fill(negro);
  ellipse(165, 144, 6, 6);
  ellipse(235, 144, 6, 6);

  // Cejas
  fill(pelo);
  triangle(185, 135, 175, 130, 165, 130);
  triangle(180, 135, 145, 135, 158, 131);
  triangle(215, 135, 255, 135, 242, 131);

  // Detalle del pelo
  fill(pelo);
  triangle(140, 100, 140, 60, 200, 60);
}
