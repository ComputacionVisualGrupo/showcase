# Spiral 
by Harold Velazco - UNAL 2023

{{< p5-iframe sketch="/showcase/sketches/Spiral.js" width="800" height="800" >}}

Este código utiliza el lenguaje de programación JavaScript y la biblioteca p5.js para crear una animación de una espiral en la pantalla.

Primero, se declaran algunas variables como "dist_centro", "cercania" y "SPIRAL_SIZE" que se utilizarán más adelante en el código.

Luego se define la función "setup()", que es un método que se ejecuta una vez al comienzo del programa y se encarga de establecer la configuración inicial. En este caso, se establece el tamaño del lienzo y se crean dos botones y dos barras deslizantes.

Los botones "Girar a la izquierda" y "Girar a la derecha" se encargan de hacer que la espiral gire en sentido horario o antihorario. Al presionar uno de los botones, se activa la función "girarIzquierda()" o "girarDerecha()", que establecen la variable "R" en 1 o -1, respectivamente.

Las barras deslizantes permiten ajustar la distancia entre los puntos de la espiral y el tamaño de la espiral.

Luego, se define la función "draw()", que es un método que se ejecuta continuamente y se encarga de dibujar la espiral. Primero, se establece el fondo en negro y se traslada el punto de origen al centro del lienzo.

A continuación, se dibuja la espiral. Para hacer esto, se utiliza un ciclo "for" que itera desde 0 hasta el valor de "SPIRAL_SIZE" con un incremento de 0.1. En cada iteración, se calculan los valores de "r", "x" e "y" y se añade un vértice a la forma.

Por último, se define la función "mouseReleased()", que se activa cuando se suelta el botón del mouse después de hacer clic y arrastrar en las barras deslizantes. Esta función actualiza los valores de "SPIRAL_SIZE" y "cercania" según los valores actuales de las barras deslizantes.

En resumen, este código crea una animación de una espiral que se puede girar en sentido horario o antihorario con dos botones y se puede ajustar el tamaño y la distancia entre los puntos con dos barras deslizantes.

