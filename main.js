$(document).ready(function(){

'use strict';

paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var tool = new Tool();

const colorPalette = document.querySelector(".color-palette");
  colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

    const selectedColor = event.target.dataset.color;
    
    let c;
    tool.onMouseDrag = function(event){
    c = Shape.Circle(event.point,  20)
    c.fillColor = selectedColor;
}
  
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
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