PImage img;
int contador = 0;
color negro = 50;
color blanco = color(230, 230, 230);
int vasas = 0;
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


  if (mouseX <=400) {
    color1 = 230;
    color2 = 50;
  }

  push();
  translate(400, 0);
  for (int y = 0; y<4; y++) {
    for (int x = 0; x<4; x++) {
      dibujarModulo(x*100, y*50, color1, color2);
    }
  }
  pop();
}
