console.log("Welcome to Etch-a-Sketch");

const gridSize = 16;

// Access main container (defined in HTML) which is the whole page
const container = document.querySelector("#gamegrid");
container.style.flexDirection = "row";

for (var rowCount = 0; rowCount < gridSize; rowCount++) {
  const gridRow = document.createElement("div");
  gridRow.classList.add("container");
  for (var nodeCount = 0; nodeCount < gridSize; nodeCount++) {
    const node = document.createElement("div");
    node.classList.add("gridRow");
    node.style.cssText = "color: blue; background: green;";
    node.style.borderColor = "black";
    node.style.height = "25px";
    node.style.width = "25px";

    node.addEventListener(
      "mouseenter",
      (event) => {
        console.log("OUCH ", event);
        node.style.background = "pink";
      },
      false,
    );

    gridRow.appendChild(node);
  }
  container.appendChild(gridRow);
}
