# P5 Testing!

Este es otra prueba con código de prueba:

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



Fin.