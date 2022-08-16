// ETCH-A-SKETCH

// DOM Element Selectors
const gridSizeRange = document.querySelector('input#grid-size');
const gridSizeLabel = document.querySelector('label#grid-size-label');
const sketchPad = document.querySelector('#sketch-pad');
const blackMode = document.querySelector('#black-mode');
const colorMode = document.querySelector('#color-mode');
const rainbowMode = document.querySelector('#rainbow-mode');
const grayMode = document.querySelector('#gray-mode');
const eraseMode = document.querySelector('#erase-mode');

// Event Listeners
gridSizeRange.addEventListener('input', () => updateLabel());
gridSizeRange.addEventListener('change', () => createGrid());
blackMode.addEventListener('click', colorGridBlack());

// Function to update the label when the grid size is changed
function updateLabel() {
  let gridSize = gridSizeRange.value; // Value from range input
  gridSizeLabel.textContent = `Grid Size - ${gridSize} x ${gridSize}`;
}

// Function to create default grid 16 x 16
function createDefaultGrid(gridSize = 16) {
  let gridArea = gridSize ** 2;
  sketchPad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  let smallGridDim = 440 / gridSize;

  for (let i = 0; i < gridArea; i++) {
    let smallGrid = document.createElement('div');
    smallGrid.setAttribute('style', `width: ${smallGridDim}px; height: ${smallGridDim}px; z-index: 3; border: solid 1px;`);

    sketchPad.appendChild(smallGrid);

    smallGrid.className = 'small-grid';
  } 
}

// Function to create grid of any size
function createGrid() {
  let gridSize = gridSizeRange.value; // Value from range input

  removeSmallGrid()
  createDefaultGrid(gridSize);
}

// Function to remove small grid elements
function removeSmallGrid() {
  const smallGrids = document.querySelectorAll('.small-grid');

  Array.from(smallGrids).forEach( smallGrid => {
    sketchPad.removeChild(smallGrid);
  });
}

// Function to
function colorGridBlack() {
  blackMode.className = 'bg-violet text-white w-56 py-3 rounded-full shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-100';
}

createDefaultGrid();