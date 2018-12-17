var game = new Game();
game.initializeGame();
game.printPieceOnMap();
game.printMap();

nextMove();


//game.moveDown();
 //   game.printMap();


function nextMove(){
    //console.clear();
    //game.initializeMap();
    game.moveDown();
    game.printMap();
    
    setTimeout(nextMove, 200);
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




