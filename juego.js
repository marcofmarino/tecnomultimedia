
class Juego {
  jugador;
  enemigo;
  balas;
  estado;
  colorFondo;
  imagenMenu;
  tiempoInicio;
  constructor () {
    this.imagenMenu = loadImage('assets/menu.png')
    this.estado = 0;
    this.colorFondo = "white";
    this.jugador = new Jugador(createVector(100, height/2));
    this.enemigo = new Enemigo(createVector(700,height/2));
    this.balas = [];
    }

  actualizar () {
    background(this.colorFondo);
    switch (this.estado) {
      case 0:
        image(this.imagenMenu, width/2, height/2);
        break;

      case 1:
        if (this.evaluarColisiones()) {
          this.timer()
        } else {
          this.tiempoInicio = millis();
        }
          rect(0, height/2-10, 50, 50);
          this.jugador.dibujar();
          this.enemigo.dibujar();
        break;

      case 2:
        if(!this.evaluarColisiones()){
          this.jugador.actualizar();
          this.enemigo.actualizar();
          this.balas.forEach(element => {
            element.actualizar();
          });
          if (!this.jugador.puedeDisparar && this.enemigo.yaGiro && this.balas.length === 0) {
              this.estado++;
          }
        }
        break;
      case 3:
        if (this.jugador.estaVivo && !this.enemigo.estaVivo) {
          this.colorFondo = "green";
          text("VICTORIA", width/2, height/2);
        } else if (this.enemigo.estaVivo && !this.jugador.estaVivo) {
          this.colorFondo = "red";
          text("DERROTA", width/2, height/2);
        } else {
          this.colorFondo = "grey";
          text("EMPATE", width/2, height/2);
        }
        break;
    }
  }

  evaluarColisiones () {
    switch (this.estado) {
      case 1:
        if (mouseX < 25 && mouseX > 0 && mouseY > height/2 - 35 && mouseY < height/2 + 15) {
          return true;
        }
        break;
      case 2:
        this.balas.forEach((element, posElement) => {
          if (this.jugador.estaVivo && element.posicion.dist(this.enemigo.cuerpo) < 40) {
            this.enemigo.estaVivo = false;
            this.estado ++;
            return true;
          } else if (this.enemigo.estaVivo && element.posicion.dist(this.jugador.cuerpo) < 40) {
            this.jugador.estaVivo = false;
            this.estado++;
            return true;
          } else if (element.posicion.dist(createVector(width/2, height/2))>800){
            this.balas.splice(posElement, 1);
          }
        });
      break;
    }
    return false;
  }
  
  timer () {
    let tiempoEspera;
    tiempoEspera = this.tiempoInicio + 3000;
    text(str(round((tiempoEspera - millis())/1000)), width/2, height/2);
    if (round((tiempoEspera - millis())/1000)<= 0) {
      this.enemigo.calcularReaccion();
      this.estado++;
      noCursor();
    }
  }

  mousePressed () {
    switch (this.estado) {
      case 0:
       this.estado++;
      this.colorFondo = "green";       
        break;

      case 2:
if (this.jugador.puedeDisparar) {
      this.balas.push(new Bala(this.jugador.spawnBala.copy(), this.jugador.direccion.copy()));
      this.jugador.puedeDisparar = false;
    }
        break;
    
    case 3:
      this.estado = 1;
      this.jugador = new Jugador(createVector(100, height/2));
      this.enemigo = new Enemigo(createVector(700,height/2));
      this.balas = [];
      this.colorFondo = "green";
      cursor();
    break;
    }
  }

  agregarBala(posicion, direccion){
    this.balas.push(new Bala(posicion.copy(), direccion.copy()));
  }
}
