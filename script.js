const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('.gridSize');

let side = 1;

function calculateGrid(side) {
  return gridSize = side * side;
}

function drawGrid(size) {
  // create grid with specified size
  for (let i = 0; i < gridSize; i++) {
    const gridElement = document.createElement('div');
    grid.appendChild(gridElement);
  }
}

// get grid width for grid square width calculation
let gridStyle = window.getComputedStyle(grid),
    gridWidth = +gridStyle.getPropertyValue('width').replace('px', '');

    
    
    
// get user input for number of squares and draw a grid based on that
gridSizeBtn.addEventListener('click', () => {
  side = +prompt('Enter grid side size: ', 16);
  drawGrid(calculateGrid(side));
});
    
// select all grid elements and create array from them
const gridElements = Array.from(document.querySelectorAll('.grid > div'));
    
// 960 / 16 == 60 // gridWidth / side == gridElement
// set square width and height to that
let gridElementWidth = gridWidth / side;

// attach event listener for each square and change its background on mouse hover
gridElements.forEach((element) => {
  element.setAttribute(`width: ${gridElementWidth}`); 
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'black';
  });
});



// TODO: 
//   - adjust squares size to their quantity
//   - remove existing grid
//   - create new grid within the same space as before
//   - limit user input to max 100

// EXTRA:
// - add randomization of square colors
// - add progressive darkening (each step darkens color by 10%). Use opacity.