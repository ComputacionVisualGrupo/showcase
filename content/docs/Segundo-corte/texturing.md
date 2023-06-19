# Texturing
by Harold Velazco & Sergio Espinosa - UNAL 2023

Este programa crea un lienzo interactivo en 3D donde se puede ajustar un valor llamado 'x' mediante un control deslizante. El lienzo utiliza un shader personalizado para su renderizado.

En el lienzo, se dibuja un cuadrilátero sin contorno que puede cambiar de tamaño y orientación. Al mover el control deslizante, se modifica el valor 'x', lo que puede afectar al aspecto visual del cuadrilátero en función de la lógica definida en el shader.

Además, hay un botón que permite invertir la orientación del cuadrilátero, lo que cambia su posición y tamaño en el lienzo. Al hacer clic en el botón, el cuadrilátero se actualiza visualmente según la nueva orientación.

En resumen, este programa proporciona una experiencia interactiva donde se pueden ajustar valores y cambiar la apariencia de un objeto dibujado en un lienzo 3D utilizando un shader personalizado.

{{< p5-iframe sketch="/showcase/sketches/texturing/uv.js" width="525" height="525" >}}

* Se carga un shader personalizado llamado 'uv.frag' que se utilizará para el dibujo en el lienzo.
* Se configura el lienzo de dibujo en 3D utilizando la función createCanvas() de p5.js.
* Se establece el shader 'uvShader' utilizando la función shader() de p5.js.
* Se crean un control deslizante y un botón para interactuar con el programa.
* En el bucle de dibujo, se actualiza el valor uniforme 'x' en el shader según el valor del control deslizante.
* Se dibuja un cuadrilátero en el lienzo 3D sin contorno, utilizando las coordenadas proporcionadas para definir su posición y tamaño.
* Al hacer clic en el botón, se invierte la orientación del cuadrilátero.
* El lienzo se actualiza para reflejar los cambios.
* En resumen, este código crea un lienzo interactivo en 3D donde se puede ajustar una variable 'x' mediante un control deslizante y cambiar la orientación del cuadrilátero al hacer clic en un botón. Utiliza un shader personalizado para el dibujo en el lienzo.

## Mapeo de Texturas
El mapeo de texturas es un proceso de diseño gráfico en el que una superficie bidimensional (2D), denominada mapa de texturas, se "envuelve" alrededor de un objeto tridimensional (3D). Así, el objeto tridimensional adquiere una textura superficial similar a la de la superficie bidimensional. Oprime en el siguiente ejemplo para correrlo!
{{< p5-iframe sketch="/showcase/sketches/texturing/video_cube.js" lib1="/showcase/sketches/libraries/p5.easycam.js" width="525" height="525" >}}

## Texturas procedurales

Una imagen procedural es una imagen generada de manera algorítmica en lugar de ser creada manualmente o capturada de la realidad. En lugar de utilizar una imagen o fotografía existente, se emplean fórmulas matemáticas y algoritmos para crear una imagen digitalmente.

La base de una imagen procedural es un conjunto de reglas, ecuaciones o algoritmos que definen cómo se generan los píxeles y las características de la imagen. Estas reglas pueden abarcar desde patrones simples hasta detalles complejos, y pueden controlar elementos como colores, formas, texturas, iluminación y efectos especiales.

La ventaja de las imágenes procedurales radica en su capacidad para ser generadas en tiempo real y su potencial para crear variaciones infinitas de una misma imagen base. Al utilizar algoritmos y fórmulas, se pueden ajustar los parámetros para obtener diferentes resultados visuales sin necesidad de almacenar múltiples imágenes en la memoria.

Las imágenes procedurales se utilizan en una amplia gama de aplicaciones, como gráficos por computadora, generación de terrenos, efectos visuales en películas y videojuegos, diseño de texturas, arte generativo y simulaciones científicas.

En resumen, una imagen procedural es una imagen generada mediante algoritmos y fórmulas matemáticas en lugar de utilizar imágenes o fotografías existentes. La base de una imagen procedural es el conjunto de reglas y algoritmos que definen su apariencia y características visuales.

{{< p5-iframe sketch="/showcase/sketches/texturing/truchet_tiles.js" lib1="/VisualComputing2022_2/sketches/libraries/p5.easycam.js" width="425" height="425" >}}
