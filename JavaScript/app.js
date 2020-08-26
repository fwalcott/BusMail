'use strict';

var imgArray = [];
var clicksAllowed = 25;
var numberOfClicks = 0;

var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');

// constructor for our image objects
function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);
}

// lets create our "images"
new Picture('R2D2-bag', './img/bag.jpg');
new Picture('banana-slicer', './img/banana.jpg');
new Picture('hold-your-tablet-in-the-toliet', './img/bathroom.jpg');
new Picture('boots', './img/boots.jpg');
new Picture('breakfast-maker-machine', './img/breakfast.jpg');
new Picture('meatball-gum-bubblegum', './img/bubblegum.jpg');
new Picture('cthulhu', './img/cthulhu.jpg');
new Picture('chair', './img/chair.jpg');
new Picture('dog-duck', './img/dog-duck.jpg');
new Picture('dragon-meat', './img/dragon.jpg');
new Picture('pen', './img/pen.jpg');
new Picture('pet-sweeper', './img/pet-sweep.jpg');
new Picture('scissors', './img/scissors.jpg');
new Picture('shark-sleeping-bag', './img/shark.jpg');
new Picture('baby-sweeper', './img/sweep.jpg');
new Picture('tauntaun-sleeping-bag', './img/tauntaun.jpg');
new Picture('unicorn-meat', './img/unicorn.jpg');
new Picture('tentacle-usb', './img/usb.gif');
new Picture('water-can', './img/water-can.jpg');
new Picture('wine-glass', './img/wine-glass.jpg');


function renderImages() {
  // DOM manipulation  fill element with content
  var imgOne = imgArray[randomNumber(imgArray.length)];
  var imgTwo = imgArray[randomNumber(imgArray.length)];
  var imgThree = imgArray[randomNumber(imgArray.length)];

  while (imgOne === imgTwo) {
    imgTwo = imgArray[randomNumber(imgArray.length)];
  }
  while (imgTwo === imgThree) {
    imgThree = imgArray[randomNumber(imgArray.length)];
  }

  while (imgThree === imgOne) {
    imgOne = imgArray[randomNumber(imgArray.length)];
  }

  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;
  imgElThree.src = imgThree.src;

  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;
  imgElThree.alt = imgThree.name;

  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;

  //console.log(imgArray);

}

function randomNumber(max) {
  return Math.floor(Math.random() * max); // excludes 7
}



function eventHandler(e) {
  // TODO:  Increase our 'viewed' property based on clicking an image
  // console.log(e);
  console.log(e.target.alt);
  numberOfClicks++;
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
    }
  }
  renderImages();  
  console.log('string', numberOfClicks);
  if (numberOfClicks === clicksAllowed) {
    imgElOne.removeEventListener('click', eventHandler);
    imgElTwo.removeEventListener('click', eventHandler);
    imgElThree.removeEventListener('click', eventHandler);
  };
}
renderImages();


imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler);