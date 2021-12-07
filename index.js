
const bar = new progressBar();
const chrono = new Chrono();
let grid;
var slider = document.getElementById("myRange");




bar.update
    .then(() => {
        $("#img").remove();
        $("#myProgress").remove();
    }).then(() => {
        grid = new Grid();
        grid.createGrid();
    }).then(() => {
        $("#start").show();
        $("#resume").show();
        $("#stop").show();
        $("#chrono").show();
    }).then(() => {
        let i = 0;
        $("#grid").click(() => {
            $(".cell").mouseover(function () {
                if (i % 2 == 0) {
                    let x = this.id.split(',')[0] - "0", y = this.id.split(',')[1] - "0";
                    grid.grid[y][x] = 1;
                    $(this).css("background-color", "black");
                }
            });
            i++;
        })
        const str = document.getElementById('start');
        str.addEventListener('click', () => {
            var x = setInterval(() => {
                $("#stop").click(() => {
                    chrono.stop = true;
                    $("#start").prop("disabled", true);
                })
                $("#resume").click(() => {
                    chrono.stop = false;
                })
                if (!chrono.stop) {
                    var days = Math.floor(chrono.t / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((chrono.t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((chrono.t % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((chrono.t % (1000 * 60)) / 1000);
                    chrono.t += 1000;
                    $("#chrono").text(days + "d " + hours + "h "
                        + minutes + "m " + seconds + "s ");
                    if (chrono.t > 21600000) {
                        clearInterval(x);
                    }
                }


            }, 1000)
            var interval = 1;
            var timing = function () {
                var y = setInterval(() => {
                    if (!chrono.stop) {
                        game_of_life(grid, true);
                    }
                    if (interval != slider.value) {
                        interval = slider.value * 10;
                        console.log(interval);
                        clearInterval(y);
                        timing();
                    }
                }, interval);
            }
            timing();


        }, { once: true });

    })