/*
--------------------
 TP1 - Obra de arte electronico
 Marco Marino
 Comision 3
 --------------------
 */

// DECLARACION DE VARIABLES

PFont fuente;

// Imagenes
PImage pantalla1;
PImage pantalla2;
PImage pantalla3;
PImage pantalla4;

// Variable para control de pantallas y cuenta de fotogramas (control de tiempo)
int pantalla = 0;
int fotogramas;

// Colores
color fondo = color(213, 92, 42);
color sol = color(241, 211, 57);
color negro = color(43, 24, 17);
color blanco = color(230, 230, 230);

void setup() {
  size(640, 480);

  noStroke();


  // Cargar fuente
  fuente = loadFont("FiraCodeNerdFont.vlw");
  textFont(fuente);

  // Cargar imagenes en variables
  pantalla1 = loadImage("pantalla1.jpg");
  pantalla2 = loadImage("pantalla2.jpg");
  pantalla3 = loadImage("pantalla3.jpg");
  pantalla4 = loadImage("pantalla4.jpg");
}

void draw() {
  background(fondo);
  if (pantalla == 0) {
    // Dibujar sol y luz que se mueven siguiendo la funcion seno
    fill(sol);
    int tamanioSol = round(sin(frameCount*PI/40)*5+100);
    ellipse(width/2, 140, tamanioSol, tamanioSol);
    fill(sol, 20);
    ellipse(width/2, 140, tamanioSol+100, tamanioSol+100);
    ellipse(width/2, 140, tamanioSol+200, tamanioSol+200);
    ellipse(width/2, 140, tamanioSol+300, tamanioSol+300);
    ellipse(width/2, 140, tamanioSol+400, tamanioSol+400);
    ellipse(width/2, 140, tamanioSol+500, tamanioSol+500);
    ellipse(width/2, 140, tamanioSol+600, tamanioSol+600);
    fill(negro);
    rect(0, 300, 640, 300);
    fill(blanco);
    text("The Weather Project", 30, 315);

    // Sombra proyectada por el boton
    fill(0);
    beginShape();
    vertex(width/2-50, 420);
    vertex(width/2+50, 420);
    vertex(width/2+80, 480);
    vertex(width/2-80, 480);
    endShape();
    fill(fondo);

    // Dibujar boton de inicio
    rect(width/2-50, 360, 100, 60);

    // Comprobar si el cursor se encuentra sobre el boton y definir color de la flecha
    if (mouseX>=(width/2-50) && mouseX<=(width/2+50) && mouseY>=360 && mouseY<=420) {
      fill(sol);
    } else {
      fill(negro);
    }
    triangle(width/2-20, 370, width/2+25, 390, width/2-20, 410);
  } else if (pantalla == 1) {
    image(pantalla1, 0, 0);
    fill(negro, 255-fotogramas/1.5);
    text("The Weather Project es una obra realizada por Olafur Eliasson en 2003", 20+fotogramas, 50, 200, 400);
  } else if (pantalla == 2) {
    image(pantalla2, 0, 0);
    fill(negro);
    push();
    // Trasladar origen de coordenadas a la mitad del borde inferior de la pantalla para rotar el texto en base a ese punto
    translate(height/2, width);
    // Rotar -45 grados
    rotate(-HALF_PI+HALF_PI/2);
    // Rotar en base a los fotogramas para mover el texto
    rotate(fotogramas/PI/80);
    text("Es una instalación que genera la ilusión de estar cerca del sol rodeado de niebla", 0, -600, 200, 400);

    pop();
  } else if (pantalla == 3) {
    fill(negro, 255-fotogramas/2);
    image(pantalla3, 0, 0);
    textSize(20);

    // Mover el texto mediante height/2 + round(sin(fotogramas*PI/80)*50) - 100
    // height/2 mitad de la altura de la pantalla
    // round(sin(fotogramas*PI/80)*50) redondear el valor calculado con la funcion seno, el valor dividiendo a PI (80) modifica la frecuencia, mientras que el valor multiplicando al seno (50) modifica la amplitud
    text("Con un sol hecho a partir de 200 luces de monofrecuencia, máquinas de neblina y paredes y techo cubierto por espejos, se genera la sensación de encontrarse en un espacio amplio con un tiempo estático", 20+fotogramas, height/2 + round(sin(fotogramas*PI/80)*50) - 100, 400, 500);
  } else if (pantalla == 4) {
    image(pantalla4, 0, 0);

    // Comprobar si el cursor se encuentra sobre el boton de reinicio para cambiar el color
    if (dist(width/2, height/2, mouseX, mouseY)<50) {
      fill(sol);
    } else {
      fill(blanco);
    }
    // Dibujar boton de reinicio
    ellipse(width/2, height/2, 100, 100);
    fill(negro);
    triangle(width/2+40, height/2, width/2+30, height/2, width/2+34, height/2-15);
    push();
    stroke(negro);
    strokeWeight(3);
    noFill();
    arc(width/2, height/2, 70, 70, 0, PI+HALF_PI);
    pop();
  }

  fotogramas++;
  // Cambiar de pantalla cada 7 seg, siempre y cuando no se este en la pantalla de inicio o la final
  if (!(pantalla == 4 || pantalla == 0) && fotogramas>=60*7) {
    fotogramas = 0;
    pantalla++;
  }
}

void mousePressed() {
  // Comprobar si al hacer presionar el mouse, se está en las pantallas 0 o 4 y si el cursor se encuentra dentro del boton correspondiente a la pantalla
  if (mouseX>=(width/2-50) && mouseX<=(width/2+50) && mouseY>=360 && mouseY<=420) {
    textSize(20);
    pantalla++;
    fotogramas = 0;
} else if (pantalla == 4) {
  if (dist(width/2, height/2, mouseX, mouseY)<50) {
    pantalla = 1;
    fotogramas = 0;
  }
}
}
