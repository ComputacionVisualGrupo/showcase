
let img;

function preload(){
   // Cargamos la imagen
   img = loadImage("/showcase/sketches/lenna.png");
}

function setup() {
  // Definimos el tamaño del lienzo de P5
  createCanvas(400, 400);
}


function draw() {    

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
  
  // Extraer valores RGB en la posición (x, y)
  let x = 100; 
  let y = 200; 
  
  /**
   * https://p5js.org/reference/#/p5/loadPixels
   * Loads the pixel data for the display window into the pixels[] 
   * array. This function must always be called before reading 
   * from or writing to pixels[]. Note that only changes made 
   * with set() or direct manipulation of pixels[] will occur.
   */
  loadPixels();

  // Calcular el indice del pixel en el arreglo de pixeles
  let index = (x + y * width) * 4;

  let r = pixels[index]; // valor Red
  let g = pixels[index + 1]; // valor Green
  let b = pixels[index + 2]; // valor Blue 
  let a = pixels[index + 3]; // valor Alpha 
  
  console.log(`Valores RGB del pixel(${x}, ${y}): R=${r}, G=${g}, B=${b}, A=${a}`);


}