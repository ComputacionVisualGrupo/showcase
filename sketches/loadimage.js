
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage('/showcase/sketches/lenna.png'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0);
}

