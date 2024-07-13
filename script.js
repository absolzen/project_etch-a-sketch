const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('.gridSize');

let side = 1;

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

// create grid with specified size
function drawGrid(size, elementSize) {
  for (let i = 0; i < size; i++) {
    const gridElement = document.createElement('div');
    // set square size
    gridElement.style.width = elementSize + 'px';
    gridElement.style.height = elementSize + 'px';
    
    grid.appendChild(gridElement);
  }
}
    
// get user input for number of squares and draw a grid based on that
gridSizeBtn.addEventListener('click', () => {
  side = +prompt('Enter grid side size: ', 16);
  drawGrid(calculateGrid(side), calculateGridElement(side));
});

// select all grid elements and create array from them
const gridElements = Array.from(document.querySelectorAll('.grid > div'));

// attach event listener for each square and change its background on mouse hover
gridElements.forEach((element) => {
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