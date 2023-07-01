const gridContainer = document.querySelector("div#grid-container");
gridContainer.att

const gridSize = 16;
const cellSize = 100 / gridSize;

for (let i=0; i< gridSize; i++) {
  for (let j=0; j<gridSize; j++) {
    let cell = document.createElement('div');
    cell.className = 'grid-cell';
    gridContainer.appendChild(cell);
  }
}

// const gridCells = document.querySelectorAll('.grid-cell');
// gridCells.forEach(cell => {
//   console.log(gridCells.length)
//   cell.style.width = `${cellSize}%`;
//   cell.style.height = `${cellSize}%`;
//   cell.style.backgroundColor = 'lightgray';
//   cell.style.border = '1px solid gray';
