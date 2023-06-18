# Shaders
by Harold Velazco & Sergio Espinosa - UNAL 2023

Este ejercicio consiste en un par de shaders aplicados a una imagen y a un vídeo corto. 
El primero llamado "luma" se usa para convertir la imagen y el vídeo a una escala de grises. El segundo se usa para encontrar los ridges, o pixeles en las lineas o esquinas más importantes en la imagen y el vídeo.
Los ridges se encuentran usando una matriz de convolución 3x3, como la siguiente:

[0.0, -1.0,  0.0,
-1.0,  4.0, -1.0,
0.0, -1.0,  0.0]

Esta matriz es llamada "Laplacian of Gaussian" (LoG), un kernel comunmente usado para la detección de ridges, ya que el centro al tener un peso alto (4.0) y los valores de alrededor uno menor (-1.0), se puede identificar las diferencias de en intensidad entre un píxel central y sus vecinos, lo que permite identificar las esquinas en la imagen, al pasar el kernel por cada pixel y su correspondiente vecindad.

Para la detección de ridges en el vídeo se cambió la matriz por la siguiente:
[0.0,  1.0,  0.0,
 1.0, -4.0,  1.0,
0.0,  1.0,  0.0]

{{< p5-iframe sketch="/showcase/sketches/texturing/shaders.js" width="750" height="520" >}}
