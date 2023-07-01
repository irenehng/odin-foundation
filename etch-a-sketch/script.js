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
  cell.addEventListener('mouseover', () => {
    cell.classList.add('hovered');
  });
});

const sizeButton = document.querySelector("button#size-btn")
sizeButton.addEventListener('click', () => {
  gridSize = prompt('How many squares per row (max 100) do you want your grid to have?');
  gridCells.forEach((cell) => {
    cell.style.width = `${960 / gridSize}px`;
    cell.style.paddingBottom = `${960 / gridSize}px`;
  })
})
