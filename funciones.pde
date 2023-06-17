float calcularTamanio(int indice, int variable) {
  return sin(indice*(PI/20)+variable/20*(PI/180))*7.8;
}

void dibujarModulo(float posX, float posY, color color1, color color2) {
  push();
  translate(posX, posY);
  float tamanioX = 1;
  float tamanioY = 1;
  for (int j = 0; j < 20; j++) {
    posX = 0;
    posY += tamanioY;
    if (mouseX>=400) {
      tamanioY = calcularTamanio(j, mouseY);
    } else {
      tamanioY = calcularTamanio(j, 0);
    }
    for (int i = 0; i < 20; i++) {
      if (mouseX>=400) {
        tamanioX =calcularTamanio(i, mouseX-400);
      } else {
        tamanioX = calcularTamanio(i, 0);
      }
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
  color1 = lerpColor(negro, color(random(255), random(255), random(255)), random(1));
  color2 = lerpColor(blanco, color(random(255), random(255), random(255)), random(1));
}
