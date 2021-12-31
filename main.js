$(document).ready(function(){

'use strict';

paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
const btnClear = document.querySelector(".clear");


var tool = new Tool();
var c;
tool.onMouseDrag = function(event){
    c = Shape.Circle(event.point,  20)
    c.fillColor = getRangomColor;
}
function getRangomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
  }
  
  function getRandomHex() {
    return Math.round(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  }

paper.view.draw();
})