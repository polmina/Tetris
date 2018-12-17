var COLORS = {red: '#FF0000', blue: '#0000FF', green: '#31B404', purple: '#B40486', yellow: '#FFFF00', orange: '#FF4000', cyan: '#01DFA5'};
var Game = function () {
    this.map;
    this.playerScore = 0;
    this.playerMaxScore = 0;
    this.currentPiece;
    this.nextPiece;
};
Game.prototype.initializeGame = function () {
    Game.prototype.initializeMap.call(this);
    Game.prototype.setCurrentPiece.call(this);
    Game.prototype.setNextPiece.call(this);
};
Game.prototype.rotateLeft = function () {
    if (this.checkNextMove("ROTATE_LEFT") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.rotateLeft();
        this.printPieceOnMap();
    }
};
Game.prototype.rotateRight = function () {
    if (this.checkNextMove("ROTATE_RIGHT") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.rotateRight();
        this.printPieceOnMap();
    }
    ;
};
Game.prototype.moveLeft = function () {
    if (this.checkNextMove("LEFT") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.moveLeft();
        this.printPieceOnMap();
    }
    ;
};
Game.prototype.moveRight = function () {
    if (this.checkNextMove("RIGHT") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.moveRight();
        this.printPieceOnMap();
    }
    ;
};
Game.prototype.moveDown = function () {
    if (this.checkNextMove("DOWN") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.moveDown();
        this.printPieceOnMap();

    } else { //hi ha colisio detectada
        this.currentPiece = this.nextPiece;
        Game.prototype.setNextPiece.call(this);
    }
};
Game.prototype.setMaxDown = function () {
    while (this.checkNextMove("DOWN") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.moveDown();
        this.printPieceOnMap();

    } 
    this.currentPiece = this.nextPiece;
    Game.prototype.setNextPiece.call(this);
    this.puntuacio++;
    };
 
Game.prototype.checkNextMove = function (direction) {
    switch (direction) {
        case "DOWN":
            return this.checkMoveDown(this.currentPiece);
            break;
        case "LEFT":
            return this.checkMoveLeft(this.currentPiece);
            break;
        case "RIGHT":
            return this.checkMoveRight(this.currentPiece);
            break;
        case "ROTATE_LEFT":
            return this.checkRotateLeft(this.currentPiece);
            break;
        case "ROTATE_RIGHT":
            return this.checkRotateRight(this.currentPiece);
            break;
    }
};
Game.prototype.checkRotateLeft = function (piece) {
    var nextPieceShape = this.generatePiece(piece.id);
    nextPieceShape.rotateLeft();
    for(var Y = 0; Y < 4; Y++){
        for(var X = 0; X < 4; X++){
            try{
               if(nextPieceShape.shapes[nextPieceShape.currentShape][Y][X] !== 0 && piece.shapes[piece.currentShape][Y][X] === 0){
                    
                    if (this.map[(piece.y + Y)][(piece.x + X)] !== 0) {
                            return false;
                    }
                }
            }catch(e){
                return false;
            }
        }
    }return true;
};
Game.prototype.checkRotateRight = function (piece) {
    var nextPieceShape = this.generatePiece(piece.id);
    nextPieceShape.rotateRight();
    for(var Y = 0; Y < 4; Y++){
        for(var X = 0; X < 4; X++){
            try{
               if(nextPieceShape.shapes[nextPieceShape.currentShape][Y][X] !== 0 && piece.shapes[piece.currentShape][Y][X] === 0){
                    
                    if (this.map[(piece.y + Y)][(piece.x + X)] !== 0) {
                            return false;
                    }
                }
            }catch(e){
                return false;
            }
        }
    }return true;
};
Game.prototype.checkMoveLeft = function (piece) {
    for (var X = 0; X < 4; X++) {
        for (var Y = 3; Y > -1; Y--) {
            if (piece.shapes[piece.currentShape][Y][X] !== 0) {
                if (X === 0 || piece.shapes[piece.currentShape][Y][X - 1] === 0 ) {
                    if (this.map[(piece.y + Y)][(piece.x + X) - 1] !== 0) {
                            return false;
                    }
                }
            }
        }
    }
    return true;
};
Game.prototype.checkMoveRight = function (piece) {
    for (var X = 3; X > -1; X--) {
        for (var Y = 3; Y > -1; Y--) {
            if (piece.shapes[piece.currentShape][Y][X] !== 0) {
                if (X + 1 === 4 || piece.shapes[piece.currentShape][Y][X + 1] === 0 ) {
                    if (this.map[(piece.y + Y)][(piece.x + X) + 1] !== 0) {
                            return false;
                        }
                }
            }
            
        }
    }
    return true;
};
Game.prototype.checkMoveDown = function (piece) {
    for (var Y = 3; Y > -1; Y--) {
        for (var X = 0; X < 4; X++) {
            if (piece.shapes[piece.currentShape][Y][X] !== 0) {
                try {
                   
                    if (Y+1 === 4 || piece.shapes[piece.currentShape][Y + 1][X] === 0 ) {
                        if (this.map[(piece.y + Y) + 1][(piece.x + X)] !== 0) {
                            return false;
                        }
                    }
                } catch (e) {
                    return false;
                }
            }
        }
    }
    return true;
};
Game.prototype.deleteLastKnownPosition = function () {
    var piece = this.currentPiece;
    for (var i = 0; i < 4; i++) {
        for (var u = 0; u < 4; u++) {

            if (piece.shapes[piece.currentShape][i][u] === 1) {
                this.map[piece.y + i][piece.x + u] = 0;
            }
        }
    }
};
Game.prototype.printPieceOnMap = function () {
    var piece = this.currentPiece;
    for (var i = 0; i < 4; i++) {
        for (var u = 0; u < 4; u++) {
            if (piece.shapes[piece.currentShape][i][u] === 1) {
                try{//console.log("y: " + (piece.y + i) + " x: " + (piece.x + u) + " == " + (piece.shapes[piece.currentShape][i][u]));
                    this.map[piece.y + i][piece.x + u] = 1;
                 }catch(e){}
            }
        }
    }
};
Game.prototype.setCurrentPiece = function () {
    this.currentPiece = Game.prototype.getRandomPiece.call(this);
};
Game.prototype.setNextPiece = function () {
    this.nextPiece = Game.prototype.getRandomPiece.call(this);
};

