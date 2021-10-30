function game_of_life(grid, context) {
    var l = grid.grid;
    if (context) {
        for (var col = 0; col < 100; col++) {
            for (var row = 0; row < 100; row++) {
                var numNeighbors = grid.nbr_neighbor(row, col);
                if (l[row][col] == 1) {
                    if (numNeighbors < 2) {
                        l[row][col] = 0;
                        var cell = document.getElementById(col+","+row);
                        cell.style.backgroundColor = "white";
                    } else if (numNeighbors == 2 || numNeighbors == 3) {
                        l[row][col] = 1;
                        var cell = document.getElementById(col+","+row);
                        cell.style.backgroundColor = "black";
                    } else if (numNeighbors > 3) {
                        l[row][col] = 0;
                        var cell = document.getElementById(col+","+row);
                        cell.style.backgroundColor = "white";
                    }
                } else if (l[row][col] == 0) {
                    if (numNeighbors == 3) {
                        l[row][col] = 1;
                        var cell = document.getElementById(col+","+row);
                        cell.style.backgroundColor = "black";
                    }
                }
            }

        }
    }
}
