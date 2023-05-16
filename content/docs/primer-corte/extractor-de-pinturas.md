# Extractor de colores Winsor & newton
by [FredyRosero](/showcase/docs/info/Fredy/)

<img width="250px" src="https://cdn.shopify.com/s/files/1/0048/4245/5158/products/2_a0647768-69c7-4215-bc29-6fffd875b91d_1200x1200.png?v=1679960445">

Este sketch de P5 posteriza la imagen para limitar 4 colores por canal. Luego agrega el valor RGB de cada pixel sin repetir a una lista que luego aproximara a otros valores RGB que se "aproximan" a los colores de las pinturas de óleo Winsor & newton "Artists' Oil Colour" extraidos de <https://color-term.com/winsornewton-colors/>

{{< p5-global-iframe id="breath" width="600" height="900"  >}}
const imgURL = "/showcase/sketches/lenna.png"
const cantidadColores = 4;
const anchoImg = 400;

let img;
let imgCopy;
let coloresDict;
let rgbValues = new DeepSet();
let colores = []
let remplazoColores = []
let altoImg
let slider;
let button;
let esMostrarColores = false;

function preload() {
  // Cargamos la imagen
  img = loadImage(imgURL);
  // Cargamos el diccionario de colores
  coloresDict = loadJSON("/showcase/sketches/colores.json");
  console.log("Colores:", coloresDict)
}

function setup() {
  // Definimos el tamaño del lienzo de P5
  createCanvas(600, 900);

  altoImg = (anchoImg / img.width) * img.height; 
  image(img, 0, 0, anchoImg, altoImg);
  let c = get();
  
  loadPixels(); 

  calcularColoresWinsor();
  image(c, 0, altoImg);  
}


function dibujarColores() {
  let boxWidth = width - anchoImg;
  let boxHeight = 2 * altoImg / colores.length;

  let x = anchoImg //despues de la imagen
  for (let i = 0; i < colores.length; i++) {
    let rgbValues = extraerRGBdeTexto(colores[i]["rgb"]);
    
    let r = int(rgbValues.r);
    let g = int(rgbValues.g);
    let b = int(rgbValues.b);

    let y = i * boxHeight;
    let c = color(r, g, b);
    fill(c);
    rect(x, y, boxWidth, boxHeight);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(colores[i]["nombre"], x + boxWidth / 2, y + boxHeight / 2);        
  }
}

function calcularColoresWinsor() {
  posterizar();
  extraerColores();  
   actualizarColores();  
  esMostrarColores = true;
  dibujarColores(); 
}

function posterizar() {
  filter(POSTERIZE, cantidadColores);  
}

function extraerColores() {
  loadPixels(); 
  // Extraer valores RGB en la posición (x, y)
  rgbValues = new DeepSet();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      // Calcular el indice del pixel en el arreglo de pixeles
      let index = (x + y * img.width) * 4;
      let r = pixels[index]; // valor Red
      let g = pixels[index + 1]; // valor Green
      let b = pixels[index + 2]; // valor Blue 
      let rgbValue = { r: r, g: g, b: b };
      rgbValues.add(rgbValue); // Agregar valores a la lista

    }
  }
  rgbValues = Array.from(rgbValues);
  console.log('Valores RGB encontrados:', rgbValues);
  colores=[]
  remplazoColores=[]
  rgbValues.forEach(rgbValue => {
    colorCercano = encontrarColorMasCercano(coloresDict, rgbValue);
    colores.push(colorCercano)
    remplazoColores.push({ org: rgbValue, rem: hexToRgb(colorCercano.hex) })
  });
  console.log("Nombres de los colores encontrados:", colores);
  console.log("Remplazo de colores:", remplazoColores); 
}

function actualizarColores(){  
  loadPixels(); 
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index]; // valor Red
      let g = img.pixels[index + 1]; // valor Green
      let b = img.pixels[index + 2]; // valor Blue 
      let rgbValue = { r: r, g: g, b: b };
      let colorRemplazo = remplazoColores.find(obj =>
        obj.org.r === rgbValue.r &&
        obj.org.g === rgbValue.g &&
        obj.org.b === rgbValue.b
      );
      if (colorRemplazo) {
        colorRemplazo = colorRemplazo.rem;      
        img.pixels[index] = colorRemplazo.r;
        img.pixels[index + 1] = colorRemplazo.g;
        img.pixels[index + 2] = colorRemplazo.b;
      }
    }
  }
  updatePixels();  
}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function distanciaRGB(color1, color2) {
  const rDif = color1.r - color2.r;
  const gDif = color1.g - color2.g;
  const bDif = color1.b - color2.b;
  return Math.sqrt(rDif * rDif + gDif * gDif + bDif * bDif);
}

function encontrarColorMasCercano(colors, RGBobjetivo) {
  let colorMasCercano = null;
  let distanciaMasCercana = Infinity;
  Object.values(colors).forEach(color => {
    const colorRgb = hexToRgb(color.hex);
    const distance = distanciaRGB(RGBobjetivo, colorRgb);
    if (distance < distanciaMasCercana) {
      distanciaMasCercana = distance;
      colorMasCercano = color;
    }
  });

  return colorMasCercano;
}

function extraerRGBdeTexto(rgbString) {
  rgbString = rgbString.slice(4, -1);
  let [r, g, b] = rgbString.split(',');
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return { r, g, b };
}
{{< /p5-global-iframe >}}

El diccionario de colores `/showcase/sketches/colores.json` se generó con el siguiente scrapper de python:
~~~python
import requests
import json
from bs4 import BeautifulSoup

urls = [    "https://color-term.com/winsornewton-colors/",
            "https://color-term.com/winsornewton-colors/2",
            "https://color-term.com/winsornewton-colors/3",
            "https://color-term.com/winsornewton-colors/4",
]
colores = []
for url in urls:
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    table = soup.find("div", class_="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3")
    for col in table.find_all("div",class_="col"):
        # Find the cells in each row
        nombre = col.find("h2").text.strip()
        hexa = col.find("h3",).text.strip()[:7]
        rgb = col.find("h4",).text.strip()
        color =  {
          "nombre": nombre,
          "hex": hexa,
          "rgb": rgb
        }
        print(color)
        colores.append(color)
with open("colores.json", "w") as f:
    json.dump(colores, f)
~~~