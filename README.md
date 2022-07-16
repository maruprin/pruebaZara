Welcome to the mobile sales app!

To run the project please run:

   1º - git clone https://github.com/maruprin/pruebaZara
   2º - npm i (node >= 16.0.0 is required so you do not have any problems with jest and react testing lib, I used v16.13.2)
   3º - npm start

Notes & Comments

He organizado cada componente en una carpeta con su index.jsx y su hoja de estilos, pero esto no ha sido bueno práctica, ya que se han mezclado estilos y han heredado caracteristicas ciertas etiquetas que no deberían de una manera un poco extraña. No volveré a usar esta estructura en un futuro.

Los productos se añaden al carrito por medio de un post a la api/cart, donde les llega el color, la capacidad y la id del producto seleccionado. Los items dentro del openCart son una simulación para visualizar los mismos. 
