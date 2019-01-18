var COLORS = [ '#FF0000',  '#0000FF',  '#31B404',  '#B40486',  '#FFFF00',  '#FF4000',  '#01DFA5'];

var printMap = function (game){
    var table = document.getElementById('myTable');
    for(var i=0;i<25;i++){
        for (var u=0;u<10;u++){
        var cell = game.map[i][u];
        table.rows[i].cells.item(u).style.background = "#FFFFFF";
        //document.getElementById(i+"_"+u).element.style.background = COLORS[cell-1];
    }
    }
    for(var i=0;i<25;i++){
        for (var u=0;u<10;u++){
        var cell = game.map[i][u];
        table.rows[i].cells.item(u).style.background = COLORS[cell-1];
        //document.getElementById(i+"_"+u).element.style.background = COLORS[cell-1];
    }
}
var score = document.getElementById('playerScore');
score.innerHTML = game.playerScore;
};

