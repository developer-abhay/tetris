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

// Creating Grid cells
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

// Rendering the grid
function renderGrid() {
  playground.innerHTML = "";
  grid.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      playground.appendChild(createDiv(value, rowIndex, colIndex));
    });
  });
}

// Creating a Shape
function createShape(type) {
  let shape = {};
  if (type == "box") {
    shape = [
      [0, 4],
      [0, 5],
      [1, 4],
      [1, 5],
    ];
  }
  if (type == "line") {
    shape = [
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
    ];
  }
  if (type == "zed") {
    shape = [
      [0, 4],
      [0, 5],
      [1, 5],
      [1, 6],
    ];
  }
  if (type == "L") {
    shape = [
      [0, 4],
      [0, 5],
      [0, 6],
      [1, 4],
    ];
  }
  return shape;
}

// Rendering a shape
function renderShape(shape) {
  if (i) {
    shape.forEach((item, index) => {
      if (grid[item[0]]) {
        grid[item[0]][item[1]] = 0;
        item[0] += 1;
      }
    });
  }

  shape.forEach((item) => {
    if (grid[item[0]]) {
      grid[item[0]][item[1]] = 1;
    }
  });
}

async function nextState() {
  if (i <= 11) {
    renderShape(shape);
    renderGrid();
    i++;
  } else {
    i = 0;
    shape = createShape("line");
    renderGrid();
  }
}

let shape = createShape("box");
let i = 0;
renderGrid();
setInterval(nextState, 1000);

// console.log(currentShape);
