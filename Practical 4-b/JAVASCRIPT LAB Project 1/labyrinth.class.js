function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 0, 0, 0]
    ];
    this.start = { x: 0, y: 0 };
    this.end = { x: 4, y: 4 };
}

Labyrinth.prototype.render = function (id) {
    const container = document.getElementById(id);
    container.style.gridTemplateRows = `repeat(${this.map.length}, 40px)`;
    container.style.gridTemplateColumns = `repeat(${this.map[0].length}, 40px)`;

    container.innerHTML = ""; // Clear previous content
    for (let y = 0; y < this.map.length; y++) {
        for (let x = 0; x < this.map[y].length; x++) {
            const cell = document.createElement("div");
            cell.className = "cell " + (this.map[y][x] === 1 ? "wall" : "space");
            if (x === this.start.x && y === this.start.y) cell.classList.add("character");
            if (x === this.end.x && y === this.end.y) cell.classList.add("destination");
            container.appendChild(cell);
        }
    }
};
