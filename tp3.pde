/*
--------------------
 TP3 - Aventura gráfica
 Marco Marino
 Comision 3
 Video:
 --------------------
 Cada pantalla debe tener: Texto narrativo
 */

PImage[] pantallas;
String textos[] = {"Sos el hijo de Fiódor Pávlovich Karamázov. Tu madre, ya fallecida, procedía de una familia rica. Fuiste criado desde chico por distintos grupos familiares, ya que tu padre, \nun borracho, nunca se ocupó de tu crianza.",
  "Aunque hijos de otra madre, tienes dos hermanos, Iván y Alexéi. Convocaron una reunión entre hermanos y padre para solucionar los conflictos que tienes con este último, causados por reclamarle la herencia de tu madre; así como por el amor de una misma mujer, Grúshenka.", 
"Durante la reunión las cosas van mal. No soportas la actitud de tu padre y lo acusas de actuar como bufón. En uno de sus intentos por quedar como víctima, Fiódor Pávlovich amenaza con retarte a un duelo.\n Tu padre se retractó, puedes decidir ignorarlo y dar por finalizada la reunión o retarlo a un duelo.", 
"La reunión es un fracaso. Vuelves con mayor resentimiento por tu padre, sentimiento incrementado por tu mala situación financiera y por el hecho que haberle robado tres mil rublos a Katerina, tu prometida. Todavía conservas la mitad de lo robado, ya que la otra mitad la gastaste en irte de fiesta con Grúshenka. \n Te enteras que tu padre tiene tres mil rublos guardados. Decides asesinarlo y robarlos, pero al llegar a su casa te entra la duda, ¿decides continuar y cometer el parricidio o abandonar el lugar?", 
"Decidiste no asesinarlo, pero fuiste visto por tu padre, quién te gritó 'parricida'. Ya lejos de la casa te enteras que Grúshenka se fue con un polaco, antiguo prometido suyo y te invaden los celos. Debes decidir si gastar los mil quinientos rublos en otra fiesta, para intentar recuperar a Grúshenka o ignorar tus celos y no hacer nada.", 
"", 
"", 
"", 
"", 
"", 
"", 
""};

PFont fuente;

int estado = 0;

color negro = #222222;
color blanco = #f2f2f2;
color rojo = #8f1919;


void setup() {
  size(600, 600);

  pantallas = new PImage[13];
  for (int i = 0; i<13; i++) {
    pantallas[i] = loadImage(str(i)+"_p.jpg");
  }

  fuente = loadFont("LiberationSerif-16.vlw");
  textFont(fuente);
  fill(negro);
  noStroke();
}

void draw() {
  background(negro);
  switch(estado) {
  case 0:
    image(pantallas[estado], 0, 0);
    dibujarBoton("Iniciar", 300, 400, 100, 20);
    dibujarBoton("Créditos", 300, 440, 100, 20);
    break;
  case 1:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Siguiente", 530, 560, 100, 22);
    break;
  case 2:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Siguiente", 530, 560, 100, 22);
    break;
  case 3:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Ignorar", 70, 560, 60);
    dibujarBoton("Desafiar", 530, 560, 60);
    break;
  case 4:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Matarlo", 70, 560, 60);
    dibujarBoton("Irse", 530, 560, 60);
    break;
  case 5:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Gastarlo", 70, 560, 60);
    dibujarBoton("Ignorar", 530, 560, 60);
    break;
  case 6:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Inicio", 530, 560, 100, 22);
    break;
  case 7:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Irte", 70, 560, 60);
    dibujarBoton("Continuar", 530, 560, 60);
    break;
  case 8:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Inicio", 530, 560, 100, 22);
    break;
  case 9:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Grúshenka", 70, 560, 60);
    dibujarBoton("Katerina", 530, 560, 60);
    break;
  case 10:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Inicio", 530, 560, 100, 22);
    break;
  case 11:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Inicio", 530, 560, 100, 22);
    break;
  case 12:
    mostrarPantalla(pantallas[estado], textos[estado-1], 20, 20);
    dibujarBoton("Inicio", 530, 560, 100, 22);
    break;
  case 13:
    push();
    fill(#f2f2f2);
    textAlign(CENTER, CENTER);
    text("Créditos", 300, 100);
    text("Autor de la obra original: Fiódor M. Dostoievski", 300, 200);
    text("Marco Marino", 300, 400);
    text("Comisión 3", 300, 450);
    text("Tecnología Multimedia 1", 300, 500);
    pop();
    break;
  }
}

void mousePressed() {
  switch(estado) {
  case 0:
    if (colisionBoton(300, 400, 100, 20)) {
      estado = 1;
    }
    if (colisionBoton(300, 440, 100, 20)) {
      estado = 13;
    }
    break;
  case 1:
    if (colisionBoton(530, 560, 100, 22)) {
      estado++;
    }
    break;
  case 2:
    if (colisionBoton(530, 560, 100, 22)) {
      estado++;
    }
    break;
  case 3:
    if (colisionBoton(70, 560, 60)) {
      estado++;
    }
    if (colisionBoton(530, 560, 60)) {
      estado = 7;
    }
    break;
  case 4:
    if (colisionBoton(70, 560, 60)) {
      estado = 9;
    }
    if (colisionBoton(530, 560, 60)) {
      estado++;
    }
    break;
  case 5:
    if (colisionBoton(70, 560, 60)) {
      estado++;
    }
    if (colisionBoton(530, 560, 60)) {
      estado = 12;
    }
    break;
  case 6:
    if (colisionBoton(530, 560, 100, 22)) {
      estado = 0;
    }
    break;
  case 7:
    if (colisionBoton(70, 560, 60)) {
      estado = 4;
    }
    if (colisionBoton(530, 560, 60)) {
      estado++;
    }
    break;
  case 8:
    if (colisionBoton(530, 560, 100, 22)) {
      estado = 0;
    }
    break;
  case 9:
    if (colisionBoton(70, 560, 60)) {
      estado = 11;
    }
    if (colisionBoton(530, 560, 60)) {
      estado = 10;
    }
    break;
  case 10:
    if (colisionBoton(530, 560, 100, 22)) {
      estado = 0;
    }
    break;
  case 11:
    if (colisionBoton(530, 560, 100, 22)) {
      estado = 0;
    }
    break;
  case 12:
    if (colisionBoton(530, 560, 100, 22)) {
      estado = 0;
    }
    break;
  case 13:
    estado = 0;
    break;
  }
}
