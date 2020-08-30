/* eslint-disable no-trailing-spaces */
'use strict';

// global functions
var imgArray = [];
var clicksAllowed = 25;
var numberOfClicks = 0;
var list = document.getElementById('list');
var container = document.getElementById('container');
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

//local storage
var retrivedImg = localStorage.getItem('ImgArray');

if (retrivedImg) {
  imgArray = JSON.parse(retrivedImg);
}
else {
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
  new Picture('baby-sweeper', './img/sweep.png');
  new Picture('tauntaun-sleeping-bag', './img/tauntaun.jpg');
  new Picture('unicorn-meat', './img/unicorn.jpg');
  new Picture('tentacle-usb', './img/usb.gif');
  new Picture('water-can', './img/water-can.jpg');
  new Picture('wine-glass', './img/wine-glass.jpg');
}
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
//console.log ('hello');
  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;

}
function randomNumber(max) {
  return Math.floor(Math.random() * max); // excludes 7
}
function renderChart() {
  for (var i = 0; i < imgArray.length; i++) {
    clicksArray.push(imgArray[i].clicked);
    viewedArray.push(imgArray[i].viewed);
    nameArray.push(imgArray[i].name);
  }
  var ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
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
          'rgba(42, 90, 132, 0.2)',
          'rgba(54, 77, 235, 0.2)',
          'rgba(255, 150, 132, 0.2)',
          'rgba(54, 162, 159, 0.2)',
          'rgba(200, 206, 86, 0.2)',
          'rgba(125, 192, 192, 0.2)',
          'rgba(153, 102, 124, 0.2)',
          'rgba(160, 159, 64, 0.2)',
          'rgba(255, 200, 132, 0.2)',
          'rgba(54, 77, 235, 0.2)',
          'rgba(255, 99, 245, 0.2)',
          'rgba(100, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 100, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(42, 90, 132, 0.2)',
          'rgba(54, 77, 235, 0.2)',
          'rgba(255, 150, 132, 0.2)',
          'rgba(54, 162, 159, 0.2)',
          'rgba(200, 206, 86, 0.2)',
          'rgba(125, 192, 192, 0.2)',
          'rgba(153, 102, 124, 0.2)',
          'rgba(160, 159, 64, 0.2)',
          'rgba(255, 200, 132, 0.2)',
          'rgba(54, 77, 235, 0.2)',
          'rgba(255, 99, 245, 0.2)',
          'rgba(100, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 100, 192, 0.2)'
        ],
        hoverBackgroundColor: 'purple',
        borderWidth: 2
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
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 150, 132, 0.2)',
          'rgba(54, 162, 159, 0.2)',
          'rgba(200, 206, 86, 0.2)',
          'rgba(125, 192, 192, 0.2)',
          'rgba(153, 102, 124, 0.2)',
          'rgba(160, 159, 64, 0.2)',
          'rgba(255, 200, 132, 0.2)',
          'rgba(54, 77, 235, 0.2)',
          'rgba(255, 99, 245, 0.2)',
          'rgba(100, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 100, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 150, 132, 0.2)',
          'rgba(54, 162, 159, 0.2)',
          'rgba(200, 206, 86, 0.2)',
          'rgba(125, 192, 192, 0.2)',
          'rgba(153, 102, 124, 0.2)',
          'rgba(160, 159, 64, 0.2)',
          'rgba(255, 200, 132, 0.2)',
          'rgba(54, 77, 235, 0.2)',
          'rgba(255, 99, 245, 0.2)',
          'rgba(100, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 100, 192, 0.2)'
        ],
        hoverBackgroundColor: 'orange',
        borderWidth: 2
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
  });
}


//var myChart = new Chart(ctx, chartObject); //eslint-disable-line


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
  }
  if (numberOfClicks === clicksAllowed) {
    container.removeEventListener('click', handleClick);
    renderChart();
    renderList();
    var stringifiedImgArray = JSON.stringify(imgArray);
    localStorage.setItem('imgArray', stringifiedImgArray);
  }
  container.addEventListener('click', handleClick);
}




// render images to DOM
renderImages();

// eventlistener
container.addEventListener('click', handleClick);

