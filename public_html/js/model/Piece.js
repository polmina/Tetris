var Piece = function (id, colour, shapes) {
    this.id = id;
    this.colour = colour;
    this.shapes = shapes;
    this.counter = 0;
    
};

Piece.prototype.moveRight = function () {
    
};
Piece.prototype.moveLeft = function(){
    
};
Piece.prototype.increaseCounter = function(){
    this.counter++;
};

