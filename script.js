const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('.gridSize');
const randomColorBtn = document.querySelector('.randomColor');
const fadeInBtn = document.querySelector('.fadeIn');
const clearBtn = document.querySelector('.clear');

let side = 16;

// get grid width for grid square width calculation
let gridStyle = window.getComputedStyle(grid),
gridWidth = +gridStyle.getPropertyValue('width').replace('px', '');

// calculate number of squares
function calculateGrid(side) {
  return side * side;
}

// calculate square size
function calculateGridElement(side) {
  return gridWidth / side;
}

// set default color
let gridColor = 'black';
// set and toggle random color
let randomColor = false;
randomColorBtn.addEventListener('click', () => {
  if (randomColor === false) {
    randomColor = true;
  } else {
    randomColor = false;
  }
});

fadeInBtn.addEventListener('click', () => {
    changeOpacity();
});

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

// create grid with specified size
function drawGrid(size, elementSize) {
  for (let i = 0; i < size; i++) {
    const gridElement = document.createElement('div');
    // set square size
    gridElement.style.width = elementSize + 'px';
    gridElement.style.height = elementSize + 'px';
    // attach event listener for each square and change its background on mouse hover
    gridElement.addEventListener('mouseover', () => {
      if (randomColor === true) {
        gridColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      }
      changeColor(gridElement, gridColor);
    });
    grid.appendChild(gridElement);
  }
}

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

function changeOpacity() {
  grid.addEventListener('mouseover', (event) => {
    event.target.style.opacity = 0;
  });
}

function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function clearGrid() {
  let squares = Array.from(document.querySelectorAll('.grid > div'));
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = 'white';
  }
}



// draw a grid of 16x16 on start
drawGrid(calculateGrid(side), calculateGridElement(side));

// clear grid
clearBtn.addEventListener('click', () => {
  clearGrid();
});

// get user input for number of squares and draw a grid based on that
gridSizeBtn.addEventListener('click', () => {
  removeGrid();
  side = +prompt('Enter grid side size: ', 16);
  // limit user input to 1 to 100
  while (side > 100 || side < 1) {
    side = +prompt('Enter grid side size: ', 16);
  }
  drawGrid(calculateGrid(side), calculateGridElement(side));
});

// EXTRA:
// - add progressive darkening (each step darkens color by 10%). Use opacity.