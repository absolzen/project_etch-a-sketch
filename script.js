const grid = document.querySelector('.grid');

// create 256 divs
for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement('div');
  grid.appendChild(gridElement);
}

// TODO: 
// - add background color change for grid elements on mouse hover
// - add button on top asking for a number of grid elements per side for the new grid
//   - remove existing grid
//   - create new grid within the same space as before
//   - limit user input to max 100

// EXTRA:
// - add randomization of square colors
// - add progressive darkening (each step darkens color by 10%). Use opacity.