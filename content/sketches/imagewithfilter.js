
let img;
let rgbValues = [];

function preload(){
   // Cargamos la imagen
   img = loadImage("/showcase/sketches/lenna.png");
}

function setup() {
  // Definimos el tamaño del lienzo de P5
  createCanvas(400, 400);

  // Renderizamos   la imagen con su tamaño original en la posición 0,0 (esquina superior izquierda)
  image(img, 0, 0, width, height);
  
  /**
   * https://p5js.org/reference/#/p5/filter
   * POSTERIZE 
   * Limits each channel of the image to the number of colors 
   * specified as the parameter. The parameter can be set to 
   * values between 2 and 255, but results are most noticeable 
   * in the lower ranges.
   */
  filter(POSTERIZE, 2);

  /**
   * https://p5js.org/reference/#/p5/loadPixels
   * Loads the pixel data for the display window into the pixels[] 
   * array. This function must always be called before reading 
   * from or writing to pixels[]. Note that only changes made 
   * with set() or direct manipulation of pixels[] will occur.
   */
  loadPixels();  
  
  // Extraer valores RGB en la posición (x, y)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {  

      // Calcular el indice del pixel en el arreglo de pixeles
      let index = (x + y * width) * 4;

      let r = pixels[index]; // valor Red
      let g = pixels[index + 1]; // valor Green
      let b = pixels[index + 2]; // valor Blue 
      let a = pixels[index + 3]; // valor Alpha 

      rgbValues.push([r, g, b]); // Agregar valores a la lista
    }
  }
  console.log('Valores RGB',rgbValues);  
}


function draw() {    

}