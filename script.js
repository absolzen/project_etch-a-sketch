const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('.gridSize');

let side = 0;

function calculateGrid(side) {
  return gridSize = side * side;
}

function drawGrid(size) {
  // create grid with
  for (let i = 0; i < gridSize; i++) {
    const gridElement = document.createElement('div');
    grid.appendChild(gridElement);
  }
}

// get grid width for grid square width calculation
let gridStyle = window.getComputedStyle(grid),
    gridWidth = +gridStyle.getPropertyValue('width').replace('px', '');



gridSizeBtn.addEventListener('click', () => {
  side = +prompt('Enter grid side size: ', 16);
  drawGrid(calculateGrid(side));
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