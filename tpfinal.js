/*
---------------------------------------------
 |  TP Final                                |
 |  Marco Marino                            |
 |  Comisión 3 - Tecnología Multimedial 1   |
 --------------------------------------------
 */
let aventuraGrafica;
let archivo;

function preload() {
   archivo = loadJSON('infoPantallas.json'); // Función asincrónica, se debe cargar en preload para poder leer el archivo
}

function setup() {
   let canvas = createCanvas(600, 600);
   aventuraGrafica = new AventuraGrafica();
}

function draw() {
   aventuraGrafica.draw();
}

function mousePressed() {
   aventuraGrafica.mousePressed();
}
