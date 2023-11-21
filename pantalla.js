class Pantalla {
   imagen;
   textos;
   botones;
   colorTexto;
   modoTexto;
   tamanio;
   constructor (dirImagen, datos, colorTexto, modoTexto, tamanio) {
      this.imagen = loadImage(dirImagen);
      this.botones = [];
      this.textos = datos['textos'];
      this.modoTexto = modoTexto;
      this.colorTexto = colorTexto;
      this.tamanio = tamanio;
      datos["botones"].forEach(element => {
         if(element.tipo === "rectangular") {
            this.botones.push(new BotonRectangular(element.etiqueta, element.posicion, element.tamanio));   
         } else {
            this.botones.push(new BotonCircular(element.etiqueta, element.posicion, element.tamanio));   
         }
      });     
   }

   actualizar () {
      push();
      image(this.imagen, 0, 0);
      textAlign(this.modoTexto[0], this.modoTexto[1]);
      textSize(this.tamanio);
      fill(this.colorTexto);
      this.textos.forEach(element => {
         text(element.contenido, element.posicion[0], element.posicion[1]);
      });
      pop();
      this.botones.forEach(element => {
         element.draw();
      });
   }

   mousePressed () {
      this.botones.forEach(element => {
         if (element.colision()) {
            aventuraGrafica.cambiarEstado(element.etiqueta);
            return;
         }
      });
   }
   
}
