class progressBar {
    i = 0;
    update = new Promise((resolve, rej) => {
        if (this.i == 0) {
            this.i = 1;
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
                const elem = document.getElementById("myBar");
                if (width >= 100) {
                    clearInterval(id);
                    this.i = 0;
                    resolve();
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                }
            }
        }
    })
    remove() {
        $(".myBar").remove();
    }
}
class Grid {
    constructor() {
        this.grid = [];
        let x = 50;
        for (var i = 0; i < x; i++) {
            this.grid[i] = [];
            for (var j = 0; j < x; j++) this.grid[i][j] = 0;
        }
    }
    createGrid() {
        let x = 50;
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < x; j++) {
                $("#grid").append("<div class='cell' id=" + "'" + i + "," + j + "'" + "></div>");
            }
        }
        $(".cell").width(1600 / x);
        $(".cell").height(740 / x);
    }
    nbr_neighbor(x,y){
        let dim=50;
        var i=0;
        let l=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];
        for(var j=0;j<8;j++){
            if( (x+l[j][0])<dim && (x+l[j][0])>=0 && (y+l[j][1])<dim &&  (y+l[j][1])>=0){
                if(this.grid[x+l[j][0]][y+l[j][1]]==1) i++;
            }
        }
        return(i);
    }
}
class Chrono {
    constructor() {
        this.t = 0;
        this.stop = false;
        this.strt = false;
    }
}
