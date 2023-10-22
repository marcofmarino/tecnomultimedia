/*
  TP5 - Videojuego con POO 
  Comisión 3 - Tecnología de Diseño Multimedial 
  Marco Marino
  Video: https://youtu.be/hM03LJ1PwDE
*/

// Variable para el objeto juego
let juego;

function setup() {
  createCanvas(800, 600);
  // Instanciar objeto juego de clase Juego
  juego = new Juego();

  // Configurar modos
  imageMode(CENTER);
  rectMode(CENTER);
  textSize(60);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Método actualizar de juego
  juego.actualizar();
}

function mousePressed() {
  juego.mousePressed();
}
