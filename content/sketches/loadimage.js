
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage('/showcase/sketches/lenna.png'); // Cargar la imagen
}

function draw() {
  // Muestra la imagen en su tamaño original en la posición (0,0)
  image(img, 0, 0);
  // Muestra la imagen en la posición (0, height/2) a la mitad del tamaño
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}

