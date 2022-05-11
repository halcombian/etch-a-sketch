const gridContainer = document.getElementById("grid-container");
const newGridButton = document.getElementById("new-grid-button");

function getGridWidth() {
	return prompt("Please enter grid width", "16");
}

function createGrid() {
	const gridWidth = getGridWidth();
	gridContainer.setAttribute(
		"style",
		`grid-template-columns: repeat(${gridWidth}, 1fr);`
	);
	let gridSize = Math.pow(gridWidth, 2);
	for (let i = 0; i < gridSize; i++) {
		const gridElement = document.createElement("div");
		gridElement.className = "grid-element";
		gridContainer.append(gridElement);
		gridElement.addEventListener("mouseenter", () => {
			gridElement.style.backgroundColor = "black";
		});
	}
}

function newGrid() {
	newGridButton.addEventListener("click", () => {
		while (gridContainer.firstChild) {
			gridContainer.removeChild(gridContainer.lastChild);
		}
		createGrid();
	});
}

newGrid();
