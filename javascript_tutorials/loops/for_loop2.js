var gridSize = 8;

for (var row = 0; row < gridSize; row++) {
    for (var col = 0; col < gridSize; col++) {
        // Create and position game tiles on the grid
        var tile = createTile(row, col);
        positionTile(tile, row, col);
    }
}


for (var i = 0; i < 5; i++) {
    var enemy = createEnemySprite();
    positionEnemyOnScreen(enemy, i * 100, 100);
}
