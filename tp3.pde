/*
--------------------
 TP3 - Aventura gráfica
 Marco Marino
 Comision 3
 Video: https://youtu.be/sK_f8aTbInI
 --------------------
 */

// Declaración de variables

PImage[] pantallas;

// Declarar array de textos al mismo tiempo que se los almacena
String textos[] = {"Sos el hijo de Fiódor Pávlovich Karamázov. Tu madre, ya fallecida, procedía de una familia rica. Fuiste criado desde chico por distintos grupos familiares, ya que tu padre, \nun borracho, nunca se ocupó de tu crianza.",
  "Aunque hijos de otra madre, tienes dos hermanos, Iván y Alexéi. Convocaron una reunión entre hermanos y padre para solucionar los conflictos que tienes con este último, causados por reclamarle la herencia de tu madre; así como por el amor de una misma mujer, Grúshenka.", 
"Durante la reunión las cosas van mal. No soportas la actitud de tu padre y lo acusas de actuar como bufón. En uno de sus intentos por quedar como víctima, Fiódor Pávlovich amenaza con retarte a un duelo.\n Tu padre se retractó, puedes decidir ignorarlo y dar por finalizada la reunión o retarlo a un duelo.", 
"La reunión es un fracaso. Vuelves con mayor resentimiento por tu padre, sentimiento incrementado por tu mala situación financiera y por el hecho que haberle robado tres mil rublos a Katerina, tu prometida. Todavía conservas la mitad de lo robado, ya que la otra mitad la gastaste en irte de fiesta con Grúshenka. \n Te enteras que tu padre tiene tres mil rublos guardados. Decides asesinarlo y robarlos, pero al llegar a su casa te entra la duda, ¿decides continuar y cometer el parricidio o abandonar el lugar?", 
"Decidiste no asesinarlo, pero fuiste visto por tu padre, quién te gritó 'parricida'. Ya lejos de la casa te enteras que Grúshenka se fue con un polaco, antiguo prometido suyo y te invaden los celos. Debes decidir si gastar los mil quinientos rublos en otra fiesta, para intentar recuperar a Grúshenka o ignorar tus celos y no hacer nada.", 
"Gastas el dinero en bebidas y comida. Grúshenka abandona al polaco y declara que quiere estar con vos, cuando entra la policía y te arresta por el asesinato de tu padre.\nEres llevado a juicio, en el que a pesar de los intentos del abogado, contratado Katerina, por probar tu inocencia, el dinero gastado en la fiesta, presúntamente el robado a tu padre, y una carta escrita a Katerina, son usados para declararte injustamente culpable.", 
"Tus hermanos intentan disuadirte de tu idea y evitar el duelo con tu padre ¿les haces caso y te vas de la reunión o vas a continuar con el duelo?", 
"Llega el día del duelo, te encuentras frente a tu padre que dispara primero. El disparo impacta en tu cuerpo, dejándote sin herencia, Grúshenka y vida. ", 
"Despejas la duda de tu mente y agarras a tu padre por sorpresa y lo asesinas. Tomas el dinero, mientras te retiras eres visto por Grigori, el sirviente de tu padre, a quién golpeas dejándolo incosciente. Ahora debes decidir qué hacer con el dinero, si utilizarlo para irte con Grúshenka o devolverle lo robado a Katerina.", 
"Le devulves el dinero a Katerina, sacándote un peso de encima. Pero eres arrestado por el asesinato de Fiódor Pávlovich Karamázov.", 
"Utilizas el dinero para huir con Grúshenka, que decide acompañarte. Nunca más tus hermanos ni conocidos supieron algo de tu paradero o destino.", 
"Decides no gastarlo y en cambio hablas con Katerina, confesando tu robo. Aparece la policía y te arresta por el asesinato de tu padre. El abogado contratado por Katerina logra probar tu inocencia. Terminado el proceso te apartas de Grúshenka y continúas con Katerina."};

PFont fuente;

int estado = 0;

// Colores
color negro = #222222;
color blanco = #f2f2f2;
color rojo = #8f1919;


void setup() {
  size(600, 600);

  // Cargar mediante un for todas las imágenes 
  pantallas = new PImage[13];
  for (int i = 0; i<13; i++) {
    pantallas[i] = loadImage(i+"_p.jpg");
  }

  fuente = loadFont("LiberationSerif-16.vlw");
  textFont(fuente);
  fill(negro);
  noStroke();
}

void draw() {
  
  // Dependiendo de la variable estado se determina que instrucciones ejecutar mediante un switch para facilitar el entendimiento en vez de if-else 
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
    background(negro);
    fill(blanco);
    textAlign(CENTER, CENTER);
    text("Créditos", 300, 100);
    text("Autor de la obra original: Fiódor M. Dostoievski", 300, 200);
    text("Marco Marino", 300, 400);
    text("Comisión 3", 300, 450);
    text("Tecnología Multimedia 1", 300, 500);
    dibujarBoton("Menú", 300, 560, 100, 22);
    pop();
    break;
  }
}

void mousePressed() {
  // Tambien se utiliza un switch para comprobar el estado y determinar de que pantalla son los botones que deben comprobar si pulsación
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
    if (colisionBoton(300, 560, 100, 22)) {
      estado = 0;
    }
    break;
  }
}
