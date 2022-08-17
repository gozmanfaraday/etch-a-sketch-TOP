// ETCH-A-SKETCH

// DOM Element Selectors
const gridSizeRange = document.querySelector('input#grid-size');
const gridSizeLabel = document.querySelector('label#grid-size-label');
const sketchPad = document.querySelector('#sketch-pad');
const controlButtons = document.querySelectorAll('button');
const colorModeElement = document.querySelector('#color-mode');
const rainbowModeElement = document.querySelector('#rainbow-mode');
const grayModeElement = document.querySelector('#gray-mode');
const eraseModeElement = document.querySelector('#erase-mode');
const clearModeElement = document.querySelector('#clear-mode');
const colorPicker = document.querySelector('#color-picker');

// Event Listeners
gridSizeRange.addEventListener('input', updateLabel);
gridSizeRange.addEventListener('change', createGrid);
grayModeElement.addEventListener('click', grayMode);
colorModeElement.addEventListener('click', colorMode);
rainbowModeElement.addEventListener('click', rainbowMode);
eraseModeElement.addEventListener('click', eraseMode);
clearModeElement.addEventListener('click', clearSketchPad);
Array.from(controlButtons).forEach(button => {
  button.addEventListener('click', determineButtonColor);
});


// Function to update the label when the grid size is changed
function updateLabel() {
  let gridSize = gridSizeRange.value; // Value from range input
  gridSizeLabel.textContent = `Grid Size - ${gridSize} x ${gridSize}`;
}

// Function to create default grid 16 x 16 and set default mode to color mode
function createDefaultGrid(gridSize = 16) {
  let gridArea = gridSize ** 2;
  sketchPad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  let smallGridDim = 440 / gridSize;

  for (let i = 0; i < gridArea; i++) {
    let smallGrid = document.createElement('div');
    smallGrid.setAttribute('style', `width: ${smallGridDim}px; border: solid 1px #f1f1f1;`);

    sketchPad.appendChild(smallGrid);

    smallGrid.className = 'small-grid';
  }

  colorMode();
}

// Function to create grid of any size
function createGrid() {
  let gridSize = gridSizeRange.value; // Value from range input

  removeSmallGrid()
  createDefaultGrid(gridSize);
  colorNewGrid();
}

// Function to color grid when grid size is changed
function colorNewGrid() {
  Array.from(controlButtons).forEach(button => {
    if (button.id === 'color-mode' && button.classList.contains('bg-violet')) {
      colorMode();
    } else if (button.id === 'gray-mode'  && button.classList.contains('bg-violet')) {
      grayMode();
    } else if (button.id === 'rainbow-mode'  && button.classList.contains('bg-violet')) {
      rainbowMode();
    } else if (button.id === 'erase-mode'  && button.classList.contains('bg-violet')) {
      eraseMode();
    }
  })
}

// Function to remove small grid elements and replace them with new small grid elements when the grid size is changed
function removeSmallGrid() {
  const smallGrids = document.querySelectorAll('.small-grid');

  Array.from(smallGrids).forEach( smallGrid => {
    sketchPad.removeChild(smallGrid);
  });
}

// Function to change color of selected button
function determineButtonColor(e) {
  if (e.target.classList.contains('bg-violet')) {
    return;
  } else {
    if (e.target.id === 'clear-mode') {
      return;
    }
    Array.from(controlButtons).forEach(button => {
      button.className = 'bg-lavender w-56 py-3 rounded-full shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-100';
    });
    e.target.className = 'bg-violet text-white w-56 py-3 rounded-full shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-100';
  }
}

// Function to color smaller grids a certain color picked from the color picker (default is black)
function colorMode() {
  let smallGrids = document.querySelectorAll('.small-grid');
  Array.from(smallGrids).forEach( smallGrid => {
    smallGrid.addEventListener('mouseenter', () => {
      let color = colorPicker.value;
      smallGrid.setAttribute('style', `background: ${color}; border-color: ${color};`);
    });
  });
}

// Function to color smaller grids different shades of gray
function grayMode() {
  let smallGrids = document.querySelectorAll('.small-grid');
  Array.from(smallGrids).forEach( smallGrid => {
    smallGrid.addEventListener('mouseenter', () => {
      let hslLight = Math.floor(Math.random() * 50) + 50;
      let hsl = `hsl(0, 0%, ${hslLight}%)`;
      smallGrid.setAttribute('style', `background: ${hsl}; border-color: ${hsl};`);
    });
  });
}

// Function to color smaller grids different colors (rainbow)
function rainbowMode() {
  let smallGrids = document.querySelectorAll('.small-grid');
  Array.from(smallGrids).forEach( smallGrid => {
    smallGrid.addEventListener('mouseenter', () => {
      let hslHue = Math.floor(Math.random() * 360);
      let hsl = `hsl(${hslHue}, 100%, 50%)`;
      smallGrid.setAttribute('style', `background: ${hsl}; border-color: ${hsl};`);
    });
  });
}

// Function to erase the color on a small grid to white
function eraseMode() {
  let smallGrids = document.querySelectorAll('.small-grid');
  Array.from(smallGrids).forEach( smallGrid => {
    smallGrid.addEventListener('mouseenter', () => {
      smallGrid.setAttribute('style', `background: white; border: solid 1px #f1f1f1;`);
    });
  });
}

// Function to clear sketch pad
function clearSketchPad() {
  let smallGrids = document.querySelectorAll('.small-grid');
  Array.from(smallGrids).forEach( smallGrid => {
    smallGrid.setAttribute('style', `background: white; border: solid 1px #f1f1f1;`);
  });
}

createDefaultGrid();