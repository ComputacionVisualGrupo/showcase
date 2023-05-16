# Extractor de colores Winsor & newton
by [FredyRosero](/showcase/docs/info/Fredy/)

<img width="250px" src="https://cdn.shopify.com/s/files/1/0048/4245/5158/products/2_a0647768-69c7-4215-bc29-6fffd875b91d_1200x1200.png?v=1679960445">

Este sketch de P5 posteriza la imagen para limitar 4 colores por canal. Luego agrega el valor RGB de cada pixel sin repetir a una lista que luego aproximara a otros valores RGB que se "aproximan" a los colores de las pinturas de óleo Winsor & newton "Artists' Oil Colour" extraidos de <https://color-term.com/winsornewton-colors/>

{{< p5-iframe sketch="/showcase/sketches/extractor-de-pinturas.js" width="600" height="900" >}}

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