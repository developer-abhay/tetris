import "./style.css";

const playground = document.querySelector(".playground");
const cols = 10;
const rows = 12;

playground.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
playground.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

const gridEmptyRow = Array(cols).fill(0);
const grid = Array(rows)
  .fill()
  .map(() => [...gridEmptyRow]);

// grid[0][2] = 1;
// grid[0][3] = 1;
// grid[0][4] = 1;
// grid[0][5] = 1;

grid[0][5] = 1;
grid[0][6] = 1;
grid[1][5] = 1;
grid[1][6] = 1;

function createDiv(value, row, col) {
  const div = document.createElement("div");
  div.classList.add("grid-cell");
  div.setAttribute("data-row", row);
  div.setAttribute("data-col", col);

  div.style.width = "50px";
  div.style.height = "50px";

  if (value == 1) {
    div.style.backgroundColor = "red";
  }
  return div;
}

function render() {
  grid.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      playground.appendChild(createDiv(value, rowIndex, colIndex));
    });
  });
}

function nextState() {
  if (!grid[11].includes(1)) {
    grid.pop();
    grid.unshift([...gridEmptyRow]);
    playground.innerHTML = "";
    render();
  }
}

render();
setInterval(nextState, 1000);
