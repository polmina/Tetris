var game = new Game();
game.initializeGame();
game.printPieceOnMap();
game.printMap();

nextMove();


//game.moveDown();
 //   game.printMap();


function nextMove(){
    //console.clear();
   // game.initializeMap();
    game.moveDown();
    game.printMap();
    
    setTimeout(nextMove, 200);
}





