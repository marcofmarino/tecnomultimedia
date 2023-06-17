PImage img;

void setup() {
  size(800, 400);
  noStroke();
  img = loadImage("img.png");
}

void draw() {
  background(50);
  image(img, 0, 50);
  float tamanioX = 1;
  float tamanioY = 1;
  float posX = 0;
  float posY = 0;
  push();
  translate(400, 0);
  for (int e = 0; e < 4; e++) {
    posX=0;
    translate(0, posY);
    push();
    for (int z = 0; z < 4; z++) {
      translate(posX, 0);
      posY=0;
      for (int j = 0; j < 20; j++) {
        posX = 0;
        posY += tamanioY;
        if (mouseX>=400) {
          tamanioY = sin(j*(PI/20)+mouseY/20*(PI/180))*7.8;
        } else {
          tamanioY = sin(j*(PI/20))*7.8;
        }
        for (int i = 0; i < 20; i++) {
          fill((i%2 + j%2)%2 * 180 + 50);
          if (mouseX>=400) {
            tamanioX = sin(i*(PI/20)+(mouseX-400)/20*(PI/180))*7.8;
          } else {
            tamanioX = sin(i*(PI/20))*7.8;
          }
          rect(posX, posY, tamanioX, tamanioY);
          posX += tamanioX;
        }
      }
    }
    pop();
  }
  pop();
}
