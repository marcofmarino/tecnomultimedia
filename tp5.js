/*
  TP5 - Videojuego con POO 
  Comisión 3 - Tecnología de Diseño Multimedial 
  Marco Marino
  Video: 
*/

let juego;

function setup() {
  createCanvas(800, 600);
  juego = new Juego();
  imageMode(CENTER);
  rectMode(CENTER);
  textSize(60);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("red");
  juego.actualizar();
}

function mousePressed() {
  juego.mousePressed();
}
