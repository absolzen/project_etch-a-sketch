const grid = document.querySelector('.grid');

// create 256 divs
for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement('div');
  grid.appendChild(gridElement);
}

// select all grid elements and create array from them
const gridElements = Array.from(document.querySelectorAll('.grid > div'));

// attach event listener for each square and change its background on mouse hover
gridElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'black';
  });
});



// TODO: 
// - add background color change for grid elements on mouse hover
// - add button on top asking for a number of grid elements per side for the new grid
//   - adjust squares size to their quantity
//   - remove existing grid
//   - create new grid within the same space as before
//   - limit user input to max 100

// EXTRA:
// - add randomization of square colors
// - add progressive darkening (each step darkens color by 10%). Use opacity.