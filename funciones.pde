float calcularTamanio(int indice, int variable) {
  // Mediante una funcion seno se calcula el tamanio para la longitud de los lados de los rectangulos, esta varia dependiendo del indice y de una variable
  return sin(indice*(PI/20)+variable/20*(PI/180))*7.8;
}

void dibujarModulo(float posX, float posY, color color1, color color2) {
  push();
  translate(posX, posY);
  float tamanioX = 1;
  float tamanioY = 1;
  // for para las filas de rectangulos
  for (int j = 0; j < 20; j++) {
    posX = 0;
    posY += tamanioY;
    // si el mouse se encuentra sobre la imagen, vuelve al tamanio original
    if (mouseX>=400) {
      tamanioY = calcularTamanio(j, mouseY);
    } else {
      tamanioY = calcularTamanio(j, 0);
    }
    // for para las columnas de rectangulos
    for (int i = 0; i < 20; i++) {
      // si el mouse se encuentra sobre la imagen, vuelve al tamanio original
      if (mouseX>=400) {
        tamanioX =calcularTamanio(i, mouseX-400);
      } else {
        tamanioX = calcularTamanio(i, 0);
      }
      // dependiendo de los indices, el rectangulo se pinta con uno u otro color
      if ((i%2 == 0 && j%2 ==0)||(i%2 ==1 && j%2 ==1)) {
        fill(color1);
      } else {
        fill(color2);
      }
      rect(posX, posY, tamanioX, tamanioY);
      posX += tamanioX;
    }
  }
  pop();
}

void mousePressed() {
  // al presionar el mouse se generan dos colores aleatorios 
  color1 = lerpColor(50, color(random(255), random(255), random(255)), random(1));
  color2 = lerpColor(color(230,230,230), color(random(255), random(255), random(255)), random(1));
}
