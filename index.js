import "./style.css";

const playground = document.querySelector(".playground");
const width = 50;
const height = 50;

let xAxis = 0;
let yAxis = 0;

const shapes = [
  {
    name: "box",
    shape: createShape("box"),
  },
  {
    name: "line",
    shape: createShape("line"),
  },
  {
    name: "zed",
    shape: createShape("zed"),
  },
  {
    name: "L",
    shape: createShape("L"),
  },
];

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    xAxis += 50;
    render();
  }
  if (event.key == "ArrowRight") {
    xAxis -= 50;
    render();
  }
});

function createShape(shape) {
  const div = document.createElement("div");

  if (shape == "box") {
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.top = "-100px";
    div.style.left = `50%`;
    div.style.transform = `translateX(-50%)`;
  }
  if (shape == "line") {
    div.style.width = "200px";
    div.style.height = "50px";
    div.style.top = "-50px";
    div.style.left = `50%`;
    div.style.transform = `translateX(-50%)`;
  }
  if (shape == "zed") {
    div.style.width = "100px";
    div.style.height = "50px";
    div.style.top = "-50px";
    div.style.left = `50%`;
    div.style.transform = `translateX(-50%)`;
  }
  if (shape == "L") {
    div.style.width = "50px";
    div.style.height = "100px";
    div.style.top = "-100px";
    div.style.left = `50%`;
    div.style.transform = `translateX(-50%)`;
  }
  return div;
}

function render() {
  shapes.forEach((item) => {
    playground.appendChild(item.shape);
  });
}
render();

let shapeCount = 0;
function gravity() {
  if (yAxis <= 500) {
    yAxis += 50;
    shapes[shapeCount].shape.style.top = `${yAxis}px`;
  } else {
    shapeCount++;
    yAxis = 0;
  }
}

setInterval(gravity, 1000);
