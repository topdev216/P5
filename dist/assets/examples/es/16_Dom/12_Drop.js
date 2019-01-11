/*
 * @name Arrojar
 * @description  Toma un archivo de imagen y arrójalo sobre el lienzo para mostrarlo.
 * <p><em><span class="small"> Para correr este ejemplo localmente, necesitarás la
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">biblioteca p5.dom</a>
 *, al menos un archivo de imagen.</span></em></p>
 */

function setup() {
  // crear el lienzo
  var c = createCanvas(710, 400);
  background(100);
  // añadir un evento para cuando un archivo sea arrojado al lienzo
  c.drop(gotFile);
}

function draw() {
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Drag an image file onto the canvas.', width/2, height/2);
  noLoop();
}

function gotFile(file) {
  // si es un archivo de imagen
  if (file.type === 'image') {
    // crear un elemento de imagen DOM, pero sin mostrarlo
    var img = createImg(file.data).hide();
    // dibujar la imagen en el lienzo
    image(img, 0, 0, width, height);
  } else {
    println('Not an image file!');
  }
}
