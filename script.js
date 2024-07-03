console.log("Welcome to Etch-a-Sketch");

const gridSize = 16;

// Access main container (defined in HTML) which is the whole page
const container = document.querySelector("#gamegrid");
container.style.flexDirection = "row";

for (var rowCount = 0; rowCount < gridSize; rowCount++) {
  //   const gridRow = document.createElement("div");
  //   gridRow.classList.add("container");
  const gridRow = document.createElement("div");
  gridRow.classList.add("container");
  for (var nodeCount = 0; nodeCount < gridSize; nodeCount++) {
    // Create a row
    const node = document.createElement("div");
    // node.classList.add("container");
    node.classList.add("gridRow");
    node.style.cssText = "color: blue; background: green;";
    node.style.borderColor = "black";
    node.style.height = "25px";
    node.style.width = "25px";
    node.style.margin = "1px";

    // node.classList.add("node");
    // container.appendChild(node);

    gridRow.appendChild(node);
  }
  container.appendChild(gridRow);
  // gridRow.style.cssText = "background: pink;";
  // gridRow.style.borderColor = "black";
  // gridRow.style.height = "50px";
  // gridRow.style.width = "500px";
  // gridRow.style.margin = "1px";

  // container.appendChild(gridRow);
}

// Use the 'container' referenced in the HTML
// const container = document.querySelector("#container");
// Create a DIV element
// const row = document.createElement("div");

// const h = document.createElement("h3");
// h.classList.add("content");
// h.style.color = "blue";
// h.textContent = "Hi, I'm a BLUE h3";

// container.appendChild(content);
// container.appendChild(h);