Game.prototype.setMapCell = function (x, y) {
    this.map[x][y] = 1;
};
Game.prototype.getRandomPiece = function () {
    var n = Math.floor(Math.random() * 7);
    //var n = 0;
    return this.generatePiece(n);
//    return this.createLine();
};
Game.prototype.generatePiece = function (n) {
    switch (n) {
        case 0:
            return this.createLine();
            break;
        case 1:
            return this.createSquare();
            break;
        case 2:
            return this.createLShape();
            break;
        case 3:
            return this.createJShape();
            break;
        case 4:
            return this.createTee();
            break;
        case 5:
            return this.createZShape();
            break;
        case 6:
            return this.createSShape();
            break;
    }
//    return this.createLine();
};
Game.prototype.initializeMap = function () {
    this.map = new Array(25);
    for (var i = 0; i < 25; i++) {
        this.map[i] = new Array(10);
        for (var u = 0; u < 10; u++) {
            this.map[i][u] = 0;
        }
    }
    ;
};
Game.prototype.printMap = function () {
    var string = "";
    for (i = 0; i < this.map.length; i++) {
        for (j = 0; j < this.map[1].length; j++) {
            switch (this.map[i][j]) {
                case 0:
                    string += '.';
                    break;
                case 1:
                    string += 'H';
                    break;
            }
            string += " ";
        }
        string += '\n';
    }
    console.log(string);
}
Game.prototype.createLine = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(0, COLORS.red, shapes);
};
Game.prototype.createSquare = function () {
    var shapes = [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]

    ];
    return new Piece(1, COLORS.blue, shapes);
};
Game.prototype.createLShape = function () {
    var shapes = [
        [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(2, COLORS.green, shapes);
};
Game.prototype.createJShape = function () {
    var shapes = [
        [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(3, COLORS.orange, shapes);
};
Game.prototype.createTee = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(4, COLORS.purple, shapes);
};
Game.prototype.createZShape = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(5, COLORS.cyan, shapes);
};
Game.prototype.createSShape = function () {
    var shapes = [
        [
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(6, COLORS.yellow, shapes);
};