var Piece = function (id, colour, shapes) {
    this.id = id;
    this.colour = colour;
    this.shapes = shapes;
    this.currentShape = 0;
    this.counter = 0;
    this.x = 4;
    this.y = 0;
    
};

Piece.prototype.moveRight = function () {
    this.x++;
};
Piece.prototype.moveLeft = function(){
    this.x--;
};
Piece.prototype.moveDown = function(){
    this.y++;
};
Piece.prototype.rotateLeft = function(){
    if((this.currentShape-1)<0){
        this.currentShape=this.shapes.length-1;
    }
    else {
        this.currentShape--;
    }
};
Piece.prototype.rotateRight = function(){
    if((this.currentShape+1)===this.shapes.length){
        this.currentShape=0;
    }
    else {
        this.currentShape++;
    }
};
Piece.prototype.increaseCounter = function(){
    this.counter++;
};
Piece.prototype.getCurrentShape = function(){
    return this.shapes[this.currentShape];
};

