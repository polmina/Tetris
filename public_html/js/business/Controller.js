var game;
if(document.cookie.split(';')[0].split("=")[1]=="undefined"){document.getElementById('topPlayerScore').innerHTML="0";}else
    {document.getElementById('topPlayerScore').innerHTML = document.cookie.split(';')[0].split("=")[1];}
function newGame(){
    game = new Game();
    game.initializeGame();
    game.printPieceOnMap();
    game.printMap();
    game.checkForFullRows();
    
    nextMove();

}

function nextMove(){
    console.clear();
    game.checkForFullRows();
    game.moveDown();
    game.printMap();
   

    printMap(game);
    if(game.getLost()===false){
        setTimeout(nextMove, 150);
        
    }else{
        alert("HAS PERDUT");
        document.getElementById('topPlayerScore').innerHTML = game.playerScore;
        document.cookie = "puntuacio="+game.playerScore;
    }
}
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    switch(charStr){
        case 'a':
            game.moveLeft();
            break;
        case 's':
            game.setMaxDown();
            break;
        case 'd':
            game.moveRight();
            break;
        case 'e':
            game.rotateRight();
            break;
        case 'q':
            game.rotateLeft();
            break;
    }
    //game.printMap();
};




