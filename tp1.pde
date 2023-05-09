/*
--------------------
 TP1 - Obra de arte electronico
 Marco Marino
 Comision 3
 --------------------
 */

PFont fuente;

PImage pantalla1;
PImage pantalla2;
PImage pantalla3;
PImage pantalla4;

float pantalla = 0;
int pos;

color fondo = color(213, 92, 42);
color sol = color(241, 211, 57);
color negro = color(43, 24, 17);
color blanco = color(230, 230, 230);

void setup() {
  fuente = loadFont("FiraCodeNerdFont.vlw");
  textFont(fuente);
  size(640, 480);
  noStroke();
  pantalla1 = loadImage("pantalla1.jpg");
  pantalla2 = loadImage("pantalla2.jpg");
  pantalla3 = loadImage("pantalla3.jpg");
  pantalla4 = loadImage("pantalla4.jpg");
}

void draw() {
  background(fondo);
  if (pantalla == 0) {
    fill(sol);
    int tamanioSol = round(sin(frameCount*PI/40)*5+100);
    ellipse(width/2, 140, tamanioSol, tamanioSol);
    fill(sol, 20);
    ellipse(width/2, 140, tamanioSol+100, tamanioSol+100);
    ellipse(width/2, 140, tamanioSol+200, tamanioSol+200);
    ellipse(width/2, 140, tamanioSol+300, tamanioSol+300);
    fill(negro);
    rect(0, 300, 640, 300);
    fill(blanco);
    text("The Weather Project", 30, 315);
    fill(fondo);
    rect(width/2-50, 360, 100, 60);
    if (mouseX>=(width/2-50) && mouseX<=(width/2+50) && mouseY>=360 && mouseY<=420) {
      fill(sol);
    } else {
      fill(negro);
    }
    triangle(width/2-20, 370, width/2+25, 390, width/2-20, 410);
  } else if (pantalla == 1) {
    image(pantalla1, 0, 0);
  } else if (pantalla == 2) {
    image(pantalla2, 0, 0);
  } else if (pantalla == 3) {
    image(pantalla3, 0, 0);
  } else if (pantalla == 4) {
    image(pantalla4, 0, 0);
  }
}

void mousePressed() {
  if (pantalla == 0) {
    if (mouseX>=(width/2-50) && mouseX<=(width/2+50) && mouseY>=360 && mouseY<=420) {
      pantalla++;
    }
  }
}
