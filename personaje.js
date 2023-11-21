class Personaje {
   estaVivo;
   posicion;
   sprite;
   angulo;
   spawnBala;
   cuerpo;
   direccion;
   constructor (posicion) {
      this.estaVivo =  true;
      this.posicion = posicion;
      this.angulo = 0;
   }

   actualizar () {
      this.mover();
      this.dibujar();
   }

   mover () {
    
   }

   dibujar () {
    
   }

   get direccion () {
      return this.direccion;
   }

   get  spawnBala () {
      return this.spawnBala;
   }

   get cuerpo () {
      return this.cuerpo;
   }
}

