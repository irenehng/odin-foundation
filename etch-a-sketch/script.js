const gridContainer = document.querySelector("div#grid-container");
gridContainer.att

let gridSize = 16;

for (let i=0; i< gridSize; i++) {
  for (let j=0; j<gridSize; j++) {
    let cell = document.createElement('div');
    cell.className = 'grid-cell';
    gridContainer.appendChild(cell);
  }
}

const gridCells = document.querySelectorAll('.grid-cell');
gridCells.forEach((cell) => {
  let interact = 0;
  cell.addEventListener('mouseover', () => {
    // cell.classList.add('hovered');
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random() * 256);
    let opacity = interact * 0.1;
    cell.style.backgroundColor = `rgb(${red*(1-opacity)}, ${green*(1-opacity)}, ${blue*(1-opacity)})`;
    interact++;
    if (interact >=10) {
      interact = 0;
    }
  });
});

const sizeButton = document.querySelector("button#size-btn");
sizeButton.addEventListener('click', () => {
  gridSize = prompt('How many squares per row (max 100) do you want your grid to have?');
  gridCells.forEach((cell) => {
    cell.style.width = `${960 / gridSize}px`;
    cell.style.paddingBottom = `${960 / gridSize}px`;
  })
})

const clearButton = document.querySelector("button#clear-btn");
clearButton.addEventListener('click', () => {
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = 'lightgrey';
  })
})
