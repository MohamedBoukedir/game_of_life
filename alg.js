function game_of_life(grid, context) {
    var l = grid.grid;
    var dim=l.length;
    var dic={}
    if (context) {
        for (var col = 0; col < dim; col++) {
            for (var row = 0; row < dim; row++) {
                var numNeighbors = grid.nbr_neighbor(row, col);
                dic[col+","+row]=numNeighbors;
            }

        }
        for (var col = 0; col < dim; col++) {
            for (var row = 0; row < dim; row++) {
                var numNeighbors = dic[col+","+row];
                if(numNeighbors!=0)console.log(numNeighbors);
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
