let rSlider
let pixelation_level = 10;
var labelSet = false;
let sel;

function preload() {
  img = loadImage("Japanese woodblock print of a karate practitioner.png");
}

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  image(img, 0, 0, width, height);
  loadPixels();
  //noStroke();
  rSlider = createSlider(10, 100, 10);
  rSlider.position(20, 20);
  sel = createSelect();
  sel.option('Original');
  sel.option('Pixels');
}

function draw() {
  let val = sel.value();
  if(val == 'Pixels'){
    for (let x = 0; x < width; x += rSlider.value()) {
      for (let y = 0; y < height; y += rSlider.value()) {

        let i = (x + y * width) * 4;

        let r = pixels[i + 0];
        let g = pixels[i + 1];
        let b = pixels[i + 2];
        let a = pixels[i + 3];

        fill(r, g, b, a);
        square(x, y, rSlider.value());
      }
    }
  } else if(val == 'Original'){
   	image(img, 0, 0, width, height);
    loadPixels();
  } 
}

