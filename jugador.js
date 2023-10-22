class Jugador extends Personaje {
  puedeDisparar;
  constructor (posicion) {
    super(posicion)
    this.sprite = loadImage('assets/jugador.png');
    this.direccion = createVector();
    this.puedeDisparar = true;
  }

  dibujar () {
    push();
    translate(this.posicion.x, this.posicion.y);
    rotate(this.angulo);
    image(this.sprite, 0, 0);
    pop();
  }

  mover () {
    push();
    let objetivo = createVector(mouseX, mouseY);
    this.direccion = objetivo.copy().sub(this.posicion);
    this.spawnBala = this.posicion.copy().add(this.direccion.copy().normalize().mult(50));
    this.cuerpo = this.posicion.copy().add(this.direccion.copy().normalize().mult(-50));
    this.angulo = -this.direccion.angleBetween(createVector(-1, 0));
    pop();
  }

  get puedeDisparar () {
    return this.puedeDisparar;
  }

  set puedeDisparar (value) {
    this.puedeDisparar = value;
  }
}
