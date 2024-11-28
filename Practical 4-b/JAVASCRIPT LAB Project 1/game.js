/* TODO implement game logic here */
document.addEventListener("DOMContentLoaded", () => {
    const labyrinth = new Labyrinth();
    const mapDiv = document.getElementById("map");
    labyrinth.render("map");

    let player = { ...labyrinth.start };

    document.addEventListener("keydown", (e) => {
        const move = { x: player.x, y: player.y };

        if (e.key === "ArrowUp") move.y--;
        if (e.key === "ArrowDown") move.y++;
        if (e.key === "ArrowLeft") move.x--;
        if (e.key === "ArrowRight") move.x++;

        // Check boundaries and walls
        if (
            move.x >= 0 &&
            move.y >= 0 &&
            move.x < labyrinth.map[0].length &&
            move.y < labyrinth.map.length &&
            labyrinth.map[move.y][move.x] === 0
        ) {
            player = move; // Update player position
        }

        labyrinth.start = player; // Update start position to current player
        labyrinth.render("map"); // Re-render map

        if (player.x === labyrinth.end.x && player.y === labyrinth.end.y) {
            alert("You win!");
        }
    });
});
