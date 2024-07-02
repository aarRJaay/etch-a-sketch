console.log("Welcome to Etch-a-Sketch");

const gridSize = 16;

// Access main container (defined in HTML) which is the whole page
const container = document.querySelector("#gamegrid");
// container.style.flexDirection = "row";

for (var rowCount = 0; rowCount < gridSize; rowCount++) {
  const gridRow = document.createElement("gridRow");
  for (var nodeCount = 0; nodeCount < gridSize; nodeCount++) {
    // Create a row
    const node = document.createElement("node");
    node.style.cssText = "color: blue; background: green;";
    node.style.borderColor = "black";
    node.style.height = "25px";
    node.style.width = "25px";
    node.style.margin = "1px";

    // node.classList.add("node");
    // container.appendChild(node);

    node.classList.add("node");
    gridRow.appendChild(node);
  }
  gridRow.classList.add("gridRow");
  container.appendChild(gridRow);
}
