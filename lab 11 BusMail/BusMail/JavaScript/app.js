'use strict';

// global functions
var imgArray = [];
var clicksAllowed = 5;
var numberOfClicks = 0;
var list = document.getElementById('list');
var container = document.getElementById('container');
var renderQueue = [];
var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');
var clicksArray = [];
var viewedArray = [];
var nameArray = [];


// constructor for our image objects
function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);
}

// helper function to get random indexs
function randomPicture() {
  var num = Math.floor(Math.random() * imgArray.length);
  return num;
}

// get the three images
function createRenderQueue() {
  while (renderQueue.length > 2) {
    renderQueue.pop();
  }
  while (renderQueue.length < 4) {
    var i = randomPicture();
    while (renderQueue.includes(i)) {
      i = randomPicture();
    }
    renderQueue.unshift(i);
  }
  console.log(renderQueue);
}

// render images
function renderImages() {
  createRenderQueue();
  console.log(renderQueue);

  imgElOne.src = imgArray[renderQueue[0]].src;
  imgElOne.alt = imgArray[renderQueue[0]].name;
  imgArray[renderQueue[0]].viewed++;

  imgElTwo.src = imgArray[renderQueue[1]].src;
  imgElTwo.alt = imgArray[renderQueue[1]].name;
  imgArray[renderQueue[1]].viewed++;

  imgElThree.src = imgArray[renderQueue[1]].src;
  imgElThree.alt = imgArray[renderQueue[1]].name;
  imgArray[renderQueue[1]].viewed++;
}



function renderChart() {
  for (var i = 0; i < imgArray.length; i++){
    clicksArray.push(imgArray[i].clicked);
    viewedArray.push(imgArray[i].viewed);
    nameArray.push(imgArray[i].name);
  }
}
var chartObject = {
  type: 'bar',
  data: {
    labels: nameArray,
    datasets: [{
      label: '# of Votes',
      data: clicksArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      hoverBackgroundColor: 'teal',
      borderWidth: 1
    }, {
      label: '# of Views',
      data: viewedArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      hoverBackgroundColor: 'yellow',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    responsive: false,
  }
};

var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, chartObject); //eslint-disable-line


// render list
function renderList() {
  for (var i = 0; i < imgArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${imgArray[i].name} product had ${imgArray[i].clicked} votes and was shown ${imgArray[i].viewed} times`;
    list.appendChild(liEl);
  }
}

// eventhandler();
function handleClick(event) {
  var imgClicked = event.target.alt;
  var clickedStuff = event.target;
  console.log(clickedStuff);
  numberOfClicks++;

  for (var i = 0; i < imgArray.length; i++) {
    if (imgClicked === imgArray[i].name) {
      imgArray[i].clicked++;
    }

    renderImages();
    if (numberOfClicks === clicksAllowed) {
      container.removeEventListener('click', handleClick);
      renderChart();
      renderList();
    }
  }
}
container.addEventListener('click', handleClick);
//function event handler
/* function eventHandler(e) {
  console.log(e.target.alt);
  numberOfClicks++;
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
    }
  }
} */


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


// render images to DOM
renderImages();

// eventlistener
container.addEventListener('click', handleClick);

