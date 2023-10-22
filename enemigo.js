class Enemigo extends Personaje {
  tiempoReaccion;
  tiempoInicio;
  yaGiro;
  constructor (posicion) {
    super(posicion)
    this.sprite = loadImage('assets/enemigo.png');   
    this.yaGiro = false;
    this.direccion = createVector();
  }

  dibujar() {
    push();
    translate(this.posicion.x, this.posicion.y);
    rotate(this.angulo);
    image(this.sprite, 0, 0);
    pop();
  }

  mover() {
    this.cuerpo = this.posicion.copy().add(this.direccion.copy().normalize().mult(-50));
    if (!this.yaGiro && (millis() - this.tiempoInicio)/1000 > this.tiempoReaccion){
      this.angulo += int(random(172, 188));    
      this.yaGiro = true;
      this.direccion =  this.posicion.copy().setHeading(this.angulo);
      this.spawnBala = this.posicion.copy().add(this.direccion.copy().normalize().mult(50));
      juego.agregarBala(this.spawnBala, this.direccion);
    }
  }

  get yaGiro () {
    return this.yaGiro;
}

  calcularReaccion () {
    this.tiempoReaccion = random(0.1, 0.5);
    this.tiempoInicio = millis();
  }
}

