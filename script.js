const grid = document.querySelector('.grid');

// create 256 divs
for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement('div');
  gridElement.textContent = '+';
  grid.appendChild(gridElement);
}