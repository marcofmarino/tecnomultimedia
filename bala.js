class Bala {
   direccion;
   posicion;
   rapidez;
   
   constructor (posicion, direccion) {
      this.posicion = posicion;
      this.direccion = direccion;
      this.rapidez = 35;
   }

   actualizar () {
      this.mover();
      this.dibujar();
   }

   mover () {
      this.posicion.add(this.direccion.normalize().copy().mult(this.rapidez));
   }

   dibujar () {
      push();
         fill("black");
         ellipse(this.posicion.x, this.posicion.y, 6, 6);
      pop();
   }
}
