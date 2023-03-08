# P5 Hello world!
by [FredyRosero](/showcase/docs/info/Fredy/)

Este es otra prueba con código de prueba:



# P5-div `scintillating.js`

{{< p5-div sketch="/showcase/sketches/scintillating.js" >}}

# P5-div `helloworld.js`

{{< p5-div sketch="/showcase/sketches/helloworld.js" >}}

# P5-instance-div

{{< p5-instance-div id="hola-mundo" >}}
const s = ( sketch ) => {

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};

let myp5 = new p5(s);
{{< /p5-instance-div >}}

# P5-iframe `colors.js`

{{< p5-iframe sketch="/showcase/sketches/colors.js" width="725" height="425" >}}

# Conclusiones

Fin.


