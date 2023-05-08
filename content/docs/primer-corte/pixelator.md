# P5 PIXELATOR

By: Sergio Camilo Espinosa

{{< p5-iframe sketch="/showcase/sketches/pixelator.js" width="530" height="560" >}}

Este código carga una imagen y le permite al usuario cambiar entre la imagen original y una versión pixelada de la misma.

En la función setup(), se crea un lienzo de 500x500 píxeles y se carga una imagen previamente cargada. También se crea un control deslizante (rSlider) que permite al usuario cambiar el tamaño de los píxeles en la versión pixelada y un menú desplegable (sel) que permite al usuario seleccionar entre la imagen original y la versión pixelada.

En la función draw(), se verifica si el usuario ha seleccionado la opción de imagen pixelada en el menú desplegable. Si es así, se recorren todos los píxeles de la imagen original en incrementos determinados por el valor del deslizador rSlider. Se recuperan los valores de color del píxel actual y se usa la función fill() para colorear un cuadrado en la ubicación correspondiente en la versión pixelada.

Si el usuario selecciona la opción de imagen original en el menú desplegable, la imagen original se vuelve a dibujar en el lienzo.




